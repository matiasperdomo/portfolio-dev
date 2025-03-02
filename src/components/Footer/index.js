import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import { useTranslation } from 'react-i18next';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;


const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  const [t, i18n] = useTranslation("constants");
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Matias Perdomo</Logo>
        <Nav>
          <NavLink href="#about">{t("footer.about")}</NavLink>
          <NavLink href="#skills">{t("footer.skills")}</NavLink>
          <NavLink href="#experience">{t("footer.experience")}</NavLink>
          <NavLink href="#projects">{t("footer.projects")}</NavLink>
          <NavLink href="#education">{t("footer.education")}</NavLink>
          <NavLink href="#contact">{t("footer.contact")}</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={t("bio.facebook")} target="display"><FacebookIcon /></SocialMediaIcon>
          <SocialMediaIcon href={t("bio.twitter")} target="display"><TwitterIcon /></SocialMediaIcon>
          <SocialMediaIcon href={t("bio.linkedin")} target="display"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={t("bio.insta")} target="display"><InstagramIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; {t("footer.copyright")}
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;