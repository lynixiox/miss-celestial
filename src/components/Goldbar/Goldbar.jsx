import React from 'react';
import './Goldbar.css'; 

const COlOR = ['gold'];

const GoldBar = ({image}) =>{
   

    return(
    <img className = "barImage" src = {image} alt="Why Us Network Solutions Bar Image"/>
    )
};


export default GoldBar
