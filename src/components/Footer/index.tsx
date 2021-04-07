import React from 'react'
import styled from 'styled-components'
import './Footer.css'
const Link02: React.FC = () => {
    return (
        <FLink02B>
        <StyledAbsoluteLinkB href="#" >Powered by Push Protocol:</StyledAbsoluteLinkB> |
        <StyledAbsoluteLinkB href="https://pushprotocol.com/" >PushProtocol.com</StyledAbsoluteLinkB> |
        <StyledAbsoluteLinkB href="https://www.binance.org/en/smartChain" >Binance Smart Chain</StyledAbsoluteLinkB> |
        </FLink02B>
    )
}

const Link01: React.FC = () => {
    return (
      <FLink01B>
        <StyledAbsoluteLinkA href="#" >List new token</StyledAbsoluteLinkA> |
        <StyledAbsoluteLinkA href="https://github.com/pushswap" >Github</StyledAbsoluteLinkA> |
        <StyledAbsoluteLinkA href="https://pushprotocol.medium.com/" >Medium</StyledAbsoluteLinkA> |
        <StyledAbsoluteLinkA href="https://t.me/pushprotocol_official_channel" >Telegram</StyledAbsoluteLinkA> |
        <StyledAbsoluteLinkA href="https://twitter.com/PushProtocol" >Twitter</StyledAbsoluteLinkA> |
      </FLink01B>
    )
}


const StyledAbsoluteLinkA = styled.a`
    cursor:pointer; 
    text-decoration: none;
    color:#fff;
    font:normal 10px/16px "Press Start 2P", arial;
    margin:0 16px;
    &:hover {
        color: #F3B92E;
    }
`
const StyledAbsoluteLinkB = styled.a`
    cursor:pointer; 
    text-decoration: none;
    color:#fff;
    font:normal 12px/16px "IBM Plex Mono", arial;
    margin:0 6px;
    &:hover {
        color: #F3B92E;
    }
`

const FooterFrame = styled.footer`

    background-color:#AD0162;
    width:100%;
    height:100px; 
    margin-top:40px;
    display:flex;
    align-items:center;
    padding:28px 20px;
    flex-wrap:wrap;
    position:relative;
    @media (min-width: 320px) and (max-width: 320px){
        flex-wrap: wrap;
        flex-direction: row;
    }
    @media (min-width: 501px) and (max-width: 501px){
        height:auto;
        padding:10px 10px 30px 10px;
    }
    @media (min-width: 768px) and (max-width: 768px){
        height:auto;
        padding:10px 10px 30px 10px;
    } 

`

const FooterCbox = styled.div`
    text-align:center;
    margin:0 auto;
`

const FLink01B = styled.div`
    font:normal 15px/16px arial;color:#424242;
    padding-bottom:8px;
    display:flex;
    align-items:center;
    justify-content:center;
`

const FLink02B = styled.div`
    font:normal 15px/16px arial;color:#2a2a2a;
    padding-bottom:8px;
`

const FooterBody = styled.div`
    display:block;
    margin: 0px;
    width:99%;
    position: fixed;
    left: 0;
    bottom: 0;
    

`
const Footer: React.FC = () => {
    
    return (
        <FooterBody>
            <FooterFrame>
                <FooterCbox>
                    <Link01 />
                    <Link02 />
                </FooterCbox>
            </FooterFrame>
        </FooterBody>
    )}

export default Footer
