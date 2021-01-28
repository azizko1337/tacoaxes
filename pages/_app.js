import Header from '../components/Header';
import Footer from '../styled-components/Footer';
import GlobalStyles from '../styles/globalStyles';
import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';
import {useState} from 'react';


const QUESTIONS_DATA = [
  {
      id:1,
      question: 'Czy rapy wzruszają Cię do łez?',
      answers: [
          {
            id:1,
            answer: 'Tak',
            effect: [0, -0.1]
          },
          {
            id:2,
            answer: 'Trochę',
            effect: [0, -0.05]
          },
          {
            id:3,
            answer: 'Kiedyś',
            effect: [0, 0.1]
          },
          {
            id:4,
            answer: 'Nie',
            effect: [0, 0.05]
          }
      ]
  },
  {
      id:2,
      question: 'Chyba zrobisz trzecią zwrotkę?',
      answers: [
          {
            id:1,
            answer: 'A potem czwartą, wiesz',
            effect: [0, 0.1]
          },
          {
            id:2,
            answer: 'Wciąż pamiętam kiedy stałem pod jej oknem',
            effect: [0, -0.1]
          }
      ]
  },
  {
      id:3,
      question: 'Teksty polityczne?',
      answers: [
          {
            id:1,
            answer: 'Nie dziękuję, wolę pisać o sobie',
            effect: [0.1, 0]
          },
          {
            id:2,
            answer: 'Tańczę Polskie Tango',
            effect: [-0.1, 0]
          }
      ]
  },
  {
    id:4,
    question: 'Co wolisz?',
    answers: [
        {
          id:1,
          answer: 'Cisza',
          effect: [0, 0]
        },
        {
          id:2,
          answer: 'Pląs',
          effect: [0, -0.1]
        },
        {
          id:3,
          answer: 'Wrzask',
          effect: [0, 0.1]
        },
    ]
  },
  {
    id:5,
    question: 'Katecheta Cię nienawidzi?',
    answers: [
        {
          id:1,
          answer: 'Tak',
          effect: [-0.1, 0]
        },
        {
          id:2,
          answer: 'Nie',
          effect: [0.1, 0]
        },
    ]
  },
  {
    id:6,
    question: 'Komunikacja miejska?',
    answers: [
        {
          id:1,
          answer: 'Chciałbym znowu jeździć ZTM',
          effect: [0, 0]
        },
        {
          id:2,
          answer: 'Kiedyś na mokotów jeździłem tramwajem 35',
          effect: [0, -0.2]
        },
        {
          id:3,
          answer: 'Jadę betą po osiedlu na Sycylii',
          effect: [0, 0.2]
        },
    ]
  },
  {
    id:7,
    question: 'Jak robisz emkę, to?',
    answers: [
        {
          id:1,
          answer: 'Chodzi o pengę',
          effect: [0, 0.1]
        },
        {
          id:2,
          answer: 'Chodzi o dragi ciężkie',
          effect: [0, 0.1]
        },
    ]
  },
  {
    id:8,
    question: 'Co wolisz?',
    answers: [
        {
          id:1,
          answer: 'Tankować wódę, by upić swoje upiory',
          effect: [0, 0]
        },
        {
          id:2,
          answer: 'Palić mentole fajki',
          effect: [0, -0.1]
        },
        {
          id:3,
          answer: 'Krążyć po miescie, by zgubić swoje upiory',
          effect: [0, 0]
        },
    ]
  },
  {
    id:9,
    question: 'Instagram?',
    answers: [
        {
          id:1,
          answer: 'Tamte panie takie ładne, jakby ciosał Fidiasz',
          effect: [0, 0.1]
        },
        {
          id:2,
          answer: 'Nie followuję tamtych kobiet, bo te panie zwiodą',
          effect: [0, -0.1]
        },
    ]
  },
  {
    id:10,
    question: 'Biorę Cię za rękę',
    answers: [
        {
          id:1,
          answer: 'Nie pytam dokąd',
          effect: [0, -0.1]
        },
        {
          id:2,
          answer: 'Dokąd?',
          effect: [0, 0.1]
        },
    ]
  },
  {
    id:11,
    question: 'Twoje miasto pachnie jak?',
    answers: [
        {
          id:1,
          answer: 'Szlugi i kalafiory',
          effect: [0.1, 0]
        },
        {
          id:2,
          answer: 'Szlugi i propaganda',
          effect: [0, -0.1]
        },
        {
          id:3,
          answer: 'Smoothie i Salad Story',
          effect: [0.1, 0]
        },
    ]
  },
  {
    id:12,
    question: 'Pisanie?',
    answers: [
        {
          id:1,
          answer: 'Szprycer siekam jakoś w tydzień',
          effect: [0, -0.1]
        },
        {
          id:2,
          answer: 'Chyba mi nie w smak',
          effect: [0, 0.1]
        },
    ]
  },
  {
    id:13,
    question: 'Blanta?',
    answers: [
        {
          id:1,
          answer: 'Arrivederci',
          effect: [-0.1, 0]
        },
        {
          id:2,
          answer: 'Adieu',
          effect: [0.1, 0]
        },
    ]
  },
  {
    id:14,
    question: 'Chłopaki?',
    answers: [
        {
          id:1,
          answer: 'Niech płaczą',
          effect: [0, -0.1]
        },
        {
          id:2,
          answer: 'Się biją, oni walczą o coś',
          effect: [0, 0.1]
        },
    ]
  },
  {
    id:15,
    question: 'Kradzież?',
    answers: [
        {
          id:1,
          answer: 'Nie, to wyście kradli od rodaków!',
          effect: [-0.1, 0]
        },
        {
          id:2,
          answer: 'W marynarce jakieś piesiąt kafli',
          effect: [0.1, 0]
        },
    ]
  },
  {
    id:16,
    question: 'Kapitalizm?',
    answers: [
        {
          id:1,
          answer: 'Wilk syty, ale owca martwa',
          effect: [0, 0.1]
        },
        {
          id:2,
          answer: 'Janek mówi o koncertach, pytam ile koła',
          effect: [0.1, 0]
        },
        {
          id:3,
          answer: 'W Taco Corp nie klepią biedy',
          effect: [0, -0.1]
        },
    ]
  },
  {
    id:17,
    question: 'Hajs?',
    answers: [
        {
          id:1,
          answer: 'Mam w płaszczu pięć koła w kopercie i połówkę',
          effect: [0, 0.1]
        },
        {
          id:2,
          answer: 'W marynarce jakieś piesiąt kafli',
          effect: [0.1, 0]
        },
    ]
  },
  {
    id:18,
    question: 'Smutki?',
    answers: [
        {
          id:1,
          answer: 'Podejmuję',
          effect: [0.1, 0]
        },
        {
          id:2,
          answer: 'Zapijam',
          effect: [-0.1, 0]
        },
    ]
  },
  {
    id:19,
    question: 'Producent?',
    answers: [
        {
          id:1,
          answer: 'Chryste Rumak, co to jest za bit',
          effect: [0.1, -0.1]
        },
        {
          id:2,
          answer: 'Pan Lanek uszył dla mnie pakę, nie Pret a Porter',
          effect: [-0.1, 0.1]
        },
        {
          id:3,
          answer: 'Gra tu Zeppy',
          effect: [0, -0.2]
        },
    ]
  },
  {
    id:20,
    question: 'Co stawiasz wyżej?',
    answers: [
        {
          id:1,
          answer: 'Dobre maniery',
          effect: [0.1, -0.1]
        },
        {
          id:2,
          answer: 'Dobre maniury',
          effect: [-0.1, 0.1]
        },
    ]
  },
  {
    id:21,
    question: 'Deszcz?',
    answers: [
        {
          id:1,
          answer: 'Na betonie',
          effect: [0.1, 0]
        },
        {
          id:2,
          answer: 'Na paryskim getcie',
          effect: [0, 0.1]
        },
    ]
  },
]

