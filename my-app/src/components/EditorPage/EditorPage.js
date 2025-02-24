import React from 'react';
import STORYTELLER_DATA from '../Stories/StorytellerData';
import Dropdown from './Dropdown/Dropdown'
import ComicView from './ComicView/ComicView';
import './EditorPage.css';

const IMAGES = {
    backgrounds: [
        'beige',
        'dam',
        'elwha-estuary',
        'elwha-news',
        'sea',
        'sea-mountains',
        'sea-mountains-left',
        'beach-small',
        'beach-big',
        'beach-rocks',
        'beach-rocks-2',
        'beach-wrack',
        'dark-blue',
        'sc-earth-pod',
        'space-test',
        'trash-island',
        'net',
        'north-america',
        'north-america-blank',
        'washington-state',
    ],
    sprites: [
        // Our sprites
        'sally-salmon',
        'sally-sad',
        'simon-salmon',
        'dead-salmon',
        'submarine',
        'user-placeholder',
        'wendy-whale',
        'pancake-flapjack-octopus',
        'pancake-bowl',
        'shawn-seagull',
        'shawn-sad',
        'net-rectangle',
        'thought-bubble',
    ],
};

class EditorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storytellerData: STORYTELLER_DATA,
            currentSceneName: 'testScene',
            currentFrame: 0,
            targetSpriteIdx: -1,
            targetSpriteMoveOffsetPxX: 0,
            targetSpriteMoveOffsetPxY: 0,
            showInstructions: false,
            spriteSearchFilter: '',
        };
    }

    componentDidMount() {
        window.onbeforeunload = () => {
            return 'Make sure you saved your work before exiting!';
        };
    }

    componentWillUnmount() {
        window.onbeforeunload = null;
    }

    // Get current game scene
    getCurrentScene() {
        return this.state.storytellerData[this.state.currentSceneName];
    }

    // Get target sprite
    getTargetSprite() {
        if (this.state.targetSpriteIdx === -1) {
            return null;
        }
        else if (this.state.currentFrame === -1) {
            return this.getCurrentScene().baseFrame[this.state.targetSpriteIdx];
        }
        else {
            return this.getCurrentScene().frames[this.state.currentFrame][this.state.targetSpriteIdx];
        }
    }

    // Get data about the current game state required for `ComicView`
    getCurrentComicViewData() {
        const sceneName = this.state.currentSceneName;
        const sceneFrame = this.state.currentFrame;
        const currentScene = this.getCurrentScene();

        let currentDialogue = null;
        console.log(sceneFrame);
        console.log(currentScene);
        if (sceneFrame !== -1 && 'dialogue' in currentScene) {
            currentDialogue = currentScene.dialogue[sceneFrame];
        }

        let currentDecision = null;
        if (sceneFrame === currentScene.frames.length - 1 && typeof(currentScene.nextScene) !== 'string') {
            currentDecision = currentScene.nextScene;
        }

        return {
            sceneName,
            background: currentScene.background,
            frame: [
                ...(currentScene.baseFrame || []),
                ...(currentScene.frames[sceneFrame] || [])
            ],
            dialogue: currentDialogue,
            decision: currentDecision,
        };
    }

    // Return filtered list of sprites that can be spawned
    getFilteredSpawnSprites() {
        return IMAGES.sprites.filter(sprite => sprite.includes(this.state.spriteSearchFilter));
    }

    // Convert (x, y) screen position to percentage across storyteller view bounds
    posToPerc(x, y) {
        const storytellerBounds = document.getElementById('storyteller-view').getBoundingClientRect();
        const viewLeft = storytellerBounds.left;
        const viewTop = storytellerBounds.top;
        const viewSize = storytellerBounds.width;

        // Round to one decimal
        const percX = Math.floor((x - viewLeft) / viewSize * 1000) / 10;
        const percY = Math.floor((y - viewTop) / viewSize * 1000) / 10;

        return [percX, percY];
    }

    // Set whether the sprite should follow the mouse
    setSpriteFollowMouse(shouldFollowMouse) {
        if(shouldFollowMouse) {
            document.onmousemove = event => {
                if (this.state.targetSpriteIdx === -1) {
                    // If no sprite is targetted, stop following
                    this.setSpriteFollowMouse(false);
                    return;
                }

                const {pageX, pageY} = event;
                const [percX, percY] = this.posToPerc(pageX, pageY);
                this.updateTargetSpriteAttributes({
                    x: percX + this.state.targetSpriteMoveOffsetPxX,
                    y: percY + this.state.targetSpriteMoveOffsetPxY,
                });
            }
        }
        else {
            document.onmousemove = () => {};
        }
    }

    // Update current scene with new attributes
    updateCurrentSceneAttributes(newSceneAttributes) {
        this.setState({
            storytellerData: {
                ...this.state.storytellerData,
                [this.state.currentSceneName]: {
                    ...this.state.storytellerData[this.state.currentSceneName],
                    ...newSceneAttributes
                }
            }
        });
    }

    // Update target sprite with new attributes
    updateTargetSpriteAttributes(newSpriteAttributes) {
        if (this.state.currentFrame === -1) {
            // Base frame
            // Get clone of current base frame
            const newBaseFrame = JSON.parse(JSON.stringify(this.getCurrentScene().baseFrame));

            newBaseFrame[this.state.targetSpriteIdx] = {
                ...newBaseFrame[this.state.targetSpriteIdx],
                ...newSpriteAttributes
            };

            this.setState({
                storytellerData: {
                    ...this.state.storytellerData,
                    [this.state.currentSceneName]: {
                        ...this.state.storytellerData[this.state.currentSceneName],
                        baseFrame: newBaseFrame,
                    }
                }
            });
        }
        else {
            // Other frames
            // Get clone of current scene frames
            const newFrames = JSON.parse(JSON.stringify(this.getCurrentScene().frames));

            newFrames[this.state.currentFrame][this.state.targetSpriteIdx] = {
                ...newFrames[this.state.currentFrame][this.state.targetSpriteIdx],
                ...newSpriteAttributes
            };

            this.setState({
                storytellerData: {
                    ...this.state.storytellerData,
                    [this.state.currentSceneName]: {
                        ...this.state.storytellerData[this.state.currentSceneName],
                        frames: newFrames,
                    }
                }
            });
        }
    }

    // Export: open window that shows storyteller data as JSON
    export() {
        window.open('', null, 'status=yes,toolbar=no,menubar=no,location=no').document.write('<pre>' +
            JSON.stringify(this.state.storytellerData, null, 2) +
        '</pre>');
    }

    // Import: open dialog to import storyteller data as JSON
    import() {
        const result = prompt("Paste Storyteller data as JSON");
        if (!result) return;
        const obj = JSON.parse(result);

        // if length of dialogue is less than length of frames, fix it to match
        Object.keys(obj).forEach(sceneName => {
            const scene = obj[sceneName];
            if ('dialogue' in scene && scene.dialogue.length !== scene.frames.length) {
                for (let i = scene.dialogue.length; i < scene.frames.length; i++) {
                    scene.dialogue.push(null);
                }
            }
        })

        this.setState({
            storytellerData: obj,
            currentSceneName: 'testScene',
            currentFrame: 0,
            targetSpriteIdx: -1,
        });
    }

    // Get onClickListeners for sprites in current frame
    getCurrentOnClickListeners() {
        const currentScene = this.getCurrentScene();
        const sceneFrame = this.state.currentFrame;
        
        let baseFrameSize = (currentScene.baseFrame || []).length;
        let currentFrameSprites = (currentScene.frames[sceneFrame] || []);

        const onClickListeners = [];

        if (sceneFrame === -1) {
            baseFrameSize = 0;
            currentFrameSprites = (currentScene.baseFrame || []);
        }

        for (let i = 0; i < baseFrameSize; i++) {
            // For all the sprites in the base frame, add a no-op listener
            onClickListeners.push(idx => () => {});
        }

        currentFrameSprites.forEach(sprite => {
            // For all sprites in the current frame, add a callback
            onClickListeners.push(rawIdx => event => {
                const idx = rawIdx - baseFrameSize;
                this.setState({
                    targetSpriteIdx: idx,
                });
                this.setSpriteFollowMouse(false);

                if(event.shiftKey) {
                    this.setSpriteFollowMouse(true);

                    // Set offset so that element follows cursor relative to initial click on element
                    const [clickX, clickY] = this.posToPerc(event.pageX, event.pageY);
                    const targetSpriteRect = event.target.getBoundingClientRect();
                    const [elementOriginX, elementOriginY] = this.posToPerc(targetSpriteRect.left, targetSpriteRect.top);
                    

                    this.setState({
                        targetSpriteMoveOffsetPxX: elementOriginX - clickX,
                        targetSpriteMoveOffsetPxY: elementOriginY - clickY,
                    });
                }
            });


        });

        return onClickListeners;
    }

    // render editor view for import, export, instructions
    renderEditorPrimarySection() {
        // Toggle instructions visibility
        const toggleInstructions = () => {
            this.setState({ showInstructions: !this.state.showInstructions });
        }
        return (
            <div className="primary-section editor-section">
                <div className="primary-section-btns">
                    <button onClick={this.export.bind(this)} className='download-upload-btn'>
                        <span>Download</span>
                    </button>
                    <button onClick={this.import.bind(this)} className='download-upload-btn'>
                        <span>Upload</span>
                    </button>
                </div>
            </div>
        )
    }

    // Render sprite spawner view
    renderSpriteSpawner() {
        // Update current sprite spawn search filter
        const updateFilter = event => {
            const newFilter = event.target.value;
            this.setState({ spriteSearchFilter: newFilter });
        }

        // Spawn a new sprite into the current frame
        const spawnSprite = spriteName => {
            const newSprite = {
                type: 'sprite',
                image: spriteName,
                x: 0,
                y: 0,
                size: 50,
                flipX: false,
            }
            if (this.state.currentFrame === -1) {
                // Base frame
                // Get clone of current base frame
                let newBaseFrame = JSON.parse(JSON.stringify(this.getCurrentScene().baseFrame));
                newBaseFrame.push(newSprite);
    
                this.setState({
                    storytellerData: {
                        ...this.state.storytellerData,
                        [this.state.currentSceneName]: {
                            ...this.state.storytellerData[this.state.currentSceneName],
                            baseFrame: newBaseFrame,
                        }
                    }
                });
            }
            else {
                // Other frames
                // Get clone of current scene frame
                const newFrames = JSON.parse(JSON.stringify(this.getCurrentScene().frames));
                newFrames[this.state.currentFrame].push(newSprite)
    
                this.setState({
                    storytellerData: {
                        ...this.state.storytellerData,
                        [this.state.currentSceneName]: {
                            ...this.state.storytellerData[this.state.currentSceneName],
                            frames: newFrames,
                        }
                    }
                });
            }
        }

        return (
            <div className="sprite-spawner-section editor-section selector-section">
                <h2>Add Sprite</h2>
                <input type="text" onChange={updateFilter.bind(this)} value={this.state.spriteSearchFilter} placeholder="Search..." />
                <div className="selector-scroll container offcanvas-height-limit overflow-auto">
                    {
                        this.getFilteredSpawnSprites().map((sprite, idx) => (
                            <div className="selection row border-top" key={idx}>
                                <img src={`/sprites/sprite-${sprite}.png`} className='img-size' alt="" />
                                <button
                                    className="selection-primary sprite-button mt-auto mb-auto"
                                    onClick={() => spawnSprite.bind(this)(sprite)}>
                                    {sprite}
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }

    // render scene editor view
    renderSceneEditor() {
        // Update current scene with new type
        const updateSceneType = newSceneType => {
            if (newSceneType === 'minigame' && !this.getCurrentScene().minigame) {
                this.updateCurrentSceneAttributes({
                    type: newSceneType,
                    minigame: 'DemoMinigame',
                });
            }
            else if (newSceneType === 'comic' && !this.getCurrentScene().background) {
                this.updateCurrentSceneAttributes({
                    background: 'sea',
                    baseFrame: [],
                    frames: [],
                });
            }
            else {
                this.updateCurrentSceneAttributes({
                    type: newSceneType,
                });
            }
        }

        // Update current scene with new minigame
        const updateSceneMinigame = newMinigame => {
            this.updateCurrentSceneAttributes({ minigame: newMinigame });
        }

        // Update current scene with new background
        const updateSceneBackground = newBackground => {
            this.updateCurrentSceneAttributes({ background: newBackground });
        }

        // Update current scene with new nextScene
        const updateSceneNext = newNextScene => {
            this.updateCurrentSceneAttributes({ nextScene: newNextScene });
        }

        return (
            <div className="attrs-section editor-section">
                <h2>Attributes</h2>
                <div className="attr">
                    {/* Speaker */}
                    {/* <label htmlFor="scene-type">Scene Type</label>
                    <Dropdown
                        id="scene-type"
                        options={['Comic', 'Minigame']}
                        onChange={updateSceneType.bind(this)}
                        selected={this.getCurrentScene().type} /> */}
                </div>

                {
                    this.getCurrentScene().type === 'minigame' &&
                        <>
                            <div className="attr">
                                <label htmlFor="minigame-type">Minigame</label>
                                <Dropdown
                                    id="minigame-type"
                                    options={"Testing"} //{Object.keys(minigames)}
                                    onChange={updateSceneMinigame.bind(this)}
                                    selected={this.getCurrentScene().minigame} />
                            </div>
                        </>
                }

                {
                    this.getCurrentScene().type === 'comic' &&
                        <>
                            <div className="attr">
                                <label htmlFor="background-type">Background</label>
                                <Dropdown
                                    id="background-type"
                                    options={IMAGES.backgrounds}
                                    onChange={updateSceneBackground.bind(this)}
                                    selected={this.getCurrentScene().background} />
                            </div>
                        </>
                }

                <div className="attr">
                    <label htmlFor="scene-type">Next Scene</label>
                    {
                        typeof(this.getCurrentScene().nextScene) === 'string' &&
                            <Dropdown
                                id="scene-type"
                                options={Object.keys(this.state.storytellerData)}
                                onChange={updateSceneNext.bind(this)}
                                selected={this.getCurrentScene().nextScene} />
                    }
                    {
                        typeof(this.getCurrentScene().nextScene) !== 'string' &&
                            <p>Decision on frame {this.getCurrentScene().frames.length - 1}</p>
                    }
                </div>
            </div>
        );
    }

    // render sprite editor view
    renderSpriteEditor() {
        if (this.state.targetSpriteIdx === -1) {
            return <></>;
        }

        // Toggle target sprite flip X
        const toggleFlipX = () => {
            this.updateTargetSpriteAttributes({ flipX: !this.getTargetSprite().flipX });
        }

        // Update target sprite image
        const updateSpriteImage = newImage => {
            this.updateTargetSpriteAttributes({ image: newImage });
        }

        // Given a sprite property and an optional parser function, returns a onChange listener
        const updateSpriteAttributeFromInput = prop => event => {
            const newValue = event.target.value;
            this.updateTargetSpriteAttributes({ [prop]: newValue || 0 });
        }

        // Deselect target sprite
        const deselectTargetSprite = () => {
            this.setState({ targetSpriteIdx: -1 });
        }

        // Delete target sprite
        const deleteTargetSprite = () => {
            const confirmed = window.confirm(`Delete sprite?`)
            if (!confirmed) return;

            if (this.state.currentFrame === -1) {
                // Base frame
                // Get clone of current base frame
                let newBaseFrame = JSON.parse(JSON.stringify(this.getCurrentScene().baseFrame));
                newBaseFrame.splice(this.state.targetSpriteIdx, 1);
    
                this.setState({
                    storytellerData: {
                        ...this.state.storytellerData,
                        [this.state.currentSceneName]: {
                            ...this.state.storytellerData[this.state.currentSceneName],
                            baseFrame: newBaseFrame,
                        }
                    },
                    targetSpriteIdx: -1,
                });
            }
            else {
                // Other frames
                // Get clone of current scene frame
                const newFrames = JSON.parse(JSON.stringify(this.getCurrentScene().frames));
                newFrames[this.state.currentFrame].splice(this.state.targetSpriteIdx, 1);

                this.setState({
                    storytellerData: {
                        ...this.state.storytellerData,
                        [this.state.currentSceneName]: {
                            ...this.state.storytellerData[this.state.currentSceneName],
                            frames: newFrames,
                        }
                    },
                    targetSpriteIdx: -1,
                });
            }
        }

        const targetSprite = this.getTargetSprite();

        return (
            <div className="attrs-section editor-section">
                <h2>Sprite Attrs</h2>

                {/* <button onClick={deselectTargetSprite.bind(this)}>Deselect</button> */}
                
                <button onClick={deleteTargetSprite.bind(this)}>Delete</button>

                <div className="attr">
                    <label htmlFor="sprite-image">Image</label>
                    <Dropdown
                        id="sprite-image"
                        options={IMAGES.sprites}
                        onChange={updateSpriteImage.bind(this)}
                        selected={targetSprite.image} />
                </div>

                <div className="attr">
                    <label htmlFor="sprite-id">ID (optional)</label>
                    <input type="text"
                        id="sprite-id"
                        value={targetSprite.id || ''}
                        onChange={updateSpriteAttributeFromInput('id').bind(this)} />
                </div>

                <div className="attr">
                    <label htmlFor="sprite-x">X Position</label>
                    <input type="number"
                        id="sprite-size"
                        min="0" max="100" step="0.1"
                        value={targetSprite.x}
                        onChange={updateSpriteAttributeFromInput('x').bind(this)} />
                </div>

                <div className="attr">
                    <label htmlFor="sprite-y">Y Position</label>
                    <input type="number"
                        id="sprite-sze"
                        min="0" max="100" step="0.1"
                        value={targetSprite.y}
                        onChange={updateSpriteAttributeFromInput('y').bind(this)} />
                </div>

                <div className="attr">
                    <label htmlFor="sprite-size">Size</label>
                    <input type="number"
                        id="sprite-size"
                        min="0" max="100" step="0.1"
                        value={targetSprite.size}
                        onChange={updateSpriteAttributeFromInput('size').bind(this)} />
                </div>

                <div className="attr">
                    <label htmlFor="sprite-flip-x">Flip X</label>
                    <span>{!!targetSprite.flipX ? 'true' : 'false'}</span>
                    <button onClick={toggleFlipX.bind(this)}>Toggle</button>
                </div>
            </div>
        );
    }

    // Render dialogue editor
    renderDialogueEditor() {
        console.log(this.getCurrentScene().type, "what type")
        if (this.getCurrentScene().type === 'minigame' || this.state.currentFrame === -1) {
            return <></>;
        }

        // Curried function that set an attribute for the current frame's dialogue from an
        // input event
        const setCurrentFrameDialogueAttrFromInput = attr => event => {
            const newValue = typeof(event) === 'string' ? event : event.target.value;
            // Clone existing dialog
            const newDialogueAttr = JSON.parse(JSON.stringify(this.getCurrentScene().dialogue));
            newDialogueAttr[this.state.currentFrame] = {
                ...newDialogueAttr[this.state.currentFrame],
                [attr]: newValue,
            };
            this.updateCurrentSceneAttributes({
                dialogue: newDialogueAttr
            });
        };

        // Curied function that sets whether dialogue is enabled for the current frame by
        // setting it to either null or a valid dialogue object
        const setCurrentFrameDialogueEnabled = isEnabled => () => {
            // Clone existing dialog
            let newDialogueAttr;
            if ('dialogue' in this.getCurrentScene()) {
                newDialogueAttr = JSON.parse(JSON.stringify(this.getCurrentScene().dialogue));
            }
            else {
                newDialogueAttr = this.getCurrentScene().frames.map(() => null);
            }
            newDialogueAttr[this.state.currentFrame] = !isEnabled ? null : {
                speaker: '',
                message: '',
                type: 'left',
            };
            this.updateCurrentSceneAttributes({
                dialogue: newDialogueAttr
            });
        }

        // Curried function that sets whether the next scene is determined by a decision
        const setNextSceneIsDecision = isDecision => () => {
            const defaultNextScene = Object.keys(this.state.storytellerData)[0];
            this.updateCurrentSceneAttributes({
                nextScene: isDecision ? { 'Continue': defaultNextScene } : defaultNextScene,
            });
        }

        // Curried function that renames a decision label according to an input event
        const renameChoiceLabel = oldLabel => event => {
            const newLabel = event.target.value;
            const newNextScene = JSON.parse(JSON.stringify(this.getCurrentScene().nextScene));
            if (newLabel !== oldLabel) {
                newNextScene[newLabel] = newNextScene[oldLabel];
                delete newNextScene[oldLabel];
                this.updateCurrentSceneAttributes({
                    nextScene: newNextScene,
                });
            }
        }

        // Curried function that changes the target destination 
        const setChoiceDestination = label => newDestination => {
            const newNextScene = JSON.parse(JSON.stringify(this.getCurrentScene().nextScene));
            newNextScene[label] = newDestination;
            this.updateCurrentSceneAttributes({
                nextScene: newNextScene,
            });
        }

        // Add additional choice to decisions
        const addChoice = () => {
            const newNextScene = JSON.parse(JSON.stringify(this.getCurrentScene().nextScene));
            const newLabel = `Choice ${Object.keys(this.getCurrentScene().nextScene).length}`;
            const newDestination = Object.keys(this.state.storytellerData)[0];
            newNextScene[newLabel] = newDestination;
            this.updateCurrentSceneAttributes({
                nextScene: newNextScene,
            });
        }

        // Remove last choice from decision
        const removeChoice = () => {
            const newNextScene = JSON.parse(JSON.stringify(this.getCurrentScene().nextScene));
            const decisionLabels = Object.keys(this.getCurrentScene().nextScene);
            const labelToRemove = decisionLabels[decisionLabels.length - 1];
            delete newNextScene[labelToRemove];
            this.updateCurrentSceneAttributes({
                nextScene: newNextScene,
            });
        }

        const currentFrameDialogue = this.getCurrentComicViewData().dialogue;
        const currentFrameDecision = this.getCurrentComicViewData().decision;
        const currentFrameHasDialogue = currentFrameDialogue !== null;
        const currentFrameIsFinalFrame = this.state.currentFrame === this.getCurrentScene().frames.length - 1;
        const nextSceneIsDecision = typeof(this.getCurrentScene().nextScene) !== 'string';

        console.log(currentFrameDialogue);
        return (
            <div className="dialogue-section attrs-section editor-section">
                <h2>Dialogue</h2>

                {
                    (!currentFrameIsFinalFrame || !nextSceneIsDecision) &&
                        <button onClick={setCurrentFrameDialogueEnabled.bind(this)(!currentFrameHasDialogue)}>
                            {currentFrameHasDialogue ? 'Remove' : 'Add'} Dialogue
                        </button>
                }

                {
                    (!currentFrameHasDialogue && currentFrameIsFinalFrame) &&
                        <button onClick={setNextSceneIsDecision.bind(this)(!nextSceneIsDecision)}>
                            {nextSceneIsDecision ? 'Remove' : 'Add'} Decision
                        </button>
                }

                {
                    (currentFrameHasDialogue || currentFrameDecision !== null) &&
                        <>
                            <div className="attr">
                                <label htmlFor="dialogue-speaker">Speaker</label>
                                <input type="text"
                                    id="dialogue-speaker"
                                    value={currentFrameDialogue.speaker}
                                    onChange={setCurrentFrameDialogueAttrFromInput('speaker').bind(this)} />
                            </div>
                            <div className="attr">
                                <label htmlFor="dialogue-message">Message</label>
                                <textarea
                                    id="dialogue-message"
                                    value={currentFrameDialogue.message}
                                    onChange={setCurrentFrameDialogueAttrFromInput('message').bind(this)} />
                            </div>
                            <div className="attr">
                                <label htmlFor="dialogue-type">Dialogue Type</label>
                                <Dropdown
                                    id="dialogue-type"
                                    options={['left', 'right', 'nospeaker']}
                                    selected={currentFrameDialogue.message}
                                    onChange={setCurrentFrameDialogueAttrFromInput('type').bind(this)} />
                            </div>
                        </>
                }

                {
                    (!currentFrameHasDialogue && currentFrameIsFinalFrame && nextSceneIsDecision) &&
                        (<div className="attr-map">
                            <div className="attr-map-header">
                                <span>Label</span>
                                <span>Destination</span>
                            </div>
                            {
                                Object.keys(this.getCurrentScene().nextScene).sort().map((label, idx) =>  {
                                    return (
                                        <div key={idx}>
                                            <input type="text"
                                                value={label}
                                                onChange={renameChoiceLabel(label).bind(this)} />
                                            <Dropdown
                                                options={Object.keys(this.state.storytellerData)}
                                                onChange={setChoiceDestination(label).bind(this)}
                                                selected={this.getCurrentScene().nextScene[label]} />
                                        </div>
                                    );
                                })
                            }
                            <div>
                                <button onClick={addChoice.bind(this)}>Add Choice</button>
                                {
                                    Object.keys(this.getCurrentScene().nextScene).length > 1 &&
                                        <button onClick={removeChoice.bind(this)}>Remove Choice</button>
                                }
                            </div>
                        </div>)
                }
            </div>
        )
    }

    // Render Scene selection view
    renderSceneSelection() {
        // Sets the current scene
        const setCurrentSceneNameCallback = newSceneName => {
            this.setState({
                currentSceneName: newSceneName,
                currentFrame: 0,
                targetSpriteIdx: -1,
            });
        }

        // Add new scene
        const addNewScene = () => {
            const newSceneName = window.prompt('Enter new scene name');
            this.setState({
                storytellerData: {
                    ...this.state.storytellerData,
                    [newSceneName]: {
                        type: 'comic',
                        background: 'sea',
                        nextScene: 'testScene2',
                        baseFrame: [],
                        frames: []
                    }
                }
            });
        }

        const HandleDelete = (sceneName) => {
            if (Object.keys(this.state.storytellerData).length === 1) {
                window.alert("Can't delete if there's only one scene")
            } else {
                let newList = {};
                Object.keys(this.state.storytellerData).forEach((scene) => {
                    if(scene !== sceneName) {
                        newList[scene] = this.state.storytellerData[scene]
                    }
                });
                this.setState({
                    storytellerData: newList
                });
                // Then redirects to the first one
                if(this.state.currentSceneName === sceneName) {
                    this.setState({
                        currentSceneName: Object.keys(newList)[0],
                        currentFrame: 0,
                        targetSpriteIdx: -1,
                    });
                }
            }
        }

        return (
            <div className="selector-section editor-section">
                <h2>Scenes</h2>
                <div className="selector-scroll container scene-height-limit overflow-auto">
                    {
                        Object.keys(this.state.storytellerData).map((sceneName, idx) => (
                            <div className={`selection ${this.state.currentSceneName === sceneName ? 'selected' : ''}`} key={idx}>
                                <button
                                    className="selection-primary"
                                    onClick={() => setCurrentSceneNameCallback.bind(this)(sceneName)}
                                >
                                    {sceneName}
                                </button>
                                <button onClick={() => HandleDelete(sceneName)}>Delete</button>
                            </div>
                        ))
                    }
                </div>
                <div className="selection">
                    <button className="selection-primary" onClick={() => addNewScene.bind(this)()}>Add New Scene</button>
                </div>
            </div>
        );
    }

    // Render Frame selection view
    renderFrameSelection() {
        if (this.getCurrentScene().type === 'minigame') {
            return <div></div>;
        }

        // Sets the current frame
        const setCurrentFrameCallback = newFrameIdx => {
            this.setState({
                currentFrame: newFrameIdx,
                targetSpriteIdx: -1,
            });
        }

        // Adds a new frame with particular content
        const addNewFrame = newFrameContent => {
            const newSceneAttrs = {
                frames: [
                    ...this.state.storytellerData[this.state.currentSceneName].frames,
                    JSON.parse(JSON.stringify(newFrameContent))
                ],
            };

            if ('dialogue' in this.state.storytellerData[this.state.currentSceneName]) {
                newSceneAttrs.dialogue = [
                    ...this.state.storytellerData[this.state.currentSceneName].dialogue,
                    null
                ];
            }

            this.updateCurrentSceneAttributes(newSceneAttrs);
        }

        // Deletes a frame
        const deleteFrame = frameIndex => {
            const confirmed = window.confirm(`Delete frame ${frameIndex}?`)
            if (!confirmed) return;

            let newFrames = JSON.parse(JSON.stringify(this.getCurrentScene().frames));
            newFrames.splice(frameIndex, 1);

            const newSceneAttrs = {
                frames: newFrames,
            };

            if ('dialogue' in this.state.storytellerData[this.state.currentSceneName]) {
                let newDialogue = JSON.parse(JSON.stringify(this.getCurrentScene().dialogue));
                newDialogue.splice(frameIndex, 1);
                newSceneAttrs.dialogue = newDialogue;
            }

            this.setState({ currentFrame: -1 });
            this.updateCurrentSceneAttributes(newSceneAttrs);
        }

        return (
            <div className="selector-section editor-section">
                <h2>Manage Frames</h2>
                <div className="selector-scroll ">
                    <div className={`selection ${this.state.currentFrame === -1 ? 'selected' : ''}`}>
                        <button
                            className='selection-primary'
                            onClick={() => setCurrentFrameCallback.bind(this)(-1)}>
                            Base Frame
                        </button>
                    </div>
                    <div className="selection">
                        <button className="selection-primary" onClick={() => addNewFrame.bind(this)([])}>Add New Frame</button>
                    </div>
                    
                    {
                        this.getCurrentScene().frames.map((frame, idx) => (
                            <div className={`selection ${this.state.currentFrame === idx ? 'selected' : ''}`} key={idx}>
                                <button
                                    className="selection-primary"
                                    onClick={() => setCurrentFrameCallback.bind(this)(idx)}
                                >
                                    Frame {idx}
                                </button>

                                <button
                                    className="selection-secondary"
                                    onClick={() => addNewFrame.bind(this)(frame)}
                                >
                                    <span className="material-icons-outlined">content_copy</span>
                                </button>

                                <button
                                    className="selection-secondary"
                                    onClick={() => deleteFrame.bind(this)(idx)}
                                >
                                    <span className="material-icons-outlined">delete</span>
                                </button>
                            </div>
                        ))
                    } 
                </div>
            </div>
        );
    }

    // Render Storytelling view (either comic or minigame)
    renderStorytellerView() {
        const currentScene = this.getCurrentScene();
        if (currentScene.type === 'comic') {
            return (
                <ComicView
                    sceneName={this.state.currentSceneName}
                    background={this.getCurrentComicViewData().background}
                    frame={this.getCurrentComicViewData().frame}
                    dialogue={this.getCurrentComicViewData().dialogue}
                    decision={this.getCurrentComicViewData().decision}
                    onClickListeners={this.getCurrentOnClickListeners()} 
                    onEditorPage={'true'}
                    LoadSpriteEditor={this.renderSpriteEditor()}/>
            );
        }
        else if (currentScene.type === 'minigame') {
            return <p>Minigame {this.getCurrentScene().minigame} cannot be previewed</p>;
        }
        else {
            return <div></div>;
        }
    }



    render() {
        return (
            <>
                {/* Navbar at the top */}
                <div className='editor-nav'>
                    {/* File */}
                    <div className="dropdown">
                        <button className='dropdown-btn'>File</button>
                        <ul className='dropdown-content'>
                            {this.renderEditorPrimarySection()}
                        </ul>
                    </div>

                    {/* Scene */}
                    <button data-bs-toggle="offcanvas" data-bs-target="#sceneOffCanvas" aria-controls="offcanvasWithBothOptions">
                        Scene
                    </button>
                        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="sceneOffCanvas" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div className="offcanvas-header">
                            <h2 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Scene: {this.state.currentSceneName}</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="editor-pane">
                                {this.renderSceneSelection()}
                                {this.renderFrameSelection()}
                                {this.renderSceneEditor()}
                                {/* {this.renderFrameSelection()}
                                {this.renderDialogueEditor()}
                                {this.renderSpriteEditor()} */}
                            </div>
                        </div>
                    </div>

                    {/* Frame */}
                    <button data-bs-toggle="offcanvas" data-bs-target="#frameOffCanvas" aria-controls="offcanvasWithBothOptions">
                        Frame
                    </button>
                        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="frameOffCanvas" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div className="offcanvas-header">
                            <h2 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Frame</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="editor-pane">
                                {this.renderSpriteSpawner()}
                                {this.renderDialogueEditor()}
                                {/* {this.renderFrameSelection()}
                                {this.renderDialogueEditor()}
                                {this.renderSpriteEditor()} */}
                            </div>
                        </div>
                    </div>
                    
                    {/* Help */}
                    <div className="dropdown">
                        <button className='dropdown-btn help'>Help</button>
                        <ul className="dropdown-content">
                            <h2>Instructions</h2>
                                <ul>
                                    <li>Use scenes and frames sections to navigate game</li>
                                    <li>Use attributes sections to edit attributes</li>
                                    <li>Click on a sprite to select it for editing</li>
                                    <li>Shift+click on a sprite to follow cursor, then click again to drop</li>
                                    <li>Don't forget to import/export</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div id="storyteller" className="editor-page">
                    {/* <div id='storyteller' className='editor-page'>
                        <div className='editor-pane'> */}
                            {/* {this.renderEditorPrimarySection()} */}
                            {/* {this.renderSpriteSpawner()} */}
                        {/* </div>
                    </div> */}

                        <div id="storyteller-view">
                            {this.renderStorytellerView()}
                        </div>

                        {/* <div className="editor-pane">
                            {this.renderSceneSelection()}
                            {this.renderFrameSelection()}
                            {this.renderSceneEditor()}
                            {this.renderDialogueEditor()}
                            {this.renderSpriteEditor()}
                        </div> */}
                    </div>
            </>
        );
    }
}

export default EditorPage;