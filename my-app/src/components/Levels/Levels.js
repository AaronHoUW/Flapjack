import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LearnButton,
    FooterContainer,
    FooterText,
    FooterCopyright,
} from '../Home/styles.tsx';


function Levels() {
    const navigate = useNavigate();
    return (
        <>
            <div className='level-one'>
                <div className='seagull'>
                    <div className='level-div col my-auto'>
                        <h2 className='first-title'>Level 1: Meet Shawn the Seagull</h2>
                        <p className='first-info'> Meet Shawn and learn about what Trash Islands are. Maybe you can even help clean up trash on the beach!
                        </p>
                        <LearnButton className="link-button" onClick={() => navigate('/level1')}>Play</LearnButton>
                    </div>
                    <img src='./sprites/sprite-shawn-seagull.png' alt='Shawn the seagull' className='shawn-level' />
                </div>
                <div className='level-two'>
                    <div className='salmon'>
                        <div className='level-div col my-auto'>
                            <h2 className='first-title'>Level 2: Meet Sally the Salmon</h2>
                            <p className='first-info'> Meet Sally and learn about Salmon’s experience of the Elwha. Maybe you can even help clean up ghosts nets and help out fish and other animals in the sea!
                            </p>
                            <LearnButton className="link-button" onClick={() => navigate('/level2')}>Play</LearnButton>
                        </div>
                        <img className='sally-level' src='./sprites/sprite-sally-salmon.png' alt="Sally the Salmon"></img>
                    </div>
                </div>
                <div className='level-three'>
                    <div className='whale'>
                        <div className='level-div col my-auto'>
                            <h2 className='first-title'>Level 3: Meet Wendy the Whale</h2>
                            <p className='first-info'> Meet Wendy and learn about the whale and the plastic that they eat. Maybe you can even help get rid of plastic inside the whale’s body!
                            </p>
                            <LearnButton className="link-button" onClick={() => navigate('/level3')}>Play</LearnButton>
                        </div>
                        <img className='wendy-level' src='./sprites/sprite-wendy-whale.png' alt="Wendy the Whale"></img>
                    </div>
                </div>
                {/* <div className='level-two'>
                    <div className='salmon'>

                        <div className='col my-auto'>
                            <h2 className='second-title'>Level 2: Meet Sally the Salmon</h2>
                            <p className='second-info'> Meet Sally and learn about Salmon’s experience of the Elwha. Maybe you can even help clean up ghosts nets and help out fish and other animals in the sea!
                            </p>
                            <a href="/level2">
                                <button className="link-buttons">Play</button>
                            </a>
                            <div className='col'>
                                <img className='sal-level' src='./imgs/sal.png' alt="Sally the Salmon"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='level-three'>
                    <div className='whale'>
                        <div className='col my-auto'>
                            <h2 className='third-title'>Level 3: Meet Wendy the Whale</h2>
                            <p className='third-info'> Meet Wendy and learn about the whale and the plastic that they eat. Maybe you can even help get rid of plastic inside the whale’s body!
                            </p>
                            <a href="/level3">
                                <button className="link-button">Play</button>
                            </a>
                            <div className='col'>
                                <img className='wen-level' src='./imgs/wendy.png' alt="Wendy the Whale"></img>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
            <FooterContainer>
                <FooterText>Marine Rescue: The Sea-quel</FooterText>
                <FooterCopyright>
                    <p>Copyright &copy; FlapJack</p>
                    <img src='./imgs/mdi_github.png' alt='Github logo' />
                </FooterCopyright>
                <img src='./imgs/iSchool-logo.png' alt='logo of the Information School at the University of Washington' />
            </FooterContainer>
        </>
    );

}

export default Levels;
