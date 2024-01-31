import React from "react";
import * as styled from './Services.styles'
import HeroSection from "../../components/heroSection/HeroSection";
import BarImage from "../../images/Goldbar.png"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Services = () => {

    const navigate = useNavigate();

    
    const serviceObjectFive = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        
        headline : 'Hoodies',
        description : 'Pre register now to find out more about our Miss Celestial Hoodies.',
       // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/Miss_Celestial_Hoodies.png',
        alt : 'Why Us Network Solution Service',
        imgStart: 'start',
        barImage: BarImage,
        destination: '/cableManagement',
        showButton: true,
        onClick: () => {navigate("/pre-register")}
    }

    

    const isMobile = useSelector(state => state.isMobileState.isMobile);
    return (
    <>
        <styled.ServicesHeader isMobile={isMobile}>
            Merchandise
        </styled.ServicesHeader>
        <styled.ServiceItem>
            <HeroSection{...serviceObjectFive}/>
        </styled.ServiceItem>
 

    </>
    )
}

export default Services