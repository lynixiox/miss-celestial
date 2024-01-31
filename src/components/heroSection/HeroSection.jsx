import React, { useEffect } from "react";
import * as styled from './HeroSection.styles'
import GoldBar from "../Goldbar/Goldbar";
import CustomButton from "../Button/Button";
import { useSelector } from "react-redux";
const HeroSection = (props) => {

    const {
        lightBg,
        topLine, 
        lightText, 
        lightTextDesc, 
        headline, 
        description, 
        description2, 
        buttonLabel, 
        img, 
        alt, 
        imgStart, 
        barImage,
        showButton = false,
        onClick = () => {},
        imageHeight
    } = props

    
    useEffect(()=> {
        console.log(headline);
    },[])
    const isMobile = useSelector(state => state.isMobileState.isMobile);
    console.log(isMobile);
    
    return (
        <>
        <styled.HeroSectionContainer lightBg={lightBg}>
            <styled.HeroContainer isMobile={isMobile}>
                <styled.HeroRow isMobile={isMobile} imgStart={imgStart}>
                    <styled.HeroCol  isMobile={isMobile}>
                        <styled.HeroTextWrapper>
                            <styled.HeroTopLine>
                                {topLine}
                            </styled.HeroTopLine>
                            <styled.HeroHeading  isMobile={isMobile} lightText={lightText}>
                            <GoldBar image={barImage}/>
                            {headline}
                            </styled.HeroHeading>
                            <styled.HeroDescription lightTextDesc={lightTextDesc}>
                                {description}
                            </styled.HeroDescription>
                            <styled.HeroDescription>
                                {description2}
                            </styled.HeroDescription>
                            {showButton&&
                                <>
                                    <CustomButton name="button" label={buttonLabel} onClick={onClick}/>
                                </>
                            }
                        </styled.HeroTextWrapper>
                    </styled.HeroCol>
                    <styled.HeroCol>
                        <styled.HeroImageContainer>
                            <styled.HeroImage src={img} alt={alt} imageHeight={imageHeight}/>
                        </styled.HeroImageContainer>
                    </styled.HeroCol>
                </styled.HeroRow>
            </styled.HeroContainer>
        </styled.HeroSectionContainer>
        </>
    )
}

export default HeroSection