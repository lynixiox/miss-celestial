import styled from "@emotion/styled";
export const ContactContainer = styled.div`
height: inherit;
display: flex;
flex-direction: column;
width: 100%;
`
export const ContactTitle = styled.div`
padding-top: 100px;
text-align: center;
font-size: 30px;
`

export const ContactImage = styled.img`
object-fit: cover;
max-width: ${props => props.isMobile ? "100%" : "115%"};

margin-top: ${props => props.isMobile ? "50px" : "100px"};
margin-right: 0;
margin-left: 10px;
padding-right: 0;
text-align: center;
margin-bottom: ${props => props.isMobile && "50px"};
`



export const ContactImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`