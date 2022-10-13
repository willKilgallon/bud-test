import React from 'react';
import styled, { keyframes } from "styled-components";

const PhoneContainer = styled.div`
    width: 20rem;
    height: 40rem;
    display: flex;
    position: absolute;
    transform: rotate(0deg);
    transition: all cubic-bezier(0.36, 0.41, 0.38, 1) 0.4s;
    z-index: 10;
    
    @media (max-height: 40rem){
        width: 48vh;
        height: 94vh;
    }
`

const Phone = styled.div`
    display: flex;
    flex: 1;
    background-color: #292c2d;
    border-radius: 3rem;
    margin: 0.2rem;
    overflow: hidden;
    position: relative;
    box-shadow: 0 0.1rem 0.4rem rgba(255, 255, 255, 0.1) 
`

const Screen = styled.div`
    display: flex;
    flex: 1;
    background-color: #191b1c;
    margin: 0.4rem;
    border-radius: 2.6rem;
    border: solid 0.2rem #121415;
    position: relative;
    z-index: 10;
    max-width: calc(100% - 1rem)
`

const helloBud = keyframes`
     0% { transform:  translateY(10%) scaleX(1.4); }
     50% { transform:  translateY(10%) scaleX(1.4); }
     100% { transform:  translateY(100%) scaleX(1.4); }
`

const budLogo = keyframes`
     0% {  opacity: 1; }
     80% { opacity: 1 }
     90% { opacity: 0 }
     100% { opacity: 0 }
`

const ScreenView = styled.div`
    background: #FFFFFF;
   
    margin: 0.6rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    width: 100%;  
    position: relative;
    
    
    
    &:before {
        content: "";
        position: absolute;
        left: -10rem;
        z-index: 1;
        width: 50rem;
        height: 50rem;
        border-radius: 50%;
        background: linear-gradient(110deg,#AB34B2, #D63776, #5D2B8B );
        bottom: 0;
        animation-name: ${ helloBud };
        animation-iteration-count: 1;
        animation-duration: 7s;
        z-index: 40;
        transform:  translateY(100%) scaleX(1.4);

    }
    
    &:after {
        content: url(https://www.thisisbud.com/hubfs/barker/images/bud-logo.svg?v=2);
        width: 4rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
        z-index: 50;
        opacity: 0;
        animation-name: ${ budLogo };
        animation-iteration-count: 1;
        animation-duration: 5s;
        
    }
`
const PhoneTop = styled.div`
// that stupid notch
    position: absolute;
    width: 50%;
    background-color: #191b1c;
    height: 1.8rem;
    border-radius: 0 0 0.9rem 0.9rem;
    right: 25%;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 0.3rem;
    box-sizing: border-box;
    margin-top: 0.5rem;
    z-index: 999;
    
    &:after, &:before {
    // assisting the sensual notch curves
        content: "";
        width: 10%;
        height: 50%;
        position: absolute;
        background: transparent;
        top: -0.3rem;
        border: solid 0.4rem #191b1c;
        border-bottom: 0;
    }
    
    &:after {
        left:0.4rem;
        transform: translateX(-100%);
        border-left: 0;
        border-radius: 0 0.7rem 0 0;
    }
    
    &:before {
        right:0.4rem;
        transform: translateX(100%);
        border-right: 0;
        border-radius: 0.7rem 0 0 0;
    }
`

const Speaker = styled.div`
    background: #070808;
    border-radius: 0.2rem;
    height: 0.35rem;
    width: 28%;
`

const Camera = styled.div`
    height: 0.35rem;
    width: 0.35rem;
    background: #272727;
    margin-left: .5rem;
    border-radius: 50%;
    margin-right: -0.8rem;
`

const Button = styled.div`
    width: 1rem;
    position: absolute;
    z-index: 2;
    background: linear-gradient(to bottom, #212324, #2b2e31,#212324);
    box-shadow: 0 0 0.4rem rgba(255, 255, 255, 0.1) inset;
    border-radius: 2px;
`

const PowerButton = styled(Button)`
    right: 0;
    top: 25%;
    height: 4rem;
`

const SilenceToggle = styled(Button)`
    left: 0;
    top: 15%;
    height: 1.5rem;
`

const VolumeUp = styled(Button)`
    left: 0;
    top: 25%;
    height: 2rem;
`

const VolumeDown = styled(Button)`
    left: 0;
    top: calc( 25% + 2.5rem);
    height: 2rem;
`

function PhoneMockup(props) {
    return (
        <PhoneContainer>
            <Phone>
                <Screen>
                    <ScreenView>
                        { props.children }
                    </ScreenView>

                    <PhoneTop>
                        <Speaker />
                        <Camera />
                    </PhoneTop>
                </Screen>
            </Phone>
            <PowerButton />
            <SilenceToggle />
            <VolumeUp />
            <VolumeDown />
        </PhoneContainer>
    );
}

export default PhoneMockup;