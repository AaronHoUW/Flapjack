import React, { useEffect, useRef, useState } from 'react';
import {
	Flapjack,
    ScreenModal,
	ModalRowText,
    ModalContent,
	ChoiceButton,
	ChoiceImages
} from './styles.tsx';
import importQuestions from './questions.json'

function QuizPage(props) {
	// UseState Questions
	const [questionNumber, setQuestionNumber] = useState(4)
	const [displayQuestion, setDisplayQuestion] = useState({Question: "", Choices: [], Images: {}})
	// Results
	const [resultsText, setResultText] = useState()
	const [correctAnswer, setCorrectAnswer] = useState()
	const [userChoice, setUserChoice] = useState()
	// Imported Questions from json
	const questionList = importQuestions;

	// UseEffect
	useEffect(() => {
		setDisplayQuestion({
			Question: (Object.keys(questionList)[questionNumber]),
			Choices: shuffle(Object.keys(questionList[(Object.keys(questionList)[questionNumber])].answers)),
			AnswersResults: questionList[(Object.keys(questionList)[questionNumber])].answers,
			Correct: questionList[(Object.keys(questionList)[questionNumber])].correct,
			Wrong: questionList[(Object.keys(questionList)[questionNumber])].wrong,
			Images: questionList[(Object.keys(questionList)[questionNumber])].images
		})
	}, [questionNumber, shuffle]);

	const letters = ["A", "B", "C", "D"];
	const displayAnswer = displayQuestion["Choices"].map((answer, i) => {
		let displayFormat = 6;
		if (displayQuestion.Choices.length % 2 === 1) {
			displayFormat = 4
		}
		const handleOnClick = () => {
			setUserChoice(answer)
			if(answer, displayQuestion.AnswersResults[answer]) {
				setResultText(displayQuestion.Correct);
				setCorrectAnswer(true);
			} else {
				setResultText(displayQuestion.Wrong)
				setCorrectAnswer(false)
			}
		}
		console.log(displayQuestion.Images === undefined)
		return (
			<div className={`col-`+ displayFormat + ` d-flex flex-row py-2`} key={i} onClick={handleOnClick}>
				<ChoiceButton className="text-light" id={answer}>{letters[i]}</ChoiceButton>
				<div className='container my-auto'>
					{(displayQuestion.Images !== undefined) && <ChoiceImages src={displayQuestion.Images[answer]} alt={answer} className="row"/>}		
					<p className='my-auto ms-1 row'>{answer}</p>
				</div>
			</div>
		)
	})

	displayQuestion["Choices"].forEach((answer) => {
		let ChoiceDiv = document.getElementById(answer)
		if(ChoiceDiv !== null) {
			if(answer === userChoice) {
				if(correctAnswer) {
					ChoiceDiv.classList.add("bg-success")
				} else {
					ChoiceDiv.classList.add("bg-danger")
				}
			} else {
				ChoiceDiv.classList.remove("bg-success")
				ChoiceDiv.classList.remove("bg-danger")
			}
		}
	});


    return (
        <div className='play-area'>
			<ScreenModal className="" id="modal-2-Backdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				{/* Pancake Image */}
				<div className="modal-dialog modal-lg modal-dialog-centered">
					<ModalContent className="modal-content">
						<div className='container modal-container'>
							<div className='row'>
								<h1 className="modal-title fs-5 pb-2 text-black" id="staticBackdropLabel">Time to Test Your Scuba Knowledge!</h1>
							</div>
							
							<ModalRowText className='row model-info modal-video-content mt-1'>
								<p className='pt-1' >{displayQuestion.Question}</p>
                                <div className="container text-center">
                                    <div className="row justify-content-center">
                                        {displayAnswer}
                                    </div>
									<div className="row justify-content-center pt-3">
                                        {(correctAnswer && 
										<p><span className='text-success fw-bold'>Correct!</span> {resultsText}</p>) || (correctAnswer !== undefined && <p><span className='text-danger fw-bold'>Uh Oh!</span> {resultsText}</p>)} 
										
                                    </div>
                                </div>
							</ModalRowText>

							<div className='modal-buttons'>
								{/* <button className='modal-continue' type="button" onClick={() => console.log("This shouldn't work")}>
                                    hello
								</button> */}
							</div>
						</div>
					</ModalContent>
				</div>
			</ScreenModal>
            <Flapjack
				tabIndex={-1}
				src={`/sprites/sprite-pancake-flapjack-octopus.png`}
				className='img-size'
				alt="Pancake the flapjack"
				/>

        </div>
    );
}

function shuffle(array) {
	return array.sort(() => Math.random() - .5);
}

export default QuizPage;


