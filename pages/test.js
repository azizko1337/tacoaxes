import { useState } from 'react';
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
    background-position:center;
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
        const name = e.target.dataset.answername;

        if(currentQuestion===10){
            setShowResult(true);
            if(props.test[currentQuestion-1].correctAlbum===name){
                setResult(result+1);
            }
            return;
        }

        if(props.test[currentQuestion-1].correctAlbum===name){
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
                            <Answer onClick={handleAnswer} image="./albums/trojkatwarszawski.jpg"><AlbumTitle data-answername="TROJKATWARSZAWSKI">Trójkąt warszawski</AlbumTitle></Answer>
                            <Answer onClick={handleAnswer} image="./albums/umowaodzielo.jpg"><AlbumTitle data-answername="UMOWAODZIELO">Umowa o dzieło</AlbumTitle></Answer>
                            <Answer onClick={handleAnswer} image="./albums/wosk.jpg"><AlbumTitle data-answername="WOSK">Wosk</AlbumTitle></Answer>
                            <Answer onClick={handleAnswer} image="./albums/marmur.jpg"><AlbumTitle data-answername="MARMUR">Marmur</AlbumTitle></Answer>
                            <Answer onClick={handleAnswer} image="./albums/szprycer.jpg"><AlbumTitle data-answername="SZPRYCER">Szprycer</AlbumTitle></Answer>
                            <Answer onClick={handleAnswer} image="./albums/cafebelga.jpg"><AlbumTitle data-answername="CAFEBELGA">Cafe Belga</AlbumTitle></Answer>
                            <Answer onClick={handleAnswer} image="./albums/flagey.jpg"><AlbumTitle data-answername="FLAGEY">Flagey</AlbumTitle></Answer>
                            <Answer onClick={handleAnswer} image="./albums/pocztowkazwwa.jpg"><AlbumTitle data-answername="POCZTOWKAZWWA">Pocztówka z WWA</AlbumTitle></Answer>
                            <Answer onClick={handleAnswer} image="./albums/jarmark.jpg"><AlbumTitle data-answername="JARMARK">Jarmark</AlbumTitle></Answer>
                            <Answer onClick={handleAnswer} image="./albums/europa.jpg"><AlbumTitle data-answername="EUROPA">Europa</AlbumTitle></Answer>
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
    const testQuestion = [
  {
    id:1,
    verses:['Ugh, ugh, raz, dwa, sprawdzam czy mnie słychać (halo?)', 'SMS od mamy, czekaj, muszę go przeczytać', 'Gratulacje utopione w kilku wykrzyknikach'],
    correctAlbum: 'WOSK',
  },
  {
    id:2,
    verses:['Znów rapuję o tym samym, ale tylko tyle znam', 'Aye, odpalony notes, sobie stoję w tyle sam', 'Aye, wtem pijane mordy pytają za ile gram'],
    correctAlbum: 'SZPRYCER',
  },
  {
    id:3,
    verses:['Architektura archaiczna nie chce wracać już na dwór', 'Gdzie na każdym rogu Telepizza, Żabka lub Carrefour', 'Moje oczy i ten misz-masz są jak Pawlak i Kargul'],
    correctAlbum: 'MARMUR',
  },
  {
    id:4,
    verses:['Polacy poród oraz śmierć obchodzą hucznie', 'Boję się śmierci, znów ją widzę nocą w lustrze', 'A mama mówi: "Nie rapuj o tym, bo to smutne" (Uh)'],
    correctAlbum: 'EUROPA',
  },
  {
    id:5,
    verses:['W Warszawie, wszyscy chwalą się tym, czego nie robią', 'Mówisz, że kawę pijesz, tylko świeżo mie-loną?', 'I że rozumiesz mnie, jak śpieszysz się to bierz doppio'],
    correctAlbum: 'JARMARK',
  },
  {
    id:6,
    verses:['Blondwłose licealistki znów kąpały się w tej bieli', 'Ich spódnice skąpsze są niż pensje ich nauczycieli (Ayy, ayy!)', 'Koledzy brzdękają w struny, kolegom pękają gumy'],
    correctAlbum: 'POCZTOWKAZWWA',
  },
  {
    id:7,
    verses:['Irena Santor na dzikiej plaży odpalam na głośniki (uh!)', 'Bo nie obchodzą nas za bardzo tipy', 'Gdzie warto bywać i jak przeciwdziałać zmarszczkom'],
    correctAlbum: 'CAFEBELGA',
  },
  {
    id:8,
    verses:['Jestem w Miłości, ale nie ma już miłości we mnie', 'Jedynie te stany lękowe, wątpliwości we mnie', 'Może umarło serce, a może po prostu drzemie'],
    correctAlbum: 'FLAGEY',
  },
  {
    id:9,
    verses:['Ty chciałeś zostać w domu, ktoś Cię zabrał na Karową', 'I na Plażową, chyba żeś tu się postarzał o rok', 'Łeb dudni, jakby dział się Paryż-­Dakar obok'],
    correctAlbum: 'UMOWAODZIELO',
  },
  {
    id:10,
    verses:['Te dziewki ciągną te kreski, nie wspomną o Mazowieckim', 'Me serce znów za mną tęskni, bo znowu te lufy łykam', 'I całe od kul dziurawe i jak Rambo kuśtykam'],
    correctAlbum: 'TROJKATWARSZAWSKI',
  },
];

    return ({test: testQuestion});
  }

export default Test;
