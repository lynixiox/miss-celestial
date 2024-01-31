import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import AboutUs from "../pages/aboutUs/AboutUs";
import Services from "../pages/services/Services";
import ContactUs from "../pages/contactUs/ContactUs";
import CableManagement from "../pages/Cable Management/CableManagement";
import WifiOptimization from "../pages/Wifi/WifiOptimization";
import Camera from "../pages/Camera/Camera";
import Networking from "../pages/networking/Networking";
import SmartHomes from "../pages/SmartHomes/SmartHomes";
import Software from "../pages/software/Software";

const DesktopRoutes = () => {
    return(
        <Routes>
           <Route exact path={"/"} element={<HomePage/>} />
           <Route exact path="/about" element={<AboutUs/>}/>
           <Route exact path="/merchandise" element={<Services/>}/>
           <Route exact path="/pre-register" element={<ContactUs/>}/>
           <Route exact path="/cable-management" element={<CableManagement/>}/>
           <Route exact path="/wifi-optimization" element={<WifiOptimization/>}/>
           <Route exact path="/camera-systems" element={<Camera/>}/>
           <Route exact path="/networking" element={<Networking/>}/>
           <Route exact path="/smart-homes" element={<SmartHomes/>}/>
           <Route exact path="/software-development" element={<Software/>}/>
        </Routes>
    )
}

export default DesktopRoutes