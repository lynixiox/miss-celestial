import React from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import BarImage from '../../images/Goldbar.png'
import * as styeld from '../Cable Management/CableManagemnet.styles';
import { useSelector } from "react-redux";


const Software = () => {

     const SoftwareObjectOne = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        headline : 'Custom Software Development',
        description : 'We specialize in creating tailored software solutions to meet your unique business needs. Our team of developers will design, develop, and implement software that streamlines your operations.',
        // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
         buttonLabel : 'Find Out More',
         imgStart: '',
         img : 'images/software-custom.jpg',
         alt : 'Software Developer at Desk',
         imgStart: 'start',
         barImage: BarImage,
         destination: '/cableManagement'
    }
    
     const SoftwareObjectTwo = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        
        headline : 'Web Application Development',
        description : 'Stay ahead in the digital world with our web application development services. We build interactive and dynamic web applications that enhance user experiences and drive engagement.',
       // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/software-web.jpg',
        alt : 'Web Developer At Desk',
        imgStart: '',
        barImage: BarImage,
        destination: '/cableManagement'
    }
    
    
     const SoftwareObjectThree = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        
        headline : 'Mobile App Development',
        description : 'Reach your audience on the go with our mobile app development services. We create iOS and Android apps that offer a seamless and intuitive mobile experience for your users.',
        // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/software-mobile.jpg',
        alt : 'App Developer Having Coffee',
        imgStart: 'start',
        barImage: BarImage,
        destination: '/cableManagement'
    }

    const isMobile = useSelector(state => state.isMobileState.isMobile);
    
    return(
        <>
            <styeld.CableManagementHeader isMobile={isMobile}>
                Software Development
            </styeld.CableManagementHeader>
            <styeld.CableManagementItem>
                <HeroSection {...SoftwareObjectOne}/>
            </styeld.CableManagementItem>
            <styeld.CableManagementItem>
                <HeroSection {...SoftwareObjectTwo}/>
            </styeld.CableManagementItem>
            <styeld.CableManagementItem>
                <HeroSection {...SoftwareObjectThree}/>
            </styeld.CableManagementItem>
        </>
    )
}

export default Software