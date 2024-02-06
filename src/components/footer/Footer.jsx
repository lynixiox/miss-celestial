import React from "react";
import * as styled from './Footer.styles'
import Icons from "../icons/Icons";
import NavItem from "../navItem/NavItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Footer = () => {


    const isMobile = useSelector(state => state.isMobileState.isMobile);
    const navigate = useNavigate();

    const handleClick = (link) => {
        navigate(link);
    }


    return(
        <>
        <styled.FooterContainer isMobile={isMobile}>
            <styled.FooterLinks isMobile={isMobile}>
                <styled.FooterLinkWrapper isMobile={isMobile}>
                    <styled.FooterLinkItem isMobile={isMobile}>
                        <NavItem destination="/" text="Home"/>
                    </styled.FooterLinkItem >
                    <styled.FooterLinkItem isMobile={isMobile}>
                        <NavItem destination="/About" text="About Us"/>
                    </styled.FooterLinkItem>
                </styled.FooterLinkWrapper>
                <styled.FooterLinkWrapper isMobile={isMobile}>
                    <styled.FooterLinkItem isMobile={isMobile}>    
                        <NavItem destination="/merchandise" text="Merchandise"/>
                    </styled.FooterLinkItem>
                    <styled.FooterLinkItem isMobile={isMobile}>    
                        <NavItem destination="/pre-register" text="Pre Register"/>
                    </styled.FooterLinkItem>
                </styled.FooterLinkWrapper>
            </styled.FooterLinks >
            <styled.FooterSocialMedia isMobile={isMobile}>
                <styled.FooterMediaWrap isMobile={isMobile}>
                    <styled.FooterLogo isMobile={isMobile}>
                        <styled.FooterWhyUs isMobile={isMobile}>
                            Miss Celestial
                        </styled.FooterWhyUs>
                    </styled.FooterLogo>
                    <styled.FooterCopyRight isMobile={isMobile}>Miss Celestial © 2024</styled.FooterCopyRight>
                    <styled.FooterIcons isMobile={isMobile}>
                        <Icons onClick={handleClick} iconName="facebook" iconSize="1.5em"/>
                        <Icons onClick={handleClick} iconName="instagram" iconSize="1.5em"/>
                    </styled.FooterIcons>
                </styled.FooterMediaWrap>
            </styled.FooterSocialMedia>
        </styled.FooterContainer>
        </>
    )
}

export default Footer;