const Main = styled.main`
  height:83vh;
  background-color:${({theme}) => theme.bright};
  
`

let themeIndex = 0;

function MyApp({ Component, pageProps, themes }) {
  const [currentTheme, setCurrentTheme] = useState(themes[themeIndex]);
  
  const changeTheme = () => {
    if(themeIndex===themes.length-1){
      themeIndex = 0;
    }
    else{
      themeIndex++;
    }
    setCurrentTheme(themes[themeIndex]);
  }

  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href={"https://fonts.googleapis.com/css2?family=Pacifico&display=swap"} rel="stylesheet"/>
      <GlobalStyles/>
      
      <ThemeProvider theme={currentTheme}>
        <Header/>
        <Main>
          <Component {...pageProps} QUESTIONS_DATA={QUESTIONS_DATA}/>
        </Main>
        <Footer onClick={changeTheme}></Footer>
      </ThemeProvider>
    </>
  )
}

MyApp.getInitialProps = async ({Component, ctx}) => {
  const themes = [
    {
      bright: '#F2CAA7',
      dark: '#1F1826',
      black: '#0D0D0D',
      medium: '#734A46',
      rose: '#BF847E',
      header: '#FEE1B9'
    },
    {
      bright: '#F27507',
      dark: '#594827',
      black: '#0D0D0D',
      medium: '#0D0D0D',
      rose: '#D93F07',
      header: '#F27507'
    },
    {
      bright: '#FEFEFE',
      dark: '#212406',
      black: '#FC4D85',
      medium: '#763E3B',
      rose: '#848CA2',
      header: '#FEFEFE'
    },
  ]

  let pageProps = {}
  if(Component.getInitialProps){
    pageProps = await Component.getInitialProps(ctx)
  }

  return {themes, pageProps};
}

export default MyApp
