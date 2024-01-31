import React from "react";
import * as styled from './AboutUs.styles'
import HeroSection from "../../components/heroSection/HeroSection";
import BarImage from '../../images/Goldbar.png'
const AboutUs = () => {

     const aboutObjectOne = {
    
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        
        headline : 'Who We Are',
        description: 'Miss Celestial is not just a pageant; its a celebration of authenticity, intelligence, and the unwavering spirit that defines todays young females. In our cosmic realm, we believe that true beauty radiates from the inside out, and each contestant is a unique star in the vast universe of possibilities.',
        description2 : 'Our pageant isnt about conforming to traditional ideals; its a platform for empowering young women to embrace their individuality, passions, and purpose. Miss Celestial is a stage where dreams are woven into constellations, and confidence becomes the guiding North Star that leads the way to a brighter future.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/welcomePageImage.jpg',
        alt : 'Why Us Founders',
        imgStart: 'start',
        barImage: BarImage,
        imageHeight: "500px"
    }

     const aboutObjectTwo = {
        lightBg : true,
        lightText : false,
        lightTextDesc : false,
        topLine : '',
        headline : 'What We Do',
        description : 'We foster an environment where intelligence is as captivating as a captivating smile, where kindness holds more weight than a runway strut. Miss Celestial is a celebration of diversity, a tapestry woven with stories from every corner of the world, proving that strength lies in our differences.',
        description2: 'Join us in redefining beauty standards, breaking barriers, and inspiring a generation to reach for the stars. Miss Celestial is not just a competition; its a sisterhood, a launchpad for ambitions, and a cosmic celebration of the phenomenal young women who dare to dream and reach beyond the celestial heights. Welcome to a universe where beauty knows no bounds – welcome to Miss Celestial.',
        buttonLabel : 'Find Out More',
        imgStart: '',
        img : 'images/whatWeDo.jpg',
        alt : 'What Why Us does',
        imgStart: '',
        barImage: BarImage,
        imageHeight: "500px"
    }

    return(
        <>
        <styled.AboutContainer>
            <styled.AboutHeader>
                About us
            </styled.AboutHeader>
            <styled.AboutHeroContainer>
                <HeroSection {...aboutObjectOne}/>
                <HeroSection {...aboutObjectTwo}/>
            </styled.AboutHeroContainer>
        </styled.AboutContainer>

        </>
    )
}

export default AboutUs