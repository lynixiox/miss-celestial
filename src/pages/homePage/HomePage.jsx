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
        description : 'Miss Celestial About us: Welcome to the dazzling world of Miss Celestial, where grace meets ambition, and dreams take flight on the wings of inner radiance. We invite you to embark on a transformative journey that transcends the boundaries of beauty and embraces the celestial essence within every young woman.',
        description2: 'Miss Celestial is not just a pageant; its a celebration of authenticity, intelligence, and the unwavering spirit that defines todays young females. In our cosmic realm, we believe that true beauty radiates from the inside out, and each contestant is a unique star in the vast universe of possibilities.',
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