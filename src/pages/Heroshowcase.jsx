import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
// --- GLOBAL AYARLAR ---
const GlobalStyles = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body, html {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    font-family: 'Inter', sans-serif;
    background-color: #000;
  }
`;

// --- ÜRÜN VERİSİ ---
const SHOES = [
  {
    id: 1,
    name: "NUDE RUNNER",
    desc: "Gün boyu hafiflik ve zarafet.",
    image: "/images/hero3.webp",
  },
  {
    id: 2,
    name: "MIDNIGHT BLACK",
    desc: "Gece koşuları için tasarlandı.",
    image: "/images/hero1.webp",
  },
  {
    id: 3,
    name: "SOFT GREY",
    desc: "Ofis ve sokak modası bir arada.",
    image: "/images/hero2.webp",
  },
];

export default function HeroShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeShoe = SHOES[activeIdx];
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyles />
      <HeroSection>
        {/* ARKADAKİ DEV PERFORMANCE YAZISI */}
        <BackgroundLabel>PERFORMANCE</BackgroundLabel>

        {/* ÖN PLAN İÇERİK */}
        <ContentGrid>
          {/* SOL PANEL */}
          <LeftInfo>
            <motion.div
              key={activeShoe.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Title>{activeShoe.name}</Title>
              <Desc>{activeShoe.desc}</Desc>
              <MobileTagline>GÜN BOYU TEMPO, HAFİF ADIM.</MobileTagline>
            </motion.div>

            {/* MOBİL RENK BUTONLARI – başlığın hemen altında */}
            <MobileNav>
              {SHOES.map((item, idx) => (
                <MobileNavItem
                  key={item.id}
                  $active={idx === activeIdx}
                  onClick={() => setActiveIdx(idx)}
                >
                  <MobileCircle $active={idx === activeIdx}>
                    <img src={item.image} alt={item.name} />
                  </MobileCircle>
                  <MobileLabel>{item.name}</MobileLabel>
                </MobileNavItem>
              ))}
            </MobileNav>

            <ButtonGroup>
              <PrimaryBtn onClick={() => navigate("/modeller")}>KOLEKSİYONU KEŞFET</PrimaryBtn>
              <SecondaryBtn onClick={() => navigate("/biz-kimiz")}>TEKNOLOJİ HİKAYESİ</SecondaryBtn>
            </ButtonGroup>
          </LeftInfo>

          {/* ORTA PANEL: AYAKKABI + PLATFORM YAZISI */}
          <CenterProduct>
            <AnimatePresence mode="wait">
              <ProductImageWrapper
                key={activeShoe.id}
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 60, opacity: 0 }}
                transition={{ type: "spring", stiffness: 110, damping: 20 }}
              >
                <img src={activeShoe.image} alt={activeShoe.name} />
              </ProductImageWrapper>
            </AnimatePresence>

            <Shadow />

            {/* DESKTOP’TA PODYUM ÖNÜ YAZI – MOBİLDE YOK */}
            <PodiumBox>
              <span>GÜN BOYU TEMPO, HAFİF ADIM.</span>
            </PodiumBox>
          </CenterProduct>

          {/* SAĞ PANEL: DESKTOP NAV */}
          <RightNav>
            <NavContainer>
              {SHOES.map((item, idx) => (
                <NavDot key={item.id} onClick={() => setActiveIdx(idx)}>
                  <img src={item.image} alt="nav-thumb" />
                  {idx === activeIdx && <ActiveRing layoutId="active-ring" />}
                </NavDot>
              ))}
            </NavContainer>
          </RightNav>
        </ContentGrid>
      </HeroSection>
    </>
  );
}

/* =============== STYLED COMPONENTS =============== */

const HeroSection = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  background-image: url("/images/herobg.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.22) 70%
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    padding-top: 1.2rem;
  }
`;

/* ARKADAKİ DEV YAZI */
const BackgroundLabel = styled.div`
  position: absolute;
  top: 7%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  font-size: clamp(3.8rem, 12.5vw, 11rem);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.12);
  z-index: 1;
  pointer-events: none;
  white-space: nowrap;
  text-shadow:
    0 0 18px rgba(0, 0, 0, 0.18),
    0 0 40px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    top: 50%;
    left: 6%;
    width: auto;
    font-size: 11vw;
    letter-spacing: 0.18em;
    text-align: left;
    transform: translateY(-50%) rotate(-90deg);
  }
`;

/* İÇERİK DÜZENİ */
const ContentGrid = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1.4fr 1fr;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem;
  }
`;

/* SOL KISIM */
/* Mevcut kodunuzda LeftInfo styled component'ini bulun ve bu satırları güncelleyin */

const LeftInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding-left: 1rem;
  
  /* EKLEME: Bu alanın diğerlerinin üstünde olması için */
  position: relative; 
  z-index: 10; 

  @media (max-width: 768px) {
    padding-left: 0;
    align-items: center;
    text-align: center;
    margin-top: 0.8rem;
    order: 1;
    width: 100%;
    
    /* Mobilde de z-index'in çalıştığından emin olalım */
    position: relative;
    z-index: 50; 
  }
`;

const Title = styled.h2`
  font-size: 3.4rem;
  line-height: 0.9;
  font-weight: 800;
  color: #3e2c28;
  text-transform: uppercase;
  margin-bottom: 0.6rem;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const Desc = styled.p`
  font-size: 1rem;
  color: #5e4b44;
  font-weight: 500;
`;

const MobileTagline = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-top: 0.6rem;
    font-size: 0.8rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #5e4b44;
    font-weight: 600;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  margin-top: 1.4rem;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const PrimaryBtn = styled.button`
  padding: 0.9rem 2.4rem;
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.95);
  border-radius: 999px;
  color: #3e2c28;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: 0.3s;
  width: fit-content;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  &:hover {
    background: #fff;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
    justify-content: center;
  }
`;

const SecondaryBtn = styled(PrimaryBtn)`
  background: transparent;
  border-color: rgba(94, 75, 68, 0.4);
  color: #5e4b44;

  &:hover {
    background: rgba(94, 75, 68, 0.08);
  }

  @media (max-width: 768px) {
    display: none; /* mobilde tek CTA */
  }
`;

/* ORTA KISIM (AYAKKABI) */
const CenterProduct = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 60vh;
    order: 2;        /* mobilde yazıdan sonra */
    width: 100%;
  }
`;

/* AYAKKABI – mobilde daha sola kayık */
const ProductImageWrapper = styled(motion.div)`
    position: absolute;
    left: -20%;
    bottom: 24%;
    transform: translateX(-90%);
    width: clamp(360px, 50vw, 680px);
    pointer-events: none;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
      transform: rotate(-18deg);
      filter: drop-shadow(0 32px 52px rgba(0, 0, 0, 0.55));
    }

    @media (max-width: 768px) {
  bottom: 38%;              /* podyuma daha yakın */
  left: -20%;                 /* daha sola */
  transform: translateX(-50%);
  width: min(130vw, 620px); /* 🔥 gerçek büyüme burada */
  max-width: 620px;         /* tablet mini için sınır */
  
  img {
    transform: rotate(-10deg);
  }
}

  `;

const Shadow = styled.div`
  position: absolute;
  left: 50%;
  bottom: 30%;
  transform: translateX(-60%);
  width: 230px;
  height: 28px;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.45) 0%,
    transparent 70%
  );
  filter: blur(15px);
  z-index: 1;

  @media (max-width: 768px) {
    bottom: 25%;
    left: 60%;
    transform: translateX(-40%);
    width: 180px;
  }
`;

/* PLATFORM ÖNÜ YAZI – SADECE DESKTOP */
const PodiumBox = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 520px;
  text-align: center;
  z-index: 2;

  span {
    color: #ffffff;
    font-size: 0.9rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-weight: 600;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

/* SAĞ (DESKTOP NAV) */
const RightNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding-right: 1rem;

  @media (max-width: 1024px) {
    position: absolute;
    right: 1.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavContainer = styled.div`
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(16px);
  padding: 1rem 0.8rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.38);
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.25);
`;

const NavDot = styled.div`
  position: relative;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
    object-fit: contain;
    z-index: 2;
    transition: transform 0.2s;
  }

  &:hover img {
    transform: scale(1.08);
  }
`;

const ActiveRing = styled(motion.div)`
  position: absolute;
  inset: -3px;
  border: 2px solid #fff;
  border-radius: 50%;
  box-shadow:
    0 0 14px rgba(255, 255, 255, 0.85),
    0 0 30px rgba(255, 225, 210, 0.85);
`;

/* MOBİL NAV – başlığın altında, tek alan */
const MobileNav = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    justify-content: center;
    flex-wrap: nowrap;
  }
`;

const MobileNavItem = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  opacity: ${(p) => (p.$active ? 1 : 0.7)};
`;

const MobileCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${(p) =>
    p.$active ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.14)"};
  border: 1px solid rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${(p) =>
    p.$active ? "0 0 14px rgba(255,255,255,0.8)" : "0 6px 18px rgba(0,0,0,0.2)"};

  img {
    width: 70%;
    object-fit: contain;
  }
`;

const MobileLabel = styled.span`
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #3e2c28;
  font-weight: 600;
`;
