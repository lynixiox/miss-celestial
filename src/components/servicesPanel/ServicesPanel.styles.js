import styled from "@emotion/styled";

export const ServicesContainer = styled.div`
background-image: url('./images/ServiceBackground.png');
align-items: center;
justify-content: center;
height: auto;
padding-bottom: 100px;
margin-bottom: 100px;
`

export const ServiceRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-content: center;
    width: 100%;
    position: relative;
    align-items: center;
justify-content: center;

`

export const ServiceCol = styled.div`
    flex: 15%;
    max-width: ${props => props.isMobile ? "100%" : "25%" };
    padding: ${props => props.isMobile ? "40px" : "4px"};
    width: 100%;

`


export const ServicesTitle = styled.div`
margin-top: ${props => props.isMobile ? "100px" : "50px"};

color: #ffffff;
font-size: ${props => props.isMobile ? "40px" : "50px"};
text-align: center;
padding-top: 2%;
`
