import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCodeBadge } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';

import ReactSwitch from 'react-switch';

const Navbar = ({darkMode, setDarkMode}) => {
  const [isOpen, setIsOpen] = React.useState(false);
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
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
          <NavLink style={{ display: "flex", flex: "column", justifyContent: "center", alignItems: "center" }}>
            <ReactSwitch onChange={() => setDarkMode(!darkMode)} checked={darkMode} handleDiameter={15} onColor="#854CE6"
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
            <ReactSwitch handleDiameter={15} onColor="#854CE6"
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
                  color: "orange",
                  paddingRight: 2
                }}
              >
                EN
              </div>
            }/>
          </NavLink>
        </NavItems>
        

        <ButtonContainer>
          <GitHubButton style={{backgroundColor: "#1C1C27"}} href={Bio.github} target="_blank"><FaGithub/> Github Profile</GitHubButton>
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
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank"> Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar