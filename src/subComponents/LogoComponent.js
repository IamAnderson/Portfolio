import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Logo = styled(Link)`
    display: inline-block;
    color: ${({click}) => click ? '#fff' : '#000'};
    font-family: 'Pacifico', cursive;
    font-size: 2rem;
    font-weight: 700;
    text-decoration: none;
    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 3;

    cursor: pointer;
`


const LogoComponent = ({ click }) => {
  return (
    <Logo to="/" reloadDocument click={click}>
        ANDY
    </Logo>
  )
}

export default LogoComponent