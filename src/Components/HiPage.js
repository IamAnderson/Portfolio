import React from 'react'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { MdContentCopy } from "react-icons/md"
import { AiOutlineMail } from "react-icons/ai"
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    div{
        display: flex;
        align-items: center;

        padding: 2rem;
        background-color: #ECF3F2;
        box-shadow: 1px 1px 3px #000;

        @media screen and (max-width: 500px) {
            padding: 2rem 1rem;
        }

        .span1{
            display: flex;
            align-items: flex-end;
            margin-right: 1rem;

            p{
                background: hsla(170, 100%, 62%, 1);
                background: linear-gradient(90deg, hsla(170, 100%, 62%, 1) 15%, hsla(66, 100%, 49%, 1) 100%);
                filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#3FFFDF", endColorstr="#E1FA00", GradientType=1 );
                background-clip: text;
                -webkit-background-clip: text;
                margin-left: 0.5rem;
                letter-spacing: 5px;

                @media screen and (max-width: 500px) {
                    letter-spacing: normal;
                }
            }
        }

        .span2{            
            border-left: 1px solid #000;
            padding-left: 0.85rem;
            cursor: pointer;

            .copy_{
                background: hsla(170, 83%, 49%, 1);
                background: linear-gradient(135deg, hsla(170, 83%, 49%, 1) 10%, hsla(66, 89%, 52%, 1) 100%);
                filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#15E6C3", endColorstr="#DCF218", GradientType=1 );
                background-clip: text;
                -webkit-background-clip: text;

                &:hover{
                    color: #00A489;
                }

                &:active{
                    color: #00A489;
                    transform: scale(80%);
                }
            }
        }
    }
`

const HiPage = () => {
  return (
    <>
        <LogoComponent click={false}/>
        <SocialIcons theme="light" />
        <PowerButton />
        

        <Box>
            <div>
                <span className='span1'> <AiOutlineMail style={{color: "#00A489"}} /> <p> omorogbeandersonsimeon@gmail.com </p></span>
                <CopyToClipboard text="omorogbeandersonsimeon@gmail.com"><span className='span2' onClick={() => alert("Copied To Clipboard")}> <MdContentCopy className='copy_'/> </span></CopyToClipboard>
            </div>
        </Box>
    </>
  )
}

export default HiPage