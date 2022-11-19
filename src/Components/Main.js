import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
import Intro from './Intro'
import { motion } from 'framer-motion'


const MainContainer = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  height: h1,h2,h3,h4,h5,h6{
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }

`

const Container = styled.div`
  padding: 2rem;
`

const Contact = styled.div`
  color: ${props => props.theme.text};
  position: absolute;
  right: calc(1rem + 2vw);
  z-index: 1;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;
`


const Blog = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  z-index: 1;
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
`

const Work = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  position: absolute;
  top: 50%;
  left: 4rem;
  z-index: 1;
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
`

const BottomBar = styled.div`
  justify-content: space-around;
  display: flex;
  align-items: flex-end;
  height: 90vh;
`

const About = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  z-index: 1;
  text-decoration: none;
`

const Skills = styled(NavLink)`
  color: ${props => props.theme.text};
  z-index: 1;
  text-decoration: none;
`

const rotate = keyframes`
  from{
    transform: rotate(0);
  }

  to{
    transform: rotate(360deg);
  }
`

const Center = styled.button`
  position: absolute;
  left: ${({click}) => click ? '92%' : '50%'};
  top: ${props => props.click ? '85%' : '50%'};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 1s ease;


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &>:first-child{
    animation: ${rotate} infinite 1.5s linear; 
  }

  &>:last-child{
    padding-top: 1rem;
  }


  @media screen and (max-width: 500px){
    transform: scale(0.65);
    left: ${({click}) => click ? '75%' : '30%'};
    top: ${props => props.click ? '75%' : '40%'};
  }
`

const ClickHere = styled.div`
  opacity: ${({click}) => click ? 0 : 1};
`

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${props => props.click ? '50%' : '0%'};
  height: ${props => props.click ? '100%' : '0%'};
  z-index: 1;
  background-color: #000;
  transition: height 0.5s ease, width 1s ease 0.5s ;
`


const Main = ({ click, handleClick }) => {

  return (
    <>
      <MainContainer>
          <Container>
            <LogoComponent click={click}/>
            <PowerButton />
            <SocialIcons theme={click ? 'dark' : 'light'} />
            <DarkDiv click={click} />


            <Center click={click}>
              <YinYang onClick={() => handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill={'currentColor'} />
              <ClickHere click={click} onClick={handleClick}>click here</ClickHere>
            </Center>

            <Contact target='_blank'>
              <motion.h2
              initial={{
                y: -200,
                transition: {
                  type: 'spring',
                  duration: 1.5,
                  delay: 1
                }
              }}
              
              animate={{
                y: 0,
                transition: {
                  type: 'spring',
                  duration: 1.5,
                  delay: 1
                }
              }}

              whileHover={{
                scale: 1.1
              }}
              whileTap={{
                scale: 0.9
              }}
              >
                <NavLink to="/SayHi" style={{textDecoration: "none", color: "#000"}}>Say hi...</NavLink>
              </motion.h2> 
            </Contact>



            <Work to='/Work' click={click}>
              <motion.h3
              initial={{
                x: -200,
                transition: {
                  type: 'spring',
                  duration: 1.5,
                  delay: 1
                }
              }}
              
              animate={{
                x: 0,
                transition: {
                  type: 'spring',
                  duration: 1.5,
                  delay: 1
                }
              }}              
              whileHover={{
                scale: 1.1
              }}
              whileTap={{
                scale: 0.9
              }}
              >Work
              </motion.h3>
            </Work>

            <BottomBar>           
              <About to='/About' click={click}>
                <motion.h3
              initial={{
                y: 200,
                transition: {
                  type: 'spring',
                  duration: 1.5,
                  delay: 1
                }
              }}
              
              animate={{
                y: 0,
                transition: {
                  type: 'spring',
                  duration: 1.5,
                  delay: 1
                }
              }}                
                whileHover={{
                  scale: 1.1
                }}
                whileTap={{
                  scale: 0.9
                }}
                >About.
                </motion.h3>
              </About>

              <Skills style={{zIndex: "2"}} to='/Skills'>
                <motion.h3
              initial={{
                y: 200,
                transition: {
                  type: 'spring',
                  duration: 1.5,
                  delay: 1
                }
              }}
              
              animate={{
                y: 0,
                transition: {
                  type: 'spring',
                  duration: 1.5,
                  delay: 1
                }
              }}                
              whileHover={{
                scale: 1.1
              }}
              whileTap={{
                scale: 0.9
              }}                
              >
                Skills.
              </motion.h3>
              </Skills>
            </BottomBar>

          </Container>
          {click ? <Intro click={click} /> : null}
      </MainContainer>
    </>
  )
}

export default Main