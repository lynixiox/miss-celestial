import styled from "@emotion/styled";

export const CableManagementHeader = styled.div`
    color: white;
    text-align: center;
    font-size: ${props => props.isMobile ? "40px" : "80px"};
    padding: ${props => props.isMobile ? "100px" : "100px"};
    background-image: url(../../images/ServiceBackground.png);
    background-size: cover;
`

export const CableManagementItem = styled.div`
    padding: ${props => props.isMobile ? "0px" : "60px"};
`