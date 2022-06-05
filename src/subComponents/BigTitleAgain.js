import React from 'react'
import styled from 'styled-components'


const Box = styled.div`
    position: fixed;
    right: 10%;
    top: 70%;
    z-index: 0;
`

const BigTitleAgain = ({Text}) => {
  return (
    <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={{color: '#000', fontSize: '10rem', opacity: '0.1'}}>
            {Text}
        </h1>
    </Box>
  )
}

export default BigTitleAgain