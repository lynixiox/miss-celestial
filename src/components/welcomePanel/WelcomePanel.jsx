import React from "react";
import * as styled from './WelcomePanel.styles'
import Typewriter from 'typewriter-effect';
import { useSelector } from "react-redux";
const WelcomePanel = () => {

    const isMobile = useSelector(state => state.isMobileState.isMobile);
    return (
        <>
            <styled.WelcomeContainer isMobile={isMobile}>
                <styled.WelcomeTextcontainer isMobile={isMobile}>
                    <styled.WelcomeText>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Mrs Celestial")
                            .pause(2500)
                            .start()
                        }}
                        options={{
                            loop: false
                        }}
                    />
                    </styled.WelcomeText>
                </styled.WelcomeTextcontainer>
  
            </styled.WelcomeContainer>
        </>
    )
}

export default WelcomePanel