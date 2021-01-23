import Head from 'next/head';
import styled from 'styled-components';
import {useState} from 'react';
import MaxWidth from '../styles/MaxWidth';
import Link from 'next/link';


const StartButton = styled.button`
  position:absolute;
  top:70%;
  left:50%;
  transform:translate(-50%, -50%);
  padding:20px;
  border:none;
  background-color:${({theme}) => theme.black};
  color:${({theme}) => theme.bright};
  font-size:1.5rem;
  cursor:pointer;
  transition:background-color .2s;

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

export default function Home(props) {
  return (
    <MaxWidth>
      <Description>Quiz, pozwalający wyłonić najbardziej pasujące do Ciebie piwo! Wynik przedstawiony jest na dwóch osiach. Pytań jest 21, a ukończenie testu zajmuje ok. 5 minut.</Description>
      <Link href="/quiz"><StartButton>Zaczynamy!</StartButton></Link>
    </MaxWidth>
  )
}
