import Head from 'next/head';
import styled from 'styled-components';
import MaxWidth from '../styles/MaxWidth';
import Link from 'next/link';


const Button = styled.button`
  border:none;
  background-color:${({theme}) => theme.black};
  color:${({theme}) => theme.bright};
  font-size:1.5rem;
  cursor:pointer;
  transition:background-color .2s;
  flex-basis:40%;
  height:12vh;

  &:hover{
    background-color:${({theme}) => theme.dark};
  }
`

const Description = styled.p`
  position:absolute;
  width:60%;
  max-height:40%;
  text-align:center;
  overflow:hidden;
  top:20%;
  left:50%;
  transform:translateX(-50%);
  color:${({theme}) => theme.dark};
  font-weight:300;
  font-size:1.5rem;


  @media(max-width:1024px){
    width:80%;
  }
`

const Menu = styled.menu`
  display:flex;
  width:50%;
  justify-content:space-around;
  position:absolute;
  top:50%;
  left:50%;
  transform:translateX(-50%);

  @media(max-width:1024px){
    top:60%;
    flex-direction:column;
    height:30vh;
  }
`

export default function Home(props) {
  return (
    <MaxWidth>
      <Description>Quiz, pozwalający wyłonić najbardziej pasujące do Ciebie piwo! Wynik przedstawiony jest na dwóch osiach. Pytań jest 21, a ukończenie testu zajmuje ok. 5 minut.</Description>
      <Menu>
        <Link href="/axes"><Button>Kompas!</Button></Link>
        <Link href="/test"><Button>Test!</Button></Link>
        <Link href="/marmur"><Button>Marmur!</Button></Link>
      </Menu>
    </MaxWidth>
  )
}


