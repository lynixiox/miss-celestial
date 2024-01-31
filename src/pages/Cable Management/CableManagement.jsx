import React from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import BarImage from '../../images/Goldbar.png'
import * as styeld from './CableManagemnet.styles';
import { useSelector } from "react-redux";


const CableManagement = () => {

     const CableObjectOne = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        headline : 'Home Cable Management',
        description : 'We offer a general cable management service for those homes in need of some tender love and care. We can remove any unwanted cables as well as tidy up and sort out your cables. We offer trunking for any cables seen as an eyesore and need to be tucked away. We offer cable management for all internet cables and other cables not needing lengthening.',
       // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/cb-Server.webp',
        alt : 'Untidy Server Rack',
        imgStart: 'start',
        barImage: BarImage,
    }
    
     const CableObjectTwo = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        
        headline : 'Office Wiring',
        description : 'Our office wiring service includes building your infrastructure of network cables for a new or ongoing office. We install and clean up all types of internet and camera cables belonging in an office. We can set up hard wired points at desks or wall points along with a wireless access point for your wireless needs. We can build your internal network for you allowing all devices to be connected and running efficiently.',
       // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/connections.jfif',
        alt : 'Internet Connectivity',
        imgStart: '',
        barImage: BarImage,
        destination: '/cableManagement'
    }
    
    
     const CableObjectThree = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        
        headline : 'Server Clean-up',
        description : 'Initial setup of server cabinets including hardware and software. Cleaning up any messy or untidy server cabinets. Labelling and sorting cables. Ensuring  your network runs efficiently ',
       // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/network-sec.jpg',
        alt : 'Neat Cables In Server Rack',
        imgStart: 'start',
        barImage: BarImage,
        destination: '/cableManagement'
    }

    const isMobile = useSelector(state => state.isMobileState.isMobile);
    
    return(
        <>
            <styeld.CableManagementHeader isMobile={isMobile}>
                Cable Management
            </styeld.CableManagementHeader>
            <styeld.CableManagementItem>
                <HeroSection {...CableObjectOne}/>
            </styeld.CableManagementItem>
            <styeld.CableManagementItem>
                <HeroSection {...CableObjectTwo}/>
            </styeld.CableManagementItem>
            <styeld.CableManagementItem>
                <HeroSection {...CableObjectThree}/>
            </styeld.CableManagementItem>
        </>
    )
}

export default CableManagement