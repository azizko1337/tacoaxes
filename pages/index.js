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
  height:12vh;

  &:hover{
    background-color:${({theme}) => theme.dark};
  }
`


const Menu = styled.menu`
  display:flex;
  width:40%;
  justify-content:space-around;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  flex-direction:column;
  height:50vh;

  @media(max-width:1200px){
    width:65%;
  }

`

export default function Home(props) {
  return (
    <MaxWidth>
      <Menu>
        <Link href="/axes"><Button>Kompas!</Button></Link>
        <Link href="/test"><Button>Test!</Button></Link>
        <Link href="/marmur"><Button>Marmur!</Button></Link>
      </Menu>
    </MaxWidth>
  )
}


