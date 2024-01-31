import React from "react";
import {MdFacebook, MdInstagram, MdNetworkCheck} from "react-icons/md"
import {FaInstagram, FaCode, FaTimes, FaBars, FaHome, FaNetworkWired} from "react-icons/fa"
import {BsCodeSlash} from "react-icons/bs"
const Icons = (props) => {
    

    const {
        iconName = "",
        iconSize,
        iconColor= "#fff",
        onClick = () => {}
    } = props;

    const iconList = {
        facebook: <MdFacebook onClick={() => {onClick("//www.facebook.com/profile.php?id=61555682172190")}} key="facebook" size={iconSize} color={iconColor}/>,
        instagram: <FaInstagram onClick={()=> {onClick("//www.instagram.com/mrscelestialofficial/")}}key="instagram" size={iconSize} color={iconColor}/>,
        smarthome: <FaHome key="smartHome" size={iconSize} color={iconColor}/>,
        software: <FaCode key="software" size={iconSize} color={iconColor}/>,
        menuClosed: <FaTimes key="menuClosed" size={iconSize} color={iconColor}/>,
        menuOpen: <FaBars key="menuOpen" size={iconSize} color={iconColor}/>,
        network: <FaNetworkWired key="network" size={iconSize} color={iconColor}/>,
        wifi: <MdNetworkCheck key="wifi" size={iconSize} color={iconColor}/>
    }
    
    return(
    <>
        {iconList[iconName]}
    </>
    )
} 

export default Icons