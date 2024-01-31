import React from "react";
import * as styled from './ServiceOption.styles'
import { useSelector } from "react-redux";
const ServiceOption = (props) => {

    const{
        icon,
        label,
        onClick = () => {}
    }=props
    const isMobile = useSelector(state => state.isMobileState.isMobile);
    return(
        <>
        <styled.ServiceOptionContainer onClick={onClick} isMobile={isMobile}>
            <styled.ServiceOptionImage>
                {icon}
            </styled.ServiceOptionImage>
            <styled.ServiceOptionLabel isMobile ={isMobile}>
                {label}
            </styled.ServiceOptionLabel>
        </styled.ServiceOptionContainer>
            
        </>
    )
}

export default ServiceOption;