import styled from 'styled-components';

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

    @media(max-width:1024px){
        width:80%;
    }
`

const Question = styled.h1`
    width:100%;
    text-align:center;
    word-wrap: break-word;
    flex-basis:30%;
    color:${({theme}) => theme.black};
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

    @media(min-width:1024px){
        &:hover{
            background-color:${({theme}) => theme.dark};
        }
    }
    

    
`

const TestQuestion = (props) => {
    const {handleAnswer, answers, question, currectQuestionNumber, questionsNumber} = props;

    return(
        <QuestionContainer>
        <Question>[{currectQuestionNumber}/{questionsNumber}] {question}</Question>
            <AnswersContainer>
            {
                answers.map((answer, index) => (<Answer onClick={handleAnswer} key={index} data-index={index}>{answer}</Answer>))
            }
            </AnswersContainer>
        </QuestionContainer>
    )
}

export default TestQuestion;