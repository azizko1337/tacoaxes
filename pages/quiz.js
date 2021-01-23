import {useState} from 'react';
import styled from 'styled-components';
import Image from 'next/image';



const QuestionContainer = styled.div`
    position:absolute;
    top:55%;
    left:50%;
    transform:translate(-50%, -50%);
    width:50%;
    height:70%;
    display: flex;
    flex-direction:column;
    padding:15px;
    justify-content:space-between;

    background-color:${({theme}) => theme.black};

    @media(max-width:1024px){
        width:80%;
    }

`

const Question = styled.h1`
    width:100%;
    text-align:center;
    word-wrap: break-word;
    flex-basis:30%;
    color:${({theme}) => theme.bright};
    font-size:1.6rem;
`


const AnswersContainer = styled.div`
    margin: 0 auto;
    flex-basis:70%;
    width:60%;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    @media(max-width:1024px){
        width:90%;
    }
    
`

const Answer = styled.button`
    display:block;
    flex-basis:25%;
    width:100%;
    padding:10px;
    margin: 2% 0;
    cursor:pointer;
    background-color:${({theme}) => theme.medium};
    border:none;
    color:${({theme}) => theme.bright};
    transition: background-color .3s;

    @min-width:1024px{
        &:hover{
            background-color:${({theme}) => theme.dark};
        }
    }
    

    
`

// 

const ResultContainer = styled.div`
    position:absolute;
    top:55%;
    left:50%;
    transform:translate(-50%, -50%);
    width:50%;
    height:70%;
    display: flex;
    flex-direction:column;
    padding:15px;
    justify-content:space-between;

    background-color:${({theme}) => theme.black};

    @media(max-width:1024px){
        width:80%;
    }

`

const Title = styled.h1`
    width:100%;
    text-align:center;
    word-wrap: break-word;
    flex-basis:30%;
    color:${({theme}) => theme.bright};
    font-size:1.6rem;
`
const Axes = styled.div`
    position:absolute;
    top:55%;
    left:50%;
    transform:translate(-50%, -50%);
    width:50vmin;
    height:50vmin;
    background-color:Red;
    cursor:pointer;

    @media(orientation: portrait){
        width:70vmin;
        height:70vmin;
    }

`

const ResultPoint = styled.div`
    position:absolute;
    width:5%;
    transform:translate(-50%, 50%);
    background-color:${({theme}) => theme.bright};
    border: 2px solid ${({theme}) => theme.dark};
    border-radius:10px;
    bottom:${({vertical}) => (50+vertical*50)>95 ? 97.5 : ((50+vertical*50)<0 ? 2.5 : (50+vertical*50))}%;
    left:${({horizontal}) => (50+horizontal*50)>95 ? 97.5 : ((50+horizontal*50)<0 ? 2.5 : (50+horizontal*50))}%;

    &:before{
        content: "";
        display: block;
        padding-top: 100%;
}

`

const Disclaimer = styled.p`
    position:absolute;
    left:50%;
    bottom:1%;
    transform:translateX(-50%);
    color:${({theme}) => theme.bright};
    width:100%;
    text-align:center;
    font-weight:300;

`
// 



const Quiz = (props) => {
    const {QUESTIONS_DATA} = props;


    const questionsLength = QUESTIONS_DATA.length;
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [displayedQuestion, setDisplayedQuestion] = useState(QUESTIONS_DATA[0]);
    const [horizontalAxis, setHorizontalAxis] = useState(0);
    const [verticalAxis, setVerticalAxis] = useState(0);
    const [isResultDisplayed, setResultDisplayed] = useState(false);
    const [rigczTheme, setRigczTheme] = useState(false);
    const [isDisclaimerShown, setDisclaimerShown] = useState(false);

    console.log(horizontalAxis, verticalAxis);

    const nextQuestion = (effectX, effectY) => {
        setCurrentQuestion(currentQuestion+1);

        setHorizontalAxis(horizontalAxis + +effectX);
        setVerticalAxis(verticalAxis + +effectY);

        if(currentQuestion>=questionsLength){
            showResult();
        }
        else{
            setDisplayedQuestion(QUESTIONS_DATA[currentQuestion]);
        }
    }

    const showResult = () => {
        setResultDisplayed(true);
    }

    const handleAxesChange = () => {
        setDisclaimerShown(true);
        setRigczTheme(!rigczTheme);
    }

    return(
        <>
        {
            isResultDisplayed
            ?
                (
                    <ResultContainer>
                        <Title>Twój wynik: [{horizontalAxis.toFixed(2)}, {verticalAxis.toFixed(2)}]</Title>
                        <Axes onClick={handleAxesChange}><Image layout="fill" src={rigczTheme ? "/compass.png" : "/compassalt.png"}/><ResultPoint horizontal={horizontalAxis} vertical={verticalAxis}/></Axes>
                        {isDisclaimerShown ? null : <Disclaimer>(Kliknij na kompas, aby zobaczyć alternatywne osie)</Disclaimer>}
                    </ResultContainer>
                ) 
            :
                (
                <QuestionContainer active={!isResultDisplayed}>
                    <Question>[{currentQuestion}/{questionsLength}] {displayedQuestion.question}</Question>
                        <AnswersContainer>
                        {
                            displayedQuestion.answers.map(answer => (<Answer data-effectx={answer.effect[0]} data-effecty={answer.effect[1]} onClick={(e) => nextQuestion(e.target.dataset.effectx, e.target.dataset.effecty)} key={answer.id}>{answer.answer}</Answer>))
                        }
                        </AnswersContainer>
                </QuestionContainer>
                )
        }
        </>
    )
}

export default Quiz;