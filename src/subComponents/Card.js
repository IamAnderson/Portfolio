import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../Components/AllSvgs';


const Box = styled(motion.li)`
    width: 16rem;
    height: 48vh;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
    padding: 1.5rem 2rem;
    margin-right: 8rem;
    border-radius: 0 50px 0 50px;
    transition: 0.2 ease all;

    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    align-items: center;

    &:hover{
        cursor: pointer;
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.text};
        border: 2px solid ${props => props.theme.text};
    }

    .Title{
        display: flex;
        align-items: center;
    }

    .Description{
        display: flex;
        align-items: center;

        border-bottom: 2px solid ${props => props.theme.body};
        padding-bottom: 1rem;
        margin-bottom: 1rem;
    }

    .Tag{
        width: 100%;
        margin-bottom: 1rem;
        
        .Tag_Div{
            display: flex;
            flex-direction: column;   
            align-items: flex-start;
        }
    }
`

const Links = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    margin-bottom: 2rem;
`

const Link = styled(NavLink)`
    border: 1px solid ${props => props.theme.body};
    width: 7em;
    height: 2rem;
    border-bottom-left-radius:50px ;
    margin-right: 0.5rem;
    text-decoration: none;
    background: ${props => props.theme.body};
    color: ${props => props.theme.text};

    display: flex;
    justify-content: center;
    align-items: center;

    
    ${Box}:hover &{
        background-color: ${props => props.theme.text};
        color: ${props => props.theme.body};;
    } 
`

const Git = styled(NavLink)`
    margin-left: 0.5rem;
    text-decoration: none;


    ${Box}:hover &{
        fill: ${props => props.theme.text};
    } 
`

const Item = {
    hidden: {
        scale: 0,
    },

    show: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.3
        }
    }
}


const Card = ({ id, name, description, tags, demo, github }) => {

  return (
    <Box key={id} variants={Item}> 
       <h2 className='Title' id={id}>
           {name}
       </h2>

        <div className='Description' style={{marginTop: '1rem'}}>
            <p style={{fontWeight: '500', fontSize: '18px', lineHeight: '1.5'}}>
                { description }
            </p>
        </div>
        
        <div className='Tag'>
            <div className='Tag_Div'>
                {tags.map(( t, index ) => {
                    return(
                        <p style={{fontWeight: '500', fontSize: '18px'}} key={index}>#{t}</p>
                    )
                })}
            </div>
        </div>
        
        <Links>
            <Link to={{pathname: `${demo}`}} target='_blank'>
                    Visit
            </Link>
            
            <Git to={{pathname: `${github}`}} target='_blank'>
                <Github width={30} height={30}/>
            </Git>
        </Links>
    </Box>
  )
}

export default Card