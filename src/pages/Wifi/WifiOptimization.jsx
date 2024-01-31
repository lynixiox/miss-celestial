import React from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import BarImage from '../../images/Goldbar.png'
import * as styeld from '../Cable Management/CableManagemnet.styles';
import { useSelector } from "react-redux";


const WifiOptimization = () => {

     const WifiObjectOne = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        headline : 'Maximize Speed',
        description : 'Enhance the performance of your wireless network with our optimization services. We fine-tune your network to maximize speed, range, and reliability, allowing you to enjoy fast and uninterrupted internet access.',
        // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
         buttonLabel : 'Find Out More',
         imgStart: '',
         img : 'images/speedtest.jpg',
         alt : 'Speed Test Of Wifi',
         imgStart: 'start',
         barImage: BarImage,
         destination: '/cableManagement'
    }
    
     const WifiObjectTwo = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        
        headline : 'Wifi Survey and Heatmapping',
        description : 'Ensure optimal Wi-Fi coverage with our survey and heatmapping services. We assess your space, identify signal strengths and weaknesses, and recommend improvements for maximum coverage.',
       // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/heatmap.png',
        alt : 'Heat Map Of Wifi Coverage',
        imgStart: '',
        barImage: BarImage,
        destination: '/cableManagement'
    }
    
    
     const WifiObjectThree = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        
        headline : 'Business-Grade Wi-Fi Solutions',
        description : 'For businesses, we offer business-grade Wi-Fi solutions that are designed to handle high traffic, ensuring a reliable and fast internet connection for your employees and customers.',
        // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/connections.jfif',
        alt : 'Internet Connectivity',
        imgStart: 'start',
        barImage: BarImage,
        destination: '/cableManagement'
    }

    const isMobile = useSelector(state => state.isMobileState.isMobile);
    
    return(
        <>
            <styeld.CableManagementHeader isMobile={isMobile}>
                WiFi Optimization
            </styeld.CableManagementHeader>
            <styeld.CableManagementItem>
                <HeroSection {...WifiObjectOne}/>
            </styeld.CableManagementItem>
            <styeld.CableManagementItem>
                <HeroSection {...WifiObjectTwo}/>
            </styeld.CableManagementItem>
            <styeld.CableManagementItem>
                <HeroSection {...WifiObjectThree}/>
            </styeld.CableManagementItem>
        </>
    )
}

export default WifiOptimization