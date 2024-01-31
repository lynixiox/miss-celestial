import styled from "@emotion/styled";

export const ContactContainer = styled.div`
max-width:1000px;
background-color: #1c1c1c;
margin-bottom: ${props => props.isMobile ? "500px" : "100px"};
margin: 0 auto;
height: ${props => props.isMobile ? "fit-content" : "600px"};
max-height: 100%;
`
export const ContactContent = styled.div`
margin-top: 50px;
width: auto;
`

export const ContactRow = styled.div`
   display: flex;
   flex-wrap: ${props => props.isMobile ? "wrap" : "nowrap"};
   align-content: center;
   margin-top: ${props => props.isMobile ? "0px" : "100px"};
   height: 100%;
`

export const ContactCol = styled.div`
    width: ${props => props.isMobile ? "100%" : "50%"};
    height: ${props => props.isMobile ? "auto" : "100%"};
`


export const ContactImage = styled.img`
object-fit: cover;
max-width: ${props => props.isMobile ? "108%" : "115%"};
height: 100%;
margin-top: 0;
margin-right: 0;
margin-left: ${props => props.isMobile ? "-20px" : "10px"};
padding-right: 0;
`

export const ContactData = styled.form`

display: flex;
flex-direction: column;
width: 100%;
height: fit-content;
gap: 20px;
min-width: 150px;
max-width: 300px;
margin-left: ${props => props.isMobile? "10%" : "100px"};
padding-bottom: 100px;

`