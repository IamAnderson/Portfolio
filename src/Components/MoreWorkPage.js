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
// import BigTitle from '../subComponents/BigTitle'
import TitleAgain from '../subComponents/TitleAgain'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Work1 } from '../data/WorkData1'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  height: 400vh;
  position: relative;
  overflow: hidden;
`

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  /* left: calc(50vw * 70%); */
  height: 40vh;
  display: flex;

  .More_Btn{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 5%;
    z-index: 10;

    .more_work__link{
      display: inline-block;
      color: #fff;
      font-family: 'Pacifico', cursive;
      font-size: 2rem;
      font-weight: 700;
      position: fixed;
      right: 2rem;
      top: 2rem;
      text-decoration: none;
      z-index: 10;

      padding: 0.25rem 0.75rem;
      border: 1px solid #fff;

      cursor: pointer;
    }
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


const MoreWorkPage = () => {

  const ref = useRef(null);
  const yinyang = useRef(null);


  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`

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

        <Main ref={ref} variants={container} initial='hidden' animate='show'>
          <>
          {
            Work1.map((work, index) => {
              return(
                <>
                  <Card id={work.id} name={work.name} description={work.description} tags={work.tags} demo={work.demo} github={work.github} key={index}/>
                </>
              )
            })
          }
          </>
          <div className='More_Btn'>
            <NavLink to="/Work" className="more_work__link">PREV</NavLink>
          </div>
        </Main>

        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={darkTheme.text} />
        </Rotate>

        <TitleAgain Text='WORK' />
      </Box>
    </ThemeProvider>
  )
}

export default MoreWorkPage