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
        description : '  Here, we believe that every woman is a celestial being, radiating her own unique brilliance and contributing to the cosmic symphony of life.Our pageant is a journey of self-discovery, where contestants transcend the superficial and delve into the depths of their character, intelligence, and compassion. We celebrate the multifaceted essence of womanhood, acknowledging that true beauty lies in authenticity, kindness, and the pursuit of noble causes.',
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
        description : 'As a contestant in Mrs. Celestial, you are not just vying for a crown; you are joining a sisterhood of trailblazers committed to making a difference. Whether championing social causes, advocating for education, or fostering community development, our queens are catalysts for positive change, exemplifying the notion that beauty is not only skin deep but radiates from the soul. Mrs. Celestial is more than a pageant; its a movement that encourages women to embrace their power, unleash their potential, and illuminate the world with their brilliance. Join us on this celestial journey, where the stars align, dreams take flight, and extraordinary women reign supreme.',
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