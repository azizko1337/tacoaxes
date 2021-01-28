// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const QUESTION_DATA = [
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
]

export default (req, res) => {
  res.statusCode = 200;
  const questionsToSend = [];
  
  
  while(questionsToSend.length<10){
    
    let questionIndex = Math.floor(Math.random()*QUESTION_DATA.length);
    const propablyNewQuestion = QUESTION_DATA[questionIndex];

    if(questionsToSend.includes(propablyNewQuestion)){}
    else{
      questionsToSend.push(propablyNewQuestion);
    }
  }

  res.json(questionsToSend);
}
