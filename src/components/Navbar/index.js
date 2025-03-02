import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCodeBadge } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';

import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

import ReactSwitch from 'react-switch';

const Navbar = ({darkMode, setDarkMode}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [t, i18n] = useTranslation("constants");

  const handleLanguageChange = () => {
    setIsChecked((prevValue) => {
      const newCheckedValue = !prevValue;
      if (newCheckedValue) {
        i18n.changeLanguage("en");
      } else {
        i18n.changeLanguage("es");
      }
      return newCheckedValue;
    });
  };



  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color:"white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCodeBadge size="3rem" /> <Span>Matias Perdomo</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">{t("nav.about")}</NavLink>
          <NavLink href='#skills'>{t("nav.skills")}</NavLink>
          <NavLink href='#experience'>{t("nav.experience")}</NavLink>
          <NavLink href='#projects'>{t("nav.projects")}</NavLink>
          <NavLink href='#education'>{t("nav.education")}</NavLink>
          <NavLink href='#contact'>{t("nav.contact")}</NavLink>
          <NavLink style={{ display: "flex", flex: "column", justifyContent: "center", alignItems: "center" }}>
            <ReactSwitch onChange={() => setDarkMode(!darkMode)} checked={darkMode} handleDiameter={15} onColor="#3380ff"
            uncheckedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "orange",
                  paddingRight: 2
                }}
              >
                ☀️
              </div>
            }
            checkedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "orange",
                  paddingRight: 2
                }}
              >
                🌙
              </div>
            }/>
          </NavLink>
          <NavLink style={{ display: "flex", flex: "column", justifyContent: "center", alignItems: "center" }}>
            <ReactSwitch onChange={() => handleLanguageChange()} checked={isChecked} handleDiameter={15} onColor="#3380ff" offColor="#3380ff" 
            uncheckedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "white",
                  paddingRight: 2
                }}
              >
                EN
              </div>
            }
            checkedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "white",
                  paddingRight: 2
                }}
              >
                ES
              </div>
            }/>
          </NavLink>
        </NavItems>
        

        <ButtonContainer>
          <GitHubButton style={{backgroundColor: "#07102a"}} href={t("bio.github")} target="_blank"><FaGithub/>{t("nav.github")}</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={t("bio.github")} target="_blank"> Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar