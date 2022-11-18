import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './Themes'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import { Work } from '../data/WorkData'
import Card from '../subComponents/Card'
import { YinYang } from './AllSvgs'
import TitleAgain from '../subComponents/TitleAgain'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

const Box = styled.div`
  background-color: ${props => props.theme.body};
  /* height: 400vh; */
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const Main = styled.div`
  position: fixed;
  top: 12rem;
  left: calc(5rem + 10vw);
  height: 60vh;
  display: flex;

  overflow-x: scroll;
  white-space: nowrap;
  scroll-behavior: smooth;
  width: 120vw;

  &::-webkit-scrollbar{
    display: none;
  }
`

const Rotate = styled.div`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`

const IconDiv = styled.div`
  font-size: 3rem;
  color: #fff;

  @media screen and (max-width: 985px) {
    display: none;
  }
  
  .left{
    cursor: pointer;
    z-index: 45;
    position: fixed;
    top: 10%;
    left: 15%;
  }

  .right{
    cursor: pointer;
    z-index: 45;
    position: fixed;
    top: 10%;
    right: 15%;
  }
`


const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }
}


const WorkPage = () => {

  const slideLeft = () => {
    var slider = document.getElementById("slider__");
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    var slider = document.getElementById("slider__");
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  const yinyang = useRef(null);

  useEffect(() => {

    const rotate = () => {
      yinyang.current.style.transform = `rotate(` + -window.pageYOffset + 'deg)' 
    }

    window.addEventListener('scroll', rotate)

    return () => window.removeEventListener('scroll', rotate)
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent click={true}/>
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main variants={container} id="slider__" initial='hidden' animate='show'>
          <IconDiv>
            <div className='left' onClick={slideLeft}>
              <FaArrowLeft />
            </div>
            <div className='right' onClick={slideRight}>
              <FaArrowRight />
            </div>
          </IconDiv>
          {
            Work.map((work, index) => {
              return(
                <>
                    <div className='card__div'>
                      <Card id={work.id} name={work.name} description={work.description} tags={work.tags} demo={work.demo} github={work.github} key={index}/>
                    </div>
                </>
              )
            })
          }
        </Main>

        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={darkTheme.text} />
        </Rotate>

        <TitleAgain Text='WORK' />
      </Box>
    </ThemeProvider>
  )
}

export default WorkPage
