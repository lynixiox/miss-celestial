import React from "react";
import * as styled from './WelcomePanel.styles'
import Typewriter from 'typewriter-effect';
import { useSelector } from "react-redux";
const WelcomePanel = () => {

    const isMobile = useSelector(state => state.isMobileState.isMobile);
    let params = window.location.href;
    const pathSplitArr = params.split('.');
    const secondSplit = pathSplitArr[0].split('/');
    const pathname = secondSplit[secondSplit.length -1];
    console.log(pathSplitArr);
    return (
        <>
            <styled.WelcomeContainer pathname={pathname} isMobile={isMobile}>
                <styled.WelcomeTextcontainer isMobile={isMobile}>
                    <styled.WelcomeText>
                    <Typewriter
                        onInit={(typewriter) => {
                            if(pathname === "eu"){
                                typewriter.typeString("Miss Celestial Europe")
                                .pause(2500)
                                .start()
                            }else if(pathname === "ie"){
                                typewriter.typeString("Miss Celestial Ireland")
                                .pause(2500)
                                .start()
                            }else if(pathname === "ca"){
                                typewriter.typeString("Miss Celestial Canada")
                                .pause(2500)
                                .start()
                            }else if(pathname === "au"){
                                typewriter.typeString("Miss Celestial Australia")
                                .pause(2500)
                                .start()
                            }else if(pathname === "nz"){
                                typewriter.typeString("Miss Celestial New Zealand")
                                .pause(2500)
                                .start()
                            }else if(pathname === "sg"){
                                typewriter.typeString("Miss Celestial Singapore")
                                .pause(2500)
                                .start()
                            }else if(pathname === "uk"){
                                typewriter.typeString("Miss Celestial United Kingdom")
                                .pause(2500)
                                .start()
                            }else if(pathname === "usa"){
                                typewriter.typeString("Miss Celestial United States")
                                .pause(2500)
                                .start()
                            }else if(pathname === "za"){
                                typewriter.typeString("Miss Celestial South Africa")
                                .pause(2500)
                                .start()
                            }else{
                                typewriter.typeString("Miss Celestial")
                                .pause(2500)
                                .start()
                            }

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