import React from "react";
import * as styled from './ServicesPanel.styles'
import GoldBar from "../Goldbar/Goldbar";
import ServiceOption from "./serviceOption/ServiceOption";
import { Icon } from "@mui/material";
import Icons from "../icons/Icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ServicesPanel = (props) => {

    const {
        barImage ="",
        title
    } = props

    const isMobile = useSelector(state => state.isMobileState.isMobile);
    const navigate = useNavigate();

    const handleClick = (destination) => {
        navigate(destination);
    }
    return(
        <>
            <styled.ServicesContainer isMobile={isMobile}> 
                <styled.ServiceRow isMobile={isMobile}>
                    <styled.ServicesTitle isMobile={isMobile}>
                        <GoldBar image={barImage} isMobile={isMobile}/>
                        {title}
                    </styled.ServicesTitle>
                </styled.ServiceRow>
                <styled.ServiceRow isMobile={isMobile}> 
                    <styled.ServiceCol onClick={() => {handleClick("/networking")}} isMobile={isMobile}>
                        <ServiceOption icon={<Icons iconName="network" iconSize="4em" iconColor="#C6924E"/>} label="Networking"/>
                    </styled.ServiceCol>
                    <styled.ServiceCol onClick={()=> {handleClick("/smart-homes")}} isMobile={isMobile}>
                        <ServiceOption  icon={<Icons iconName="smarthome" iconSize="4em" iconColor="#C6924E"/>} label="Smart Homes"/>
                    </styled.ServiceCol>
                    <styled.ServiceCol onClick={() => {handleClick("/wifi-optimization")}} isMobile={isMobile}>
                        <ServiceOption icon={<Icons iconName="wifi" iconSize="4em" iconColor="#C6924E"/>} label="Wifi"/>
                    </styled.ServiceCol>
                    <styled.ServiceCol onClick={() => {handleClick("/software-development")}} isMobile={isMobile}>
                        <ServiceOption icon={<Icons iconName="software" iconSize="4em" iconColor="#C6924E"/>} label="software"/>
                    </styled.ServiceCol>
                </styled.ServiceRow >
            </styled.ServicesContainer>
        </>
    )
}

export default ServicesPanel;