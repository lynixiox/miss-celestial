import React from "react";
import WelcomePanel from "../../components/welcomePanel/WelcomePanel";
import WelcomePageImage from '../../images/welcomePageImage.jpg'
import HeroSection from "../../components/heroSection/HeroSection";
import GoldBarImage from "../../images/Goldbar.png"
import { useNavigate } from "react-router-dom";
import ServicesPanel from "../../components/servicesPanel/ServicesPanel";
const HomePage = () => {

    const navigate = useNavigate();

    const findOutMoreButtonOnClick = () => {
        navigate('/about')        
    }

     const homeObjOne = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        topLine : '',
        headline : 'About Us',
        description : 'Welcome to Mrs Celestial. Mrs Celestial is a celebration of the extraordinary women who are simply above and beyond. Mrs. Celestial isnt just a pageant its a platform that empowers women to embrace their true selves, break barriers, and redefine the meaning of beauty.',
        buttonLabel : 'Find Out More',
        imgStart: "",
        img : WelcomePageImage,
        alt : 'Mrs Celestial About us',
        barImage: GoldBarImage,
        showButton: true,
        buttonLabel: "Find Out More",
        onClick: findOutMoreButtonOnClick,
        imageHeight: "500px"
    }

    const homeObjTwo = {
        title: 'Services Offered',
        icon1: 'images/CableM.png',
        icon2: 'images/Maintainance.png',
        icon3: 'images/Camera.png',
        icon4: 'images/WifiOptimization.png',
        barImage: GoldBarImage
    
    }

    return(
        <>
            <WelcomePanel/>
            <HeroSection {...homeObjOne}/>

       </>
    )
}

export default HomePage;