// src/components/Footer.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Heart } from "lucide-react";

// Navbar ile birebir aynı renk paleti
const COLORS = {
  blush: "#F4E3E6",
  background: "#F7EEF0",
  surface: "#FFFFFF",
  greySoft: "#E5E5E9",
  brown: "#6B544A",
  text: "#1F2933",
  navy: "#223147",
  textLight: "#6B7280", // Biraz daha soft metin için
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContainer>
        {/* ÜST KISIM: LOGO & LİNKLER */}
        <TopSection>
          {/* Logo Alanı */}
          <BrandSection>
            <Logo to="/">
              <LogoWord>PERFORMANCE</LogoWord>
              <LogoSub>Yıldızlar Ayakkabı</LogoSub>
            </Logo>
            <Tagline>
              Şehir temposu için tasarlanan konfor ve estetik.
            </Tagline>
          </BrandSection>

          {/* Linkler */}
          <LinksSection>
            <FooterLink to="/">Anasayfa</FooterLink>
            <FooterLink to="/biz-kimiz">Biz Kimiz</FooterLink>
            <FooterLink to="/tasarim">Tasarım</FooterLink>
            <FooterLink to="/modeller">Modeller</FooterLink>
            <FooterLink to="/iletisim">İletişim</FooterLink>
          </LinksSection>

          {/* Sosyal Medya İkonları */}

        </TopSection>

        <Divider />

        {/* ALT KISIM: COPYRIGHT & İMZA */}
        <BottomSection>
          <CopyrightText>
            &copy; {currentYear} Performance Yıldızlar Ayakkabı. Tüm hakları saklıdır.
          </CopyrightText>


        </BottomSection>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;

/* ============= STYLES ============= */

const FooterWrapper = styled.footer`
  background: ${COLORS.surface};
  border-top: 1px solid rgba(230, 205, 196, 0.5);
  padding: 3rem 1.5rem 1.5rem;
  margin-top: auto; /* Sayfa içeriği azsa bile en alta iter */
`;

const FooterContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

/* ÜST KISIM */
const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
  }
`;

/* LOGO BLOK */
const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const Logo = styled(Link)`
  display: inline-flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  gap: 0.1rem;
`;

const LogoWord = styled.span`
  font-family: "Playfair Display", serif;
  font-size: 1.4rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${COLORS.navy};
  font-weight: 600;
`;

const LogoSub = styled.span`
  font-size: 0.6rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: ${COLORS.brown};
`;

const Tagline = styled.p`
  font-size: 0.8rem;
  color: ${COLORS.textLight};
  max-width: 200px;
  line-height: 1.5;
  margin-top: 0.5rem;
`;

/* LİNKLER */
const LinksSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    gap: 2rem;
    margin-top: 0.5rem;
  }
`;

const FooterLink = styled(Link)`
  font-size: 0.85rem;
  color: ${COLORS.text};
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: color 0.2s ease;
  position: relative;

  &:hover {
    color: ${COLORS.brown};
  }
  
  /* Hover'da alt çizgi efekti */
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: ${COLORS.brown};
    transition: width 0.3s;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

/* SOSYAL MEDYA */
const SocialSection = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${COLORS.background};
  color: ${COLORS.brown};
  transition: all 0.3s ease;
  border: 1px solid rgba(107, 84, 74, 0.1);

  &:hover {
    background: ${COLORS.brown};
    color: ${COLORS.surface};
    transform: translateY(-2px);
  }
`;

/* AYIRAÇ VE ALT KISIM */
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg, 
    transparent, 
    rgba(107, 84, 74, 0.2), 
    transparent
  );
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: ${COLORS.textLight};

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CopyrightText = styled.span`
  opacity: 0.8;
`;

const DesignerText = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  
  span {
    font-weight: 600;
    color: ${COLORS.navy};
    font-family: "Playfair Display", serif; /* İmza için şık font */
    letter-spacing: 0.05em;
  }
`;

const HeartIcon = styled(Heart)`
  color: ${COLORS.brown};
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`;