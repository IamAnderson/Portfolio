import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import { Develope } from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitleAgain from '../subComponents/BigTitleAgain'


const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 30vw;
  height: 64vh;
  z-index: 3;
  line-height: 1.5;
  
  font-family: monospace;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  &:hover{
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
  }

  @media screen and (max-width: 500px){
    height: 54vh;
    flex-wrap: wrap;
    flex-grow: 0.4;
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: cenetr;
  align-items: flex-start;
  font-size: calc(1em + 1vw);

  ${Main} :hover &{
    &>*{
      fill: #fff;
    }

    @media screen and (max-width: 500px){
      font-size: calc(0.5em + 1vw);
    }
  }

  &>*:first-child{
    margin-right: 1rem;
  }
`

const Description = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0 0.5rem 0rem;

`

const SkillS = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0 0.5rem 0rem;

`

const SkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <ParticleComponent />
        <LogoComponent  theme={'light'}/>
        <SocialIcons theme={'light'} />
        <PowerButton />
        <BigTitleAgain Text='SKILLS'/>

        <Main>
        <Title>
          <Develope width={40} height={40} /> Full-Stack Developer
        </Title>
        
        <Description>
          I value Industries, Brands & Businesses that I work with, thus I enjoy bringing new concepts & ideas to life.
        </Description>

        <Description>
          <h3 style={{fontWeight: '600', marginBottom: '1rem', textTransform: 'uppercase'}}>
            Skills
          </h3>

          <p style={{marginLeft: '2rem'}}>HTML / XHTML / CSS | JavaScript ES6 | React | NextJs | Redux | NodeJs / Express | Context Api | Tailwind | Styled-Components</p>
        </Description>

        <SkillS>
          <h3 style={{fontWeight: '600', marginBottom: '1rem', textTransform: 'uppercase'}}>
            Source Control & DB
          </h3>

          <p style={{marginLeft: '2rem'}}>Git, Github, MongoDB, PostgreSQL</p>
        </SkillS>
        </Main>
      </Box>
    </ThemeProvider>
  )
}

export default SkillsPage