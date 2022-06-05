import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../Components/Themes'


const Logo = styled.div`
    display: inline-block;
    color: ${({click}) => click ? '#fff' : '#000'};
    font-family: 'Pacifico', cursive;
    font-size: 2rem;
    font-weight: 700;
    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 3;

    cursor: default;
`


const LogoComponent = ({ click }) => {
  return (
    <Logo click={click}>
        ANDY
    </Logo>
  )
}

export default LogoComponent