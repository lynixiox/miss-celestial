import React from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import BarImage from '../../images/Goldbar.png'
import * as styeld from '../Cable Management/CableManagemnet.styles'
import { useSelector } from "react-redux";


const Networking = () => {

    const NetworkObjectOne = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        
        headline : 'Networking',
        description : 'We specialize in creating robust, customized network solutions tailored to your business needs. Our team of experts will design and implement a network infrastructure that ensures seamless communication and data transfer within your organization.',
       // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/network-server.jpg',
        alt : 'Data Center',
        imgStart: '',
        barImage: BarImage,
        destination: '/cableManagement',
    }


     const NetworkObjectTow = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        headline : 'Network Security Solutions',
        description : 'Protect your data and operations with our cutting-edge network security services. We offer firewalls, intrusion detection, encryption, and other security measures to safeguard your network from cyber threats.',
       // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/network-sec1.jpg',
        alt : 'Server Admin Outside Server Room',
        imgStart: 'start',
        barImage: BarImage,
    }
    
     const NetworkObjectThree = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        
        headline : 'Network Monitoring and Maintenance',
        description : 'Our proactive network monitoring and maintenance services ensure your network runs smoothly. We identify and address issues before they disrupt your operations, minimizing downtime.',
       // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/network-sec2.jpg',
        alt : 'Network Engineer Inpsecting Fiber Installation',
        imgStart: 'start',
        barImage: BarImage,
        destination: '/cableManagement'
    }
    
    
     const NetworkObjectFour = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        
        headline : 'Wireless Network Setup',
        description : 'Enjoy the freedom of a wireless world with our wireless network setup services. We design and configure wireless networks that offer high-speed, reliable connections for your business or home.',
       // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/network-sec3.jpg',
        alt : 'User Using Business Wifi',
        imgStart: '',
        barImage: BarImage,
        destination: '/cableManagement'
    }

    const NetworkObjectFive = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        
        headline : 'Cabling and Infrastructure',
        description : 'Ensure your network is built on a strong foundation with our cabling and infrastructure services. We handle structured cabling, data center setup, and more.',
       // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/network-sec.jpg',
        alt : 'Neat Cabling In Server Rack',
        imgStart: '',
        barImage: BarImage,
        destination: '/cableManagement'
    }

    const NetworkObjectSix = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        
        headline : 'Cloud Integration',
        description : "Embrace the cloud with our expert cloud integration services. We'll help you migrate to the cloud, set up cloud-based applications, and ensure seamless access to your data from anywhere.",
       // description2 : 'By combining all their skills, collecting the right research and taking the necessary steps to make sure they know what they are doing, they are able to provide one-of-a-kind services.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/network-sec4.jpg',
        alt : 'User Using Cloud Services From Anywhere',
        imgStart: 'start',
        barImage: BarImage,
        destination: '/cableManagement'
    }



    const isMobile = useSelector(state => state.isMobileState.isMobile);
    
    return(
        <>
            <styeld.CableManagementHeader isMobile={isMobile}>
                Networking
            </styeld.CableManagementHeader>
            <styeld.CableManagementItem>
                <HeroSection {...NetworkObjectOne}/>
            </styeld.CableManagementItem>
            <styeld.CableManagementItem>
                <HeroSection {...NetworkObjectTow}/>
            </styeld.CableManagementItem>
            <styeld.CableManagementItem>
                <HeroSection {...NetworkObjectFour}/>
            </styeld.CableManagementItem>
            <styeld.CableManagementItem>
                <HeroSection {...NetworkObjectThree}/>
            </styeld.CableManagementItem>
            <styeld.CableManagementItem>
                <HeroSection {...NetworkObjectFive}/>
            </styeld.CableManagementItem>
            <styeld.CableManagementItem>
                <HeroSection {...NetworkObjectSix}/>
            </styeld.CableManagementItem>

        </>
    )
}

export default Networking