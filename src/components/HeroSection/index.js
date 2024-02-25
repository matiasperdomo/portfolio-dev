import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/profile-image.jpg'
import Typewriter from 'typewriter-effect';
import { FaLinkedin } from "react-icons/fa";

import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const [t, i18n] = useTranslation("constants");
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>{t("hero.heroTittle")} <br /> {t("bio.name")}</Title>
                        <TextLoop>
                            {t("hero.heroPresentation")}
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: [t("bio.roles1"), t("bio.roles2"), t("bio.roles3")],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{t("bio.description")}</SubTitle>
                        <ResumeButton href={t("bio.resume")} target='display'><FaLinkedin /> {t("hero.heroButton")}</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection