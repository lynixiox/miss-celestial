import React from "react";
import {styled} from '@mui/material/styles'
import {Button} from "@mui/material"
const CustomButton = (props) => {

    const {
        buttonStyle,
        buttonSize, 
        buttonColor,
        onClick,
        label,
        name
    } = props

    const StyledButton = styled(Button)`
    padding: 8px 20px;
    border-radius: 0;
    outline: none;
    border:none;
    cursor:pointer;
    white-space: nowrap;
    background-color: #3A3A3A;
    color: #ffffff;

    &&:hover{
        color: #000;
        background-color: #C6924E;
        transition: all 0.2s ease-out;
    }



    `
    return(
        <>
            <StyledButton name = {name} onClick={onClick}>{label}</StyledButton>
        </>
    )
}


export default CustomButton