import styled from "@emotion/styled";

export const FooterContainer = styled.div`
margin-top: 50px;
background-color: #1c1c1c;
padding: 4rem 0 2rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: auto;
`

export const FooterLinks = styled.div`
width: 100%;
max-width: 1000px;
display: flex;
justify-content: center;
${props => props.isMobile && `
    padding-top: 2rem;
`}

`

export const FooterLinkWrapper = styled.div`
display: flex;
${props => props.isMobile && `
    flex-direction: column;
`}
`

export const FooterLinkItem = styled.div`
font-size: 25px;
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
box-sizing: border-box;
`

export const FooterSocialMedia = styled.div`
max-width: 1000px;
width: 100%;

`

export const FooterMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
max-width: 1000px;
margin: 40px auto 0 auto;
${props => props.isMobile && `flex-direction: column;`}

`

export const FooterLogo = styled.div `

`

export const FooterWhyUs = styled.div`
color: #fff;
justify-self: start;
margin-left: 20px;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
margin-bottom: 16px;
`

export const FooterCopyRight = styled.div`
color: #fff;
margin-bottom: 16px;
`

export const FooterIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`