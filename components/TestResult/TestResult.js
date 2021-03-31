import styled from 'styled-components';

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
    justify-content:center;

    @media(max-width:1024px){
        width:80%;
    }
`

const Title = styled.h1`
    width:100%;
    text-align:center;
    word-wrap: break-word;
    flex-basis:10%;
    color:${({theme}) => theme.black};

    ${({mini}) => mini ? `
        font-size:1.1rem;
        padding-top:10px;
    ` : null};
`

const WrongQuestions = styled.p`
    width:100%;
    text-align:center;
    word-wrap: break-word;
    flex-basis:30%;
    color:${({theme}) => theme.dark};
    font-size:1rem;
`





const TestResult = (props) => {
    const {result, maxResult, wrongAnsweredQuestions} = props;

    return(
        <ResultContainer>
            <Title>Twój wynik: {result}/{maxResult}</Title>
            {wrongAnsweredQuestions.length ? 
            <>
                <Title mini>Pytania na które odpowiedziaeś błędnie:</Title>
                <WrongQuestions>{wrongAnsweredQuestions.toString()}</WrongQuestions>
            </>
            :
            null
            }
        </ResultContainer>
    )
}

export default TestResult;