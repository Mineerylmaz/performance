import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "motion/react"; // framer-motion kullanıyorsan: "framer-motion"

// Basit img; istersen kendi ImageWithFallback'ini kullan
const Img = (props) => <img {...props} loading="lazy" />;

/* ================== STYLES ================== */

const HeroWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 4rem 1.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  /* Yeni palette daha modern, açık ama Neos'tan farklı */
  background: radial-gradient(
      circle at top left,
      #ffe1af 0%,
      #fbf4ec 40%,
      #e2b59a 100%
    );

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("/images/smoke.png");
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.35; /* biraz daha soft duman */
    mix-blend-mode: multiply;
    pointer-events: none;
  }
`;


const HeroInner = styled.div`
  position: relative;
  max-width: 1120px;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 2.5rem;
  align-items: center;
  z-index: 1; /* dumanın üstünde */

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

/* Arkadaki dev PERFORMANCE yazısı */

const BackWord = styled.div`
  position: absolute;
  bottom: 6%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  pointer-events: none;
  z-index: 0;

  font-size: clamp(4.5rem, 18vw, 8.5rem);
  font-weight: 800;
  letter-spacing: 0.3em;
  text-transform: uppercase;

  /* Aktif renkten türetilen soluk ton */
  color: ${({ $accent }) => $accent || "#957C62"};
  opacity: 0.18;
  mix-blend-mode: multiply;
`;




const Left = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 900px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

const Tagline = styled.p`
  font-size: 1rem;
  color: #7f7a78;
  font-style: italic;

  @media (max-width: 900px) {
    text-align: left;
  }
`;




const BigTitle = styled.h1`
  font-size: clamp(3.2rem, 6vw, 4.6rem);
  line-height: 0.9;
  letter-spacing: 0.12em;  /* 0.32'den 0.12'ye çekebilirsin */
  text-transform: uppercase;
  margin-bottom: 1.4rem;
`;




/* SAĞ TARAF */

const Right = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 1.5rem;
  align-items: center;
  z-index: 2;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* Dikey renk çizgileri */

const Stripes = styled.div`
  position: absolute;
  top: 10%;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);
  width: min(280px, 55%);
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  pointer-events: none;
  z-index: 0;

  & > div {
    flex: 1;
    border-radius: 999px;
    background: linear-gradient(
      to top,
      ${({ $accent }) => $accent}dd,
      ${({ $accent }) => $accent}33
    );
    opacity: 0.9;
    mix-blend-mode: multiply;
  }
`;



const ProductStage = styled.div`
  position: relative;
  z-index: 1;
  height: 320px;

  @media (min-width: 1024px) {
    height: 360px;
  }

  @media (max-width: 600px) {
    height: 260px;
  }
`;

const ProductImageWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductImage = styled(Img)`
  max-width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 24px 40px rgba(0, 0, 0, 0.35));
`;

/* Renk / model butonları */

const ThumbsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 2;

  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const ThumbButton = styled.button`
  border-radius: 999px;
  padding: 0.15rem;
  border: 2px solid
    ${(p) => (p.$active ? "#2a2a2a" : "rgba(255, 255, 255, 0.7)")};
  background: rgba(250, 248, 244, 0.16);
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.28);
  }
`;

const ThumbCircle = styled.div`
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 999px;
  overflow: hidden;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    width: 3rem;
    height: 3rem;
  }
`;

const ThumbLabel = styled.span`
  margin-top: 0.25rem;
  display: block;
  font-size: 0.65rem;
  text-align: center;
  color: #7f7a78;

  @media (max-width: 900px) {
    text-align: center;
  }
`;

/* ================== COMPONENT ================== */

export default function Heroshowcase() {
    // Buraya kendi foto ve renklerini koy
    const models = [
        {
            id: "nude",
            name: "Nude",
            mainImage: "/images/performance-nude-main.webp",
            thumb: "/images/performance-nude-thumb.webp",
            accent: "#E2B59A", // nude için
        },
        {
            id: "grey",
            name: "Gri",
            mainImage: "/images/performance-grey-main.webp",
            thumb: "/images/performance-grey-thumb.webp",
            accent: "#957C62", // daha nötr kahve-gri
        },
        {
            id: "black",
            name: "Siyah",
            mainImage: "/images/performance-black-main.webp",
            thumb: "/images/performance-black-thumb.webp",
            accent: "#B77466", // siyah modelde vurgu rengi
        },
    ];


    const [activeId, setActiveId] = useState(models[0].id);
    const activeModel = models.find((m) => m.id === activeId);

    return (
        <HeroWrapper>
            <BackWord $accent={activeModel.accent}>PERFORMANCE</BackWord>

            <HeroInner>
                {/* SOL: Başlık + slogan */}
                <Left>
                    <Tagline>“Her adımda hafiflik, gün boyu zarafet.”</Tagline>
                </Left>


                {/* SAĞ: Ürün + renk seçimi */}
                <Right>
                    {/* Dikey çizgiler, aktif renge göre renk değiştiriyor */}
                    <Stripes $accent={activeModel.accent}>
                        <div />
                        <div />
                        <div />
                        <div />
                    </Stripes>

                    {/* Ana ayakkabı, yukarıdan geliyor efekti */}
                    <ProductStage>
                        <AnimatePresence mode="wait">
                            <ProductImageWrapper
                                key={activeModel.id}
                                initial={{ y: -140, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 80, opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <ProductImage
                                    src={activeModel.mainImage}
                                    alt={`Performance - ${activeModel.name}`}
                                />
                            </ProductImageWrapper>
                        </AnimatePresence>
                    </ProductStage>

                    {/* Renk / model butonları */}
                    <ThumbsWrapper>
                        {models.map((model) => (
                            <div key={model.id}>
                                <ThumbButton
                                    type="button"
                                    onClick={() => setActiveId(model.id)}
                                    $active={activeId === model.id}
                                >
                                    <ThumbCircle>
                                        <img src={model.thumb} alt={model.name} />
                                    </ThumbCircle>
                                </ThumbButton>
                                <ThumbLabel>{model.name}</ThumbLabel>
                            </div>
                        ))}
                    </ThumbsWrapper>
                </Right>
            </HeroInner>
        </HeroWrapper>
    );
}
