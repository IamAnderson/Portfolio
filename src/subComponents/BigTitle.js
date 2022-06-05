import React from 'react'
import styled from 'styled-components'


const Box = styled.div`
    position: fixed;
    right: 60%;
    top: 10%;
    z-index: 0;
`

const BigTitle = ({Text}) => {
  return (
    <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={{color: '#fff', fontSize: '10rem', opacity: '0.2'}}>
            {Text}
        </h1>
    </Box>
  )
}

export default BigTitle