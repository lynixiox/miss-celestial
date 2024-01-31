import { useSelector } from 'react-redux';
import ContactForm from '../../components/contact/ContactForm';
import ContactHeader from './ContactHeader';
import * as styled from './ContactUs.styles';
import React from 'react';

const ContactUs = () => {

    const isMobile = useSelector(state => state.isMobileState.isMobile);


    return(
        <>
            <styled.ServicesHeader isMobile={isMobile}>
                Pre-Register Now
             </styled.ServicesHeader>
            <ContactForm/>
        </>
    )
}

export default ContactUs;