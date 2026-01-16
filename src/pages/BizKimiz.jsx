// src/pages/BizKimiz.jsx
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import {
  Factory,
  TrendingUp,
  Users,
  Layers,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ============= PALETTE ============= //
const COLORS = {
  bg: "#faf8f4",
  textMain: "#3E2C28",
  textLight: "#8D746A",
  cardBg: "rgba(255, 255, 255, 0.65)",
  accent: "#D7B29E",
  white: "#FFFFFF",
};

const GlobalStyles = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body {
    background: ${COLORS.bg};
    color: ${COLORS.textMain};
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }
`;

// ============= ANIMATIONS ============= //
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const BizKimiz = () => {
  return (
    <>
      <GlobalStyles />
      <PageWrapper>
        <Navbar />

        {/* HERO SECTION */}
        <HeroSection>
          {/* ARKA PLAN LOGOSU */}
          <HeroBackgroundLogo>
            <img src="/images/logo.webp" alt="Background Logo" />
          </HeroBackgroundLogo>

          <HeroContent initial="hidden" animate="visible" variants={fadeUp}>
            <HeroTag>MİRAS VE GELECEK</HeroTag>
            <HeroTitle>
              Kuşadası'ndan Doğan
              <br />
              <span className="accent">Ustalık Hikayesi</span>
            </HeroTitle>
            <HeroText>
              1994'ten bugüne, babadan oğula geçen bir tutku. Mağazacılıktan
              endüstriyel üretime uzanan 30 yıllık konfor yolculuğu.
            </HeroText>
          </HeroContent>
        </HeroSection>

        {/* HİKAYE BÖLÜMÜ */}
        <StoryWrapper>
          <StoryContainer>
            <GridContainer>
              <TextColumn
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <SectionEyebrow>BAŞLANGIÇ</SectionEyebrow>
                <SectionTitle>Temellerin Atıldığı Yer</SectionTitle>
                <StoryParagraph>
                  Hikayemiz, <strong>1994 yılında Aydın Kuşadası'nda</strong>,
                  Sefer Yıldız'ın vizyonuyla başladı. Sektöre perakende
                  mağazacılık ile adım atan firmamız, ayakkabının sadece bir
                  ürün değil, insan hayatına dokunan bir konfor aracı olduğunu o
                  yıllarda keşfetti.
                </StoryParagraph>
                <StoryParagraph>
                  Oğulları, uzun yıllar boyunca babalarının ve sektörün önde
                  gelen üreticilerinin yanında, tezgahın tozunu yutarak işin
                  mutfağında pişti.
                </StoryParagraph>

                <SignatureBlock>
                  <div className="line"></div>
                  <span>Since 1994</span>
                </SignatureBlock>
              </TextColumn>

              {/* RESİM ALANI */}
              <ImageColumn
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <img src="/images/story-1.webp" alt="Üretim Tarihçesi" />
              </ImageColumn>
            </GridContainer>
          </StoryContainer>
        </StoryWrapper>

        {/* QUOTE SECTION */}
        <QuoteSection>
          <QuoteContainer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <QuoteIcon>”</QuoteIcon>
            <QuoteContent>
              <QuoteText>
                Biz sadece ayakkabı üretmiyoruz; 2004'ten beri babamızdan
                öğrendiğimiz esnaf ahlakını, endüstriyel güçle birleştiriyoruz.
              </QuoteText>
              <QuoteAuthor>Ömer, Önder & Yunus Yıldız</QuoteAuthor>
            </QuoteContent>
          </QuoteContainer>
        </QuoteSection>

        {/* STATS SECTION */}
        <StatsWrapper>
          <StatsContainer>
            <StatsHeader>
              <SectionTitle style={{ textAlign: "center", fontSize: "2rem" }}>
                Üretim Gücümüz
              </SectionTitle>
            </StatsHeader>

            <StatsGrid
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <StatCard variants={fadeUp}>
                <div className="icon-wrapper"><Factory size={22} /></div>
                <h3>2000 m²</h3>
                <h6>Üretim Alanı</h6>
              </StatCard>

              <StatCard variants={fadeUp}>
                <div className="icon-wrapper"><TrendingUp size={22} /></div>
                <h3>100 Bin</h3>
                <h6>Çift / Yıl</h6>
              </StatCard>

              <StatCard variants={fadeUp}>
                <div className="icon-wrapper"><Layers size={22} /></div>
                <h3>Phylon</h3>
                <h6>Teknoloji</h6>
              </StatCard>

              <StatCard variants={fadeUp}>
                <div className="icon-wrapper"><Users size={22} /></div>
                <h3>2. Nesil</h3>
                <h6>Yönetim</h6>
              </StatCard>
            </StatsGrid>
          </StatsContainer>
        </StatsWrapper>

        {/* CTA SECTION */}
        <CtaSection>
          <CtaContainer>
            <h2>Kaliteyi Keşfedin</h2>
            <CtaButton href="/modeller">
              Koleksiyonu İncele <ArrowRight size={18} />
            </CtaButton>
          </CtaContainer>
        </CtaSection>

        <Footer />
      </PageWrapper>
    </>
  );
};

export default BizKimiz;

// ============= STYLES ============= //

const PageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

/* HERO SECTION */
const HeroSection = styled.section`
  position: relative;
  height: 60vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(to bottom, ${COLORS.bg} 0%, #F0EBE5 100%);
`;

// 🔥 GÜNCELLENEN ALAN: LOGO BOYUTU BÜYÜTÜLDÜ
const HeroBackgroundLogo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
  opacity: 0.1;

  img {
    width: 95vw; /* Masaüstünde daha büyük (50vw'den 65vw'ye çıkarıldı) */
    height: auto;
    object-fit: contain;
  }

  /* MOBİL İÇİN ÖZEL AYARLAR */
  @media (max-width: 768px) {
    opacity: 0.15;
    img {
      width: 300vw; /* Mobilde çok daha büyük (70vw'den 85vw'ye çıkarıldı) */
    }
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 1.5rem;
`;

const HeroTag = styled.span`
  display: inline-block;
  color: ${COLORS.textLight};
  letter-spacing: 0.3em;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const HeroTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 4rem;
  color: ${COLORS.textMain};
  line-height: 1.1;
  margin-bottom: 1.2rem;

  .accent {
    color: ${COLORS.accent};
    font-style: italic;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.1rem;
  color: ${COLORS.textLight};
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;

/* STORY SECTION */
const StoryWrapper = styled.section`
  padding: 5rem 0;
  position: relative;
`;

const StoryContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
  }
`;

const TextColumn = styled(motion.div)``;

const SectionEyebrow = styled.span`
  color: ${COLORS.accent};
  font-weight: 700;
  letter-spacing: 0.15em;
  font-size: 0.8rem;
  display: block;
  margin-bottom: 0.5rem;
`;

const SectionTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 2.2rem;
  color: ${COLORS.textMain};
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const StoryParagraph = styled.p`
  color: ${COLORS.textLight};
  line-height: 1.7;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const SignatureBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;

  .line {
    width: 40px;
    height: 2px;
    background: ${COLORS.accent};
  }

  span {
    font-family: "Playfair Display", serif;
    font-style: italic;
    color: ${COLORS.textMain};
    font-size: 1.1rem;
  }
`;

const ImageColumn = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 15px 30px rgba(62, 44, 40, 0.1);
    object-fit: cover;
  }
`;

/* QUOTE SECTION */
const QuoteSection = styled.section`
  width: 100%;
  background: ${COLORS.textMain};
  padding: 3rem 1.5rem;
  margin: 3rem 0;
`;

const QuoteContainer = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
  }
`;

const QuoteIcon = styled.div`
  font-size: 4rem;
  color: ${COLORS.accent};
  font-family: serif;
  line-height: 1;
  opacity: 0.6;
`;

const QuoteContent = styled.div`
  flex: 1;
`;

const QuoteText = styled.p`
  font-family: "Playfair Display", serif;
  font-size: 1.3rem;
  line-height: 1.5;
  color: #fff;
  margin-bottom: 1rem;
`;

const QuoteAuthor = styled.div`
  font-size: 0.9rem;
  color: ${COLORS.accent};
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

/* STATS SECTION */
const StatsWrapper = styled.section`
  padding: 2rem 0 5rem;
`;

const StatsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const StatsHeader = styled.div`
  margin-bottom: 2.5rem;
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 1rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;

const StatCard = styled(motion.div)`
  background: ${COLORS.white};
  padding: 1.5rem 0.5rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid rgba(0,0,0,0.03);
  box-shadow: 0 4px 10px rgba(0,0,0,0.03);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .icon-wrapper {
    width: 45px;
    height: 45px;
    margin-bottom: 0.8rem;
    background: ${COLORS.bg};
    color: ${COLORS.textMain};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-size: 1.3rem;
    color: ${COLORS.textMain};
    margin-bottom: 0.2rem;
    font-weight: 800;
  }

  h6 {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${COLORS.textLight};
    font-weight: 600;
  }
`;

/* CTA SECTION */
const CtaSection = styled.section`
  padding: 4rem 1.5rem;
  display: flex;
  justify-content: center;
  background: ${COLORS.bg};
`;

const CtaContainer = styled.div`
  background: ${COLORS.white};
  border: 1px solid ${COLORS.accent};
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  h2 {
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    color: ${COLORS.textMain};
  }
`;

const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${COLORS.textMain};
  color: #fff;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.9rem;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    background: ${COLORS.accent};
    color: ${COLORS.textMain};
  }
`;