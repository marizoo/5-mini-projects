import React,{useState} from 'react'
import styled from 'styled-components';
import { centerIt, columnIt } from '../globalStyle';

const Wrapper = styled.div`
    color: white;
`

const Card = styled.div`
width: 450px;
min-height: 200px;
height: min-content;
background-color: #990099;
border-radius: 20px;
color: white;
display: flex;
`

const FinalScore = styled.div`
    margin:auto;
    ${columnIt};
`
const DisplayScore = styled.h1``

const ReplayButton = styled.button`
height: 30px;
width: 80%;
border-radius: 20px;
${centerIt};
font-size: 14px;
font-weight: 500px;
color: white;
border: 1px solid white;
background-color: transparent;
padding: 5px;
margin: 20px auto;
cursor: pointer;
transition: all .3s ease;

&:hover{
    color: #990099;
    background-color: white;
}
`

const Left = styled.div`
flex: 50%;
`
const LeftTop = styled.div`
flex: 30%;
display: flex;
padding: 20px;
`
const Title = styled.h1`
margin-right: 20px;
`


const LeftBottom = styled.div`
flex: 70%;
padding: 0 20px 15px 15px;
`
const Question = styled.h2`
font-weight: 500;
`

const Right = styled.div`
flex:50%;
${columnIt};
padding: 15px 5px 15px 0;
justify-content: space-around;
`

const AnswerButton = styled.button`
height: 30px;
width: 90%;
border-radius: 20px;
${centerIt};
font-size: 14px;
font-weight: 500px;
color: white;
border: 1px solid white;
background-color: transparent;
margin: 10px 0;
padding: 5px;
cursor: pointer;
transition: all .3s ease;

&:hover{
    color: #990099;
    background-color: white; 
}
`
    
// QUESTIONS //
const QUESTIONS_DATA = [
    {
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Dublin', isCorrect: false },
        ],
    },
    {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
    },
    {
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
            { answerText: 'Apple', isCorrect: true },
            { answerText: 'Intel', isCorrect: false },
            { answerText: 'Amazon', isCorrect: false },
            { answerText: 'Microsoft', isCorrect: false },
        ],
    },
    {
        questionText: 'How many Harry Potter books are there?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '7', isCorrect: true },
        ],
    },
];


const Quiz = () => {
const [questions, setQuestions] = useState(QUESTIONS_DATA)
const [currentQuestion, setCurrentQuestion] = useState(0)
const [score, setScore] = useState(0)
const [showScore, setShowScore] = useState(false)

const handleAnswerButtonClick = (isCorrect) => {
 if(isCorrect === true) {
     setScore(score + 1)
 }

 const nextQuestion = currentQuestion + 1;
 if(nextQuestion < questions.length) {
     setCurrentQuestion(nextQuestion)
 } else {
     setShowScore(true)
 }
}

const handleReplay = () => {
    window.location.reload()
}

    return (
        <Wrapper>
            <Card>
                {!showScore && (
                <>
                    <Left>
                            <LeftTop>
                            <Title>Question {currentQuestion + 1}/{questions.length}</Title>
                        </LeftTop>
                        <LeftBottom>
                            <Question>
                                {questions[currentQuestion].questionText}
                            </Question>
                        </LeftBottom>   
                    </Left>
                    <Right>
                        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                            <AnswerButton 
                            key={index}
                            onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
                            >
                                {answerOption.answerText}
                            </AnswerButton>
                        ))}
                        
                    </Right>
                </>
                )}
                {showScore && (
                    <FinalScore>
                        <DisplayScore>
                            You scored {score} out of {questions.length}
                        </DisplayScore>
                        <ReplayButton onClick={handleReplay}>Play again</ReplayButton>
                    </FinalScore>
                )}
            </Card>
        </Wrapper>
    )
}

export default Quiz
