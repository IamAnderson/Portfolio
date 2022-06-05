import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import Me from '../assets/Images/PixtonImg.png'
import './intro.css'



const Box = styled(motion.div)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 65vw;
    height:55vh;
    display: flex;
    background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
    z-index:1;

    @media screen and (max-width: 460px){
     width: 60vw;
    }
`

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  font-size: calc(1em + 1.5vw);
  cursor: pointer;
  color: ${props => props.theme.body};
  justify-content: space-evenly;

  @media screen and (max-width: 560px){
    font-size: calc(0.75em + 1.5vw);
  }

  @media screen and (max-width: 450px){
    font-size: calc(0.55em + 1.5vw);
  }
`

const Intro = () => {
  return (
    <Box
    initial={{height: 0}}
    animate={{height: '55vh'}}
    transition={{type:'spring', duration:2, delay:1}}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Anderson.</h3>
          <h6 style={{
            color: 'grey',
            fontWeight: '300'
          }}>
            I design and code simple yet beautiful websites.
          </h6>
        </Text>
      </SubBox>
          <motion.div
           className='pic'
           initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration:1, delay:1}}
           >
            <img src={Me} alt='Me' />
          </motion.div>
      <SubBox>
        
      </SubBox>
    </Box>
  )
}

export default Intro