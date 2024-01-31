import React from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import BarImage from '../../images/Goldbar.png'
import * as styeld from '../Cable Management/CableManagemnet.styles';
import { useSelector } from "react-redux";


const Camera = () => {

     const CameraObjectOne = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        headline : 'IP Camera Installation',
        description: "Experience the latest in surveillance technology with our IP camera installation services. IP cameras offer high-definition video quality and remote access, allowing you to monitor your property from anywhere",
        // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/service_camera.jpg',
        alt : 'IP Camera Looking at Wall',
        imgStart: 'start',
        barImage: BarImage,
        destination: '/cableManagement'
    }
    
     const CameraObjectTwo = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        
        headline : 'Security Camera Maintenance',
        description : 'Ensure your camera system continues to perform at its best with our maintenance services. We offer regular check-ups, cleaning, and software updates to keep your system in top condition.',
       // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/camera-sec.jpg',
        alt : 'CCTV Camera Mounted On Wall',
        imgStart: '',
        barImage: BarImage,
        destination: '/cableManagement'
    }
    

    const isMobile = useSelector(state => state.isMobileState.isMobile);
    
    return(
        <>
            <styeld.CableManagementHeader isMobile={isMobile}>
                Camera Systems
            </styeld.CableManagementHeader>
            <styeld.CableManagementItem>
                <HeroSection {...CameraObjectOne}/>
            </styeld.CableManagementItem>
            <styeld.CableManagementItem>
                <HeroSection {...CameraObjectTwo}/>
            </styeld.CableManagementItem>

        </>
    )
}

export default Camera