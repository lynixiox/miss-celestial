import React from "react";
import * as styled from './ContactHeader.styles'
import ContactInfo from '../../images/contactUs.png'
import { useSelector } from "react-redux";

const ContactHeader = ({image, title, isMobile}) => {
    return(
    <>
        <styled.ContactContainer>
        <styled.ContactTitle>
            {title}
        </styled.ContactTitle>
            <styled.ContactImageContainer>
                <styled.ContactImage isMobile={isMobile} src={ContactInfo} alt=""/>
            </styled.ContactImageContainer>
        </styled.ContactContainer>
    </>)
}

export default ContactHeader; 