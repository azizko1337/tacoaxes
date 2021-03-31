import { useState } from 'react';
import TestQuestion from '../components/TestQuestion/TestQuestion';
import TestResult from '../components/TestResult/TestResult';


const Test = (props) => {
    const {questions} = props;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [result, setResult] = useState(0);
    const [wrongAnsweredQuestions, setWrongAnsweredQuestions] = useState([]);
    const [displayResult, changeDisplayResult] = useState(false);
    

    const handleAnswer = (e) => {
        const chosenQuestion = e.target.dataset.index;
        if(questions[currentQuestion].correctAnswerIndex == chosenQuestion){
            setResult(result+1);
        }
        else{
            setWrongAnsweredQuestions([...wrongAnsweredQuestions, questions[currentQuestion].question]);
        }

        if(currentQuestion+1 == questions.length){
            changeDisplayResult(true);
        }
        else{
            setCurrentQuestion(currentQuestion+1);
        }
    }
    
    if(displayResult){
        return(
            <TestResult wrongAnsweredQuestions={wrongAnsweredQuestions} result={result} maxResult={questions.length}/>
        )
    }

    return(
        <TestQuestion handleAnswer={handleAnswer} question={questions[currentQuestion].question} answers={questions[currentQuestion].answers} currectQuestionNumber={currentQuestion+1} questionsNumber={questions.length}/>
    )
}

Test.getInitialProps = async (ctx) => {
    const testQuestions = [
        {
            id:1,
            question: "Ile zim w pociągu prawdopodobnie przesiedział współpasażer?",
            answers: ["1", "2", "3", "4"],
            correctAnswerIndex:3
        },
        {
            id:2,
            question: "O co Taco miał zapytać współpasażera w pociągu, ale nie zdążył?",
            answers: ['"Skąd ja Pana znam?"', '"Ile ma Pan lat?"'],
            correctAnswerIndex:0
        },
        {
            id:3,
            question: "Co pierwsze zrobił Taco po wyjściu z pociągu?",
            answers: ["Przeszedł się nad polskim fiordem", "Poszedł do hotelu Marmur", "Wybrał się na kebaba"],
            correctAnswerIndex:0
        },
        {
            id:4,
            question: "Kto opłacał rachunek niewiasty w tej białej sukni, postawnej jak Aga Szulim?",
            answers: ["mąż", "kochanek", "ojciec", "teść"],
            correctAnswerIndex:2
        },
        {
            id:5,
            question: "Jaki utwór współpasażer zadedykował Taco podczas bankietu?",
            answers: ["Already Gone", "Hotel California", "Wasted Time", "Victim of Love"],
            correctAnswerIndex:1
        },
        {
            id:6,
            question: "Kibic jakiego klubu skopał Taco?",
            answers: ["Arki", "Lechi", "Legi", "Wisły"],
            correctAnswerIndex:0
        },
        {
            id:7,
            question: "Jakim samochodem uberował rudy Hubert w śnie Taco?",
            answers: ["Skoda Octavia", "Skoda Fabia", "Skoda Favorit", "Skoda Superb"],
            correctAnswerIndex:1
        },
        {
            id:8,
            question: "POD pokojem Taco ktoś?",
            answers: ["Narzekał i narzekał, i płakał cały czas", "Sztangą cały czas rzucał"],
            correctAnswerIndex:0
        },
        {
            id:9,
            question: "Kto zaproponował kawę?",
            answers: ["Taco zaproponował recepcjonistce", "Recepcjonistka zapraponowała Taco"],
            correctAnswerIndex:1
        },
        {
            id:10,
            question: "Co lubił przegrany w pokera?",
            answers: ["Pląs", "Ciszę", "Wrzask"],
            correctAnswerIndex:2
        },
        {
            id:11,
            question: "W jakie karty lampucera poleciła lecieć przegranemu w pokera?",
            answers: ["Kier", "Pik", "Trefl", "Karo"],
            correctAnswerIndex:1
        },
        {
            id:12,
            question: "Jakie kwiaty z ziemii przeglądał przegrany w pokera?",
            answers: ["Wrzosy", "Tulipany", "Chryzantemy", "Irysy"],
            correctAnswerIndex:3
        },
        {
            id:13,
            question: "Ile hajsu w marynarce miał przegrany w pokera?",
            answers: ["10k", "20k", "50k", "100k"],
            correctAnswerIndex:2
        },
        {
            id:14,
            question: "Kto zadecydował o wyjeździe do Marmuru?",
            answers: ["Taco", "Współpasażer"],
            correctAnswerIndex:1
        },
        {
            id:15,
            question: "Co wybrał taco?",
            answers: ["Fifi ze szmatą", "Taco z koroną"],
            correctAnswerIndex:1
        },
    ];

    return ({questions: testQuestions});
  }

export default Test;
