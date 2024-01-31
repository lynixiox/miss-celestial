import styled from "@emotion/styled";
import isMobile from "../../redux/isMobile";
export const HeroSectionContainer = styled.div`
    color: #fff;
    background-color: ${props=> props.lightBg ? "#fff" : "1c1c1c1c"};
    margin-top: 100px;

    `

export const HeroContainer = styled.div`
    box-sizing: ${props => props.isMobile ? "inherit" : "border-box"};
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 60px;
    padding-left: ${props => props.isMobile ? "0px" : "60px"};
    
`

export const HeroRow = styled.div`
box-sizing: ${props => props.isMobile ? "inherit" : "border-box"};
display: flex;
margin-right: -15px;
margin-bottom: -15px;
margin-left: -15px;
align-content: stretch;
flex-direction: ${props=> props.imgStart == "start" ? "row" : "row-reverse"};
flex-wrap: wrap;
`

export const HeroCol = styled.div`
box-sizing: ${props => props.isMobile ? "inherit" : "border-box"};

margin-bottom: 15px;
padding-right: 15px;
padding-left: 15px;
flex: 1;
max-width: ${props => props.isMobile ? "100%" : "100%"};
flex-basis: ${props => props.isMobile ? "100%" : "50%"};
align-content: center;
justify-content: center;
display:flex;
`

export const HeroTextWrapper = styled.div`
max-width: 95%;
padding-top: 0;
padding-bottom: 60px;
align-content: center;
justify-content: center;
text-align: center;
`

export const HeroTopLine = styled.div`

`

export const HeroHeading = styled.div`
    color: ${props => props.lightText ? "white" : "black"};
    margin-bottom: 24px;
    font-size: ${props => props.isMobile ? "40px" : "48px"};
    line-height: 1.1;
    font-weight: 600;
    text-align: none;
    margin-top: 20px; 
`

export const HeroDescription = styled.div`
color: ${props => props.lightTextDesc ? "white" : "black"};
max-width: 550px;
margin-bottom:  35px;
font-size: 18px;
text-align: center;
`

export const HeroImageContainer = styled.div`
max-width: 95%;
margin-top: 0;
margin-right: 0;
margin-left: 10px;
padding-right: 0;
`

export const HeroImage = styled.img`
height: ${props => props.imageHeight};
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
`