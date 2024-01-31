import styled from "@emotion/styled";

export const WelcomeContainer = styled.div`
background-image: url('./images/welcome.png');
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
height: ${props => props.isMobile ? "85vh" : "90vh"};
display:flex;
align-items: center;
justify-content: center;
`

export const WelcomeTextcontainer = styled.div`
font-family: Arial, Helvetica, sans-serif;
font-size: ${props =>props.isMobile ? "40px" : "100px"};;
font-weight: lighter;
text-align: center;
color: #ffffff;
letter-spacing: -2px;
line-height: 120px;
`

export const WelcomeText = styled.div`

`