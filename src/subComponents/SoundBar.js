import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import music from '../assets/audio/Takeshi - Cafe Blue (Pour un Oui Ou Pour un Non).mp3'

const Box = styled.div`
    display: flex;
    cursor: pointer;
    position: fixed;
    left: 9rem;
    top: 3rem;
    z-index: 10;

    &>*:nth-child(1){
        animation-delay: 0.2s;
    }

    &>*:nth-child(2){
        animation-delay: 0.3;
    }

    &>*:nth-child(3){
        animation-delay: 0.4s;
    }

    &>*:nth-child(4){
        animation-delay: 0.5s;
    }

    &>*:nth-child(5){
        animation-delay: 0.8s;
    }
`

const Play = keyframes`
    0%{
        transform: scaleY(1);
    }

    50%{
        transform: scaleY(2);
    }

    100%{
        transform: scaleY(1);
    }
`

const Line = styled.span`
    background-color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.body};

    animation: ${Play} 1s ease infinite;
    animation-play-state: ${({click}) => (click ? 'running' : 'paused')};
    height: 1rem;
    width: 2px;
    margin: 0 0.1rem;
`

const SoundBar = () => {

    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if(!click){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }

  return (
    <Box onClick={handleClick}>
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />
        <audio src={music} ref={ref} />
    </Box>
  )
}

export default SoundBar