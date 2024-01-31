import React from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import BarImage from '../../images/Goldbar.png'
import * as styeld from '../Cable Management/CableManagemnet.styles'
import { useSelector } from "react-redux";


const SmartHomes = () => {

    const SmartHomeObjectOne = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        
        headline : 'Home Automation Installation',
        description : 'Transform your home with our home automation installation services. We can automate lighting, climate control, security, and more, providing you with convenience and energy savings.',
       // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/smarthome-first.jpg',
        alt : 'Smart Home Media Center',
        imgStart: '',
        barImage: BarImage,
        destination: '/cableManagement',
    }


     const SmartHomeObjectTow = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        headline : 'Voice-Activated Smart Systems',
        description : "Control your home with your voice using voice-activated smart systems. We'll set up and configure devices like Amazon Alexa, Google Assistant, or Apple HomeKit to make your home truly interactive.",
       // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/smarthome-voice.jpg',
        alt : 'Voice Activated Google Home',
        imgStart: 'start',
        barImage: BarImage,
    }
    
     const SmartHomeObjectThree = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        
        headline : 'Smart Lighting Solutions',
        description : "Enhance your home's ambiance and energy efficiency with our smart lighting solutions. We install and program smart bulbs, switches, and lighting control systems.",
       // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/smarthome-light.jpg',
        alt : 'User Monitoring Home Security',
        imgStart: 'start',
        barImage: BarImage,
        destination: '/cableManagement'
    }
    
    
     const SmartHomeObjectFour = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        
        headline : 'Home Security and Surveillance',
        description : 'Secure your home with smart security and surveillance solutions. We offer smart cameras, doorbell cameras, motion detectors, and alarm systems that you can monitor remotely.',
       // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/network-sec3.jpg',
        alt : 'House With Smart Lights',
        imgStart: '',
        barImage: BarImage,
        destination: '/cableManagement'
    }

    const SmartHomeObjectFive = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        
        headline : 'Smart Lock Installation',
        description : "Upgrade your home's security with smart locks. We install and integrate smart locks that provide keyless entry and remote access control for added convenience.",
       // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/smarthome-lock.jpg',
        alt : 'Unlocking Smart Lock with Cell Phone',
        imgStart: '',
        barImage: BarImage,
        destination: '/cableManagement'
    }

    const SmartHomeObjectSix = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        
        headline : 'Smart Speaker and Multi-Room Audio',
        description : "Enjoy music in every corner of your home with smart speaker and multi-room audio solutions. We can synchronize music playback across various rooms for seamless entertainment.",
       // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/smarthome-sound.jpg',
        alt : 'Audio Mixer For Smart Home',
        imgStart: 'start',
        barImage: BarImage,
        destination: '/cableManagement'
    }



    const isMobile = useSelector(state => state.isMobileState.isMobile);
    
    return(
        <>
            <styeld.CableManagementHeader isMobile={isMobile}>
                Smart Homes
            </styeld.CableManagementHeader>
            <styeld.CableManagementItem>
                <HeroSection {...SmartHomeObjectOne}/>
            </styeld.CableManagementItem>
            <styeld.CableManagementItem>
                <HeroSection {...SmartHomeObjectTow}/>
            </styeld.CableManagementItem>
            <styeld.CableManagementItem>
                <HeroSection {...SmartHomeObjectFour}/>
            </styeld.CableManagementItem>
            <styeld.CableManagementItem>
                <HeroSection {...SmartHomeObjectThree}/>
            </styeld.CableManagementItem>
            <styeld.CableManagementItem>
                <HeroSection {...SmartHomeObjectFive}/>
            </styeld.CableManagementItem>
            <styeld.CableManagementItem>
                <HeroSection {...SmartHomeObjectSix}/>
            </styeld.CableManagementItem>

        </>
    )
}

export default SmartHomes