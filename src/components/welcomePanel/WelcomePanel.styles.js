import styled from "@emotion/styled";

export const WelcomeContainer = styled.div`

${props => props.pathname == "eu" ?
    `
        background-image: url('./images/eu-flag.png');
    `
    : props.pathname == "au" ?
    `
        background-image: url('./images/au-flag.png');
    `
    : props.pathname == "ca" ?
    `
        background-image: url('./images/ca-flag.png');
    `
    : props.pathname == "ie" ?
    `
        background-image: url('./images/ie-flag.png');
    `
    : props.pathname == "nz" ?
    `
        background-image: url('./images/nz-flag.png');
    `
    : props.pathname == "sg" ?
    `
        background-image: url('./images/sg-flag.png');
    `
    : props.pathname == "uk" ?
    `
        background-image: url('./images/uk-flag.png');
    `    
    : props.pathname == "usa" ?
    `
        background-image: url('./images/usa-flag.png');
    `
    : props.pathname == "za" ?
    `
        background-image: url('./images/za-flag.png');
    `
    :
    `
        background-image: url('./images/welcome.jpg');
    `
}
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