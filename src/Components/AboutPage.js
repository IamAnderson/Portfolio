import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './Themes'
// import { Design, Develope } from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import Astronaut from '../assets/Images/spaceman.png'
import { keyframes } from 'styled-components'
import BigTitle from '../subComponents/BigTitle'


const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  
  font-family: monospace;
  font-style: italic;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.65rem + 1vw);
  backdrop-filter: blur(4px);
  cursor: pointer;

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

`

const float = keyframes`
  0% {transform: translateY(-10px)}
  50% {transform: translateY(15px) translateX(15px)}
  100% {transform: translateY(-10px)}
`

const SpaceMan = styled.div`
  position: absolute;
  top: 10;
  right: 5%;
  width: calc(5rem + 15vw);
  animation: ${float} 4s ease infinite;

  &>img{
    width: 100%;
    height: 100%;
  }
`

// const Description = styled.h2`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   font-size: calc(0.6em + 1vw);
//   padding: 0.5rem 0 0.5rem 0rem;
// `

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <ParticleComponent />
        <LogoComponent click={true}/>
        <SocialIcons theme="dark" />
        <PowerButton />
        <BigTitle Text='ABOUT'/>

        <Main>
        I'm a full stack developer ( MERNSTACK ) from Nigeria. I love creating websites while keeping codes organized and simple.
        <br /> <br /> 
        I very much enjoy the process of web creation, especially the aspect that deals with user experience. I love discovering new things, and exploring new experiences. 
        <br /> <br />
        You can connect with me via social links.
        <br /> <br />
        Email me at: omorogbeandersonsimeon@gmail.com 
        </Main>

        <SpaceMan>
          <img src={Astronaut} alt='Astronaut' />
        </SpaceMan>
      </Box>
    </ThemeProvider>
  )
}

export default AboutPage
