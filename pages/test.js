import { useState, useEffect } from 'react';
import styled from 'styled-components';

const SkillLevel = styled.div`
    width:50%;
    height:50vh;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;

    @media(max-width:1024px){
        width:65%;
      }
`

const Title = styled.h2`
    width:100%;
    text-align:center;
    font-weight:300;
    font-size:1.3rem;
    color:${({theme}) => theme.black};
    font-weight:700;
`

const Button = styled.button`
  border:none;
  background-color:${({theme}) => theme.black};
  color:${({theme}) => theme.bright};
  font-size:1rem;
  cursor:pointer;
  transition:background-color .2s;
  height:8vh;
  width:30%;
    @media(min-width:1025px){
        &:hover{
            background-color:${({theme}) => theme.dark};
          }
    }

  @media(max-width:1024px){
    width:100%;
  }
  
`

const QuestionContainer = styled.div`
    width:50%;
    height:77%;
    position:absolute;
    top:55%;
    left:50%;
    transform:translate(-50%,-50%);
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    display:flex;


    @media(max-width:1024px){
        width:90%;
    }
`

const Answers = styled.div`
    flex-grow:1;
    width:100%;


    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, 1fr);
    grid-gap:5px;


    @media(min-width:1025px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: repeat(3, 1fr);
        padding-top:18px;
    }


    
`

const Answer = styled.div`

    
    font-size:18px;
    font-weight:100;
    background-image:url(${({image}) => image});
    bacgkround-position:center;
    background-size:cover;
    cursor:pointer;

    &:hover{
        &>span{
            height:100%;
        }
    }
`

const AlbumTitle = styled.span`
    display:block;
    text-align:center;
    color:${({theme}) => theme.bright};
    background-color:rgba(0, 0, 0, 0.5);
    padding:3px;
`

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


    @media(max-width:1024px){
        width:80%;
    }

`
const Result = styled.div`
    display:inline-block;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    font-size:6rem;
    font-weight:700;
    color:${({theme}) => theme.black}

`

const Test = (props) => {
    const sliceVersesToSkill = (verses) => {
        if(!verses) return [];
        return ([...verses.slice(0, skillLevel)]);
    }

    const [skillLevel, setSkillLevel] = useState();
    const [result, setResult] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [currentVerse, setCurrentVerse] = useState((props.test[currentQuestion-1].verses));
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (e) => {
        console.log(e.target.dataset)
        const name = e.target.dataset.answername;

        if(currentQuestion===10){
            setShowResult(true);
            return;
        }

        console.log(props.test[currentQuestion].correctAlbum, name);
        if(props.test[currentQuestion].correctAlbum===name){
            setResult(result+1);
        }
        setCurrentQuestion(currentQuestion+1);
        setCurrentVerse(props.test[currentQuestion].verses);
    }

    return(
        <>
        {skillLevel ?
            (
                showResult ? 
                    (<ResultContainer><Result>{result*10}%</Result></ResultContainer>)
                :
                    (<QuestionContainer>
                        {sliceVersesToSkill(currentVerse).map((verse, index) => (<Title key={index}>{index===0 ? `[${currentQuestion}/10] ` : null}{verse}</Title>))}
                        <Answers>
                            <Answer onClick={handleAnswer} image="./albums/trojkatwarszawski.jpg"><AlbumTitle data-answerName="TROJKATWARSZAWSKI">Trójkąt warszawski</AlbumTitle></Answer>
                            <Answer onClick={handleAnswer} image="./albums/umowaodzielo.jpg"><AlbumTitle data-answerName="UMOWAODZIELO">Umowa o dzieło</AlbumTitle></Answer>
                            <Answer onClick={handleAnswer} image="./albums/wosk.jpg"><AlbumTitle data-answerName="WOSK">Wosk</AlbumTitle></Answer>
                            <Answer onClick={handleAnswer} image="./albums/marmur.jpg"><AlbumTitle data-answerName="MARMUR">Marmur</AlbumTitle></Answer>
                            <Answer onClick={handleAnswer} image="./albums/szprycer.jpg"><AlbumTitle data-answerName="SZPRYCER">Szprycer</AlbumTitle></Answer>
                            <Answer onClick={handleAnswer} image="./albums/cafebelga.jpg"><AlbumTitle data-answerName="CAFEBELGA">Cafe Belga</AlbumTitle></Answer>
                            <Answer onClick={handleAnswer} image="./albums/flagey.jpg"><AlbumTitle data-answerName="FLAGEY">Flagey</AlbumTitle></Answer>
                            <Answer onClick={handleAnswer} image="./albums/pocztowkazwwa.jpg"><AlbumTitle data-answerName="POCZTOWKAZWWA">Pocztówka z WWA</AlbumTitle></Answer>
                            <Answer onClick={handleAnswer} image="./albums/jarmark.jpg"><AlbumTitle data-answerName="JARMARK">Jarmark</AlbumTitle></Answer>
                            <Answer onClick={handleAnswer} image="./albums/europa.jpg"><AlbumTitle data-answerName="EUROPA">Europa</AlbumTitle></Answer>
                        </Answers>
                    </QuestionContainer>)
            )
            :
            (<SkillLevel>
                <Title>Wybierz poziom trudności</Title>
                <Button onClick={() => setSkillLevel(1)}>TRUDNY</Button>
                <Button onClick={() => setSkillLevel(2)}>ŚREDNI</Button>
                <Button onClick={() => setSkillLevel(3)}>ŁATWY</Button>
            </SkillLevel>)
        }
        </>
    )
}

Test.getInitialProps = async (ctx) => {
    const response = await fetch('https://tacoaxes.vercel.app/api/getQuestions');
    const data = await response.json();
    return ({test: data});
  }

export default Test;
