import styled from 'styled-components';
import MaxWidth from '../../styles/MaxWidth';
import Link from 'next/link';

const Bar = styled.header`
    height:12vh;
    background-color:${({theme}) => theme.black};
`

const Title = styled.h1`
    line-height:12vh;
    color:${({theme}) => theme.header};
    text-align:center;
    font-family: Pacifico, Roboto, Arial, Sans-Serif;
    cursor:pointer;
`

const Header = (props) => {
    return(
        <Bar>
            <MaxWidth>
                <Link href="/"><Title>TACO-AXES</Title></Link>
            </MaxWidth>
        </Bar>
    )
}

export default Header;