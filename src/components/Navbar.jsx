// src/components/Navbar.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const COLORS = {
  blush: "#F4E3E6",
  background: "#F7EEF0",
  surface: "#FFFFFF",
  greySoft: "#E5E5E9",
  brown: "#6B544A",
  text: "#1F2933",
  navy: "#223147",
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <Nav>
      <NavInner>
        {/* LOGO */}
        <Logo to="/" onClick={close}>
          <LogoWord>PERFORMANCE</LogoWord>
          <LogoSub>Yıldızlar Ayakkabı</LogoSub>
        </Logo>

        {/* DESKTOP LİNKLER */}
        <NavLinks>
          <NavItem to="/" end>
            Anasayfa
          </NavItem>
          <NavItem to="/biz-kimiz">Biz Kimiz</NavItem>
          <NavItem to="/tasarim">Tasarım &amp; Konfor</NavItem>
          <NavItem to="/modeller">Modellerimiz</NavItem>
          <NavItem to="/iletisim">İletişim</NavItem>
        </NavLinks>

        {/* MOBİL BUTON */}
        <MobileButton onClick={toggle} aria-label="Menüyü Aç / Kapat">
          {open ? <X size={22} /> : <Menu size={22} />}
        </MobileButton>
      </NavInner>

      {/* MOBİL MENÜ */}
      <MobileMenu $open={open}>
        <MobileLink to="/" end onClick={close}>
          Anasayfa
        </MobileLink>
        <MobileLink to="/biz-kimiz" onClick={close}>
          Biz Kimiz
        </MobileLink>
        <MobileLink to="/tasarim" onClick={close}>
          Tasarım &amp; Konfor
        </MobileLink>
        <MobileLink to="/modeller" onClick={close}>
          Modellerimiz
        </MobileLink>
        <MobileLink to="/iletisim" onClick={close}>
          İletişim
        </MobileLink>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;

/* ========== STYLES ========== */

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(16px);
  background: linear-gradient(
    to bottom,
    rgba(247, 238, 240, 0.94),
    rgba(247, 238, 240, 0.82),
    rgba(247, 238, 240, 0.7)
  );
  border-bottom: 1px solid rgba(230, 205, 196, 0.6);
`;

const NavInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  
  /* --- GÜNCELLEME BURADA YAPILDI --- */
  /* Mobilde (varsayılan) üst ve alta boşluk ekleyerek yüksekliği artırdık */
  padding: 1rem 1.5rem; 
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    /* Desktop için padding ayarı */
    padding: 0.9rem 3rem;
  }
`;

const Logo = styled(NavLink)`
  display: inline-flex;
  flex-direction: column;
  gap: 0.05rem;
  text-decoration: none;
  color: inherit;
`;

const LogoWord = styled.span`
  font-family: "Playfair Display", serif;
  font-size: 1.25rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: ${COLORS.navy};
`;

const LogoSub = styled.span`
  font-size: 0.55rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: ${COLORS.brown};
`;

/* DESKTOP NAV */

const NavLinks = styled.div`
  display: none;
  gap: 1.8rem;
  align-items: center;

  @media (min-width: 900px) {
    display: flex;
  }
`;

const NavItem = styled(NavLink)`
  position: relative;
  font-size: 0.9rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.text};
  padding-bottom: 0.25rem;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0%;
    border-radius: 999px;
    background: linear-gradient(90deg, ${COLORS.brown}, ${COLORS.blush});
    transition: width 0.25s ease;
  }

  &:hover {
    color: ${COLORS.brown};
  }

  &:hover::after {
    width: 60%;
  }

  &.active {
    color: ${COLORS.brown};
  }

  &.active::after {
    width: 100%;
  }
`;

/* MOBİL */

const MobileButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid rgba(190, 160, 145, 0.8);
  background: rgba(255, 255, 255, 0.9);
  padding: 0.35rem 0.5rem;
  cursor: pointer;

  svg {
    color: ${COLORS.brown};
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  @media (min-width: 900px) {
    display: none;
  }

  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: ${({ $open }) => ($open ? "0.4rem 1.5rem 0.9rem" : "0 1.5rem")};
  max-height: ${({ $open }) => ($open ? "260px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;

  background: linear-gradient(
    to bottom,
    rgba(247, 238, 240, 0.95),
    rgba(247, 238, 240, 0.98)
  );
  border-bottom: 1px solid rgba(230, 205, 196, 0.7);
`;

const MobileLink = styled(NavLink)`
  padding: 0.55rem 0.1rem;
  font-size: 0.9rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.text};
  border-radius: 0.6rem;

  &.active {
    background: ${COLORS.blush};
    color: ${COLORS.brown};
  }
`;