import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Github, LinkedIn, Twitter } from '../Components/AllSvgs'
import { darkTheme } from '../Components/Themes'

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


    position: fixed;
    bottom: 0;
    left: 3rem;

    z-index: 3;

    &>*::not(:last-child){
        margin: 0.5rem 0;
    }

    @media screen and (max-width: 500px) {
        left: 1rem;
    }
`

const Line = styled(motion.span)`
    width: 2px;
    height: 8rem;
    background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
`

const SocialIcons = (props) => {
  return (
      <Icons>
        <motion.div
            initial={{
                transform: 'scale(0)*'
            }}

            animate={{
                scale: [0, 1, 1.5, 1]
            }}

            transition={{
                type: 'spring',
                duration: 1,
                delay: 1.2
            }}
            >
                <NavLink style={{color:'inherit'}} target = '_blank'   to={{pathname: '//www.linkedin.com/in/anderson-simeon/'}}>
                    <LinkedIn width={50} height={50} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}/>
                </NavLink>
        </motion.div>
          
        <motion.div
        initial={{
            transform: 'scale(0)*'
        }}

        animate={{
            scale: [0, 1, 1.5, 1]
        }}

        transition={{
            type: 'spring',
            duration: 1,
            delay: 1.2
        }}
        >
            <NavLink style={{color:'inherit'}} target = '_blank'   to={{pathname: '//github.com/IamAnderson'}}>
                <Github width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
            </NavLink>
        </motion.div>

        <motion.div
        initial={{
            transform: 'scale(0)*'
        }}

        animate={{
            scale: [0, 1, 1.5, 1]
        }}

        transition={{
            type: 'spring',
            duration: 1,
            delay: 1.4
        }}
        >
            <NavLink style={{color: 'inherit'}} target = '_blank'  to={{pathname: '//twitter.com/Iam___Andy'}}>
                <Twitter width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
            </NavLink>
        </motion.div>

        <Line color={props.theme}
        initial={{
            height: 0,
        }}

        animate={{
            height: '8rem'
        }}

        transition={{
            type: 'spring',
            duration: '1',
            delay: '0.8'
        }}
        />
      </Icons>
  )
}

export default SocialIcons