// src/pages/Tasarim.jsx
import React, { useState, useRef, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  Gauge,
  Wind,
  Move3D,
  Activity,
  Target,
  ShieldCheck,
  Search as SearchIcon,
} from "lucide-react";

import knitTexture from "../assets/performance-knit.webp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ============= PALETTE ============= //
const COLORS = {
  blush: "#F4E3E6", // pudra
  background: "#F7EEF0",
  surface: "#FFFFFF",
  grey: "#C6C7CB",
  greySoft: "#E5E5E9",
  brown: "#6B544A",
  text: "#1F2933",
  textMuted: "#6B7280",
  navy: "#223147",
};

// 🔥 TÜM SAYFA İÇİN GLOBAL RESET (KENAR BOŞLUĞU YOK)
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background: ${COLORS.background};
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  }
`;

// ============= ANIMATIONS ============= //
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0 },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

// ============= COMPONENT ============= //

const Tasarim = () => {
  const [zoomKnit, setZoomKnit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleKnitClick = () => {
    setZoomKnit((prev) => !prev);
  };

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const smallCardY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const bigCardY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <>
      <GlobalStyles />
      <PageWrapper>
        <Navbar />

        {/* HERO */}
        <HeroSection ref={heroRef}>
          <HeroInner>
            {/* SOL: METİN */}
            <HeroText
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            >
              <HeroEyebrow>PERFORMANCE SERİSİ</HeroEyebrow>
              <HeroTitle>
                Tasarım ile
                <br />
                Buluşan Konfor
              </HeroTitle>
              <HeroSubtitle>
                Hafiflik, nefes alabilirlik ve ergonomik uyumun birleştiği yeni
                nesil kadın ayakkabısı. Gün boyu kullanım için tasarlandı.
              </HeroSubtitle>
            </HeroText>

            {/* SAĞ: KARTLAR (PARALLAX) */}
            <HeroCardsArea>
              <HeroCardLarge
                style={{ y: bigCardY }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
              >
                <HeroCardImage
                  src="/images/tasarimhero.webp"
                  alt="Günlük kullanım için esnek bilek tasarımı"
                />
                <HeroCardFooter>
                  <HeroChip>GÜNLÜK ŞEHİR KULLANIMI</HeroChip>
                  <HeroCardText>Bileği sarmalayan yumuşak yapı.</HeroCardText>
                </HeroCardFooter>
              </HeroCardLarge>

              <HeroCardSmall
                style={{ y: smallCardY }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
              >
                <HeroCardImage src="/images/ip/i3.webp" alt="Esnek üst yüzey" />
                <HeroCardFooter>
                  <HeroChip>ESNEK ÜST YÜZEY</HeroChip>
                  <HeroCardText>
                    Adım yönüne göre açılı esneme ile doğal yürüyüş hissi.
                  </HeroCardText>
                </HeroCardFooter>
              </HeroCardSmall>
            </HeroCardsArea>
          </HeroInner>
        </HeroSection>

        {/* METRICS */}
        <MetricsSection>
          <MetricsGrid>
            {/* Kart 1 */}
            <MetricCard
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <MetricLabelRow>
                <MetricTitle>Ağırlık</MetricTitle>
                <MetricIcon>
                  <Gauge />
                </MetricIcon>
              </MetricLabelRow>
              <MetricValueRow>
                <MetricValue>180</MetricValue>
                <MetricUnit>gram</MetricUnit>
              </MetricValueRow>
              <MetricBarTrack>
                <MetricBarFill
                  initial={{ width: "0%" }}
                  whileInView={{ width: "55%" }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                />
              </MetricBarTrack>
            </MetricCard>

            {/* Kart 2 */}
            <MetricCard
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <MetricLabelRow>
                <MetricTitle>Nefes Alabilirlik</MetricTitle>
                <MetricIcon>
                  <Wind />
                </MetricIcon>
              </MetricLabelRow>
              <MetricValueRow>
                <MetricValue>98</MetricValue>
                <MetricUnit>%</MetricUnit>
              </MetricValueRow>
              <MetricBarTrack>
                <MetricBarFill
                  initial={{ width: "0%" }}
                  whileInView={{ width: "90%" }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                />
              </MetricBarTrack>
            </MetricCard>

            {/* Kart 3 */}
            <MetricCard
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <MetricLabelRow>
                <MetricTitle>Esneklik</MetricTitle>
                <MetricIcon>
                  <Move3D />
                </MetricIcon>
              </MetricLabelRow>
              <MetricValueRow>
                <MetricValue>Yüksek</MetricValue>
                <MetricUnit>Endeks</MetricUnit>
              </MetricValueRow>
              <MetricBarTrack>
                <MetricBarFill
                  initial={{ width: "0%" }}
                  whileInView={{ width: "75%" }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                />
              </MetricBarTrack>
            </MetricCard>
          </MetricsGrid>
        </MetricsSection>

        {/* TABAN TEKNOLOJİSİ */}
        <Section>
          <SoleTechGrid>
            <SoleImageCard
              variants={zoomIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img src="/images/performance-sole.webp" alt="Taban Teknolojisi" />
              <footer>FIG. 2.3.1 — GRIP-X PATTERN</footer>
            </SoleImageCard>

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <SectionEyebrow>Taban Teknolojisi</SectionEyebrow>
              <SectionTitle>Her Adımda Bilinçli Destek</SectionTitle>
              <SectionLead>
                Maksimum enerji geri dönüşümü, uzun süreli konfor ve zemin
                hakimiyeti. Şehir temposuna özel geliştirilen taban yapısı,
                bilimin ve sporun kesiştiği noktada tasarlandı.
              </SectionLead>

              <BulletList>
                <BulletItem>
                  <BulletIcon>
                    <Activity />
                  </BulletIcon>
                  <BulletContent>
                    <BulletTitle>Enerji Geri Dönüşümü</BulletTitle>
                    <BulletText>
                      Yorgunluğu azaltan yastıklama ile her adımı daha uzun süre
                      konforlu tutar.
                    </BulletText>
                  </BulletContent>
                </BulletItem>

                <BulletItem>
                  <BulletIcon>
                    <Target />
                  </BulletIcon>
                  <BulletContent>
                    <BulletTitle>Üstün Zemin Tutuşu</BulletTitle>
                    <BulletText>
                      Islak ve kuru zeminlerde kaymayı önleyen mikro oluk
                      yapısı.
                    </BulletText>
                  </BulletContent>
                </BulletItem>

                <BulletItem>
                  <BulletIcon>
                    <ShieldCheck />
                  </BulletIcon>
                  <BulletContent>
                    <BulletTitle>Darbe Emici Yastıklama</BulletTitle>
                    <BulletText>
                      Eklem sağlığını koruyan, akıllı köpük teknolojisi ile
                      geliştirilen ara taban.
                    </BulletText>
                  </BulletContent>
                </BulletItem>
              </BulletList>
            </motion.div>
          </SoleTechGrid>
        </Section>

        {/* MİKRO GÖZENEKLİ ÖRGÜ */}
        <Section>
          <KnitGrid>
            <KnitCircle
              variants={zoomIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={handleKnitClick}
              $bg={knitTexture}
              $zoomed={zoomKnit}
            >
              <KnitZoomDot>
                <SearchIcon />
              </KnitZoomDot>
            </KnitCircle>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <SectionTitle>Mikro Gözenekli Örgü</SectionTitle>
              <SectionLead>
                Ayağınızın en çok ısınan bölgelerine özel tasarlanmış
                havalandırma kanalları. Isı dışarı, ferahlık içeri.
              </SectionLead>

              <SmallGrid>
                <SmallCard>
                  <span>Hava Akışı</span>
                  <span>360° çevresel havalandırma</span>
                </SmallCard>
                <SmallCard>
                  <span>Lif Kalınlığı</span>
                  <span>0.4&nbsp;mm mikro lif örgü</span>
                </SmallCard>
              </SmallGrid>
            </motion.div>
          </KnitGrid>
        </Section>

        {/* ERGONOMİK UYUM */}
        <Section>
          <ErgonomicsHeader
            as={motion.div}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ErgonomicsTitle>Ergonomik Uyum</ErgonomicsTitle>
            <ErgonomicsText>
              Kadın ayak anatomisine özel tasarlanan kalıp; topuktan parmak
              ucuna kadar doğal hareketinizi destekler.
            </ErgonomicsText>
          </ErgonomicsHeader>

          <CardsRow>
            <FeatureCard
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <FeatureImage>
                <img
                  src="/images/performance-anatomik.webp"
                  alt="Anatomik Destek"
                />
              </FeatureImage>
              <FeatureBody>
                <FeatureTag>Destek</FeatureTag>
                <FeatureTitle>Anatomik Destek</FeatureTitle>
                <FeatureText>
                  Ayak kemeri bölgesine özel destek ile gün boyu kararlılık ve
                  konfor sağlar.
                </FeatureText>
              </FeatureBody>
            </FeatureCard>

            <FeatureCard
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <FeatureImage>
                <img src="/images/performance-bilek.webp" alt="Yumuşak Bilek" />
              </FeatureImage>
              <FeatureBody>
                <FeatureTag>Konfor</FeatureTag>
                <FeatureTitle>Yumuşak Bilek</FeatureTitle>
                <FeatureText>
                  Sertleşmeyen yumuşak bilek yapısı, her adımda rahatsız
                  etmeyen dinamik uyum sunar.
                </FeatureText>
              </FeatureBody>
            </FeatureCard>

            <FeatureCard
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <FeatureImage>
                <img src="/images/performance-esnek.webp" alt="Esnek Yapı" />
              </FeatureImage>
              <FeatureBody>
                <FeatureTag>Hareket</FeatureTag>
                <FeatureTitle>Esnek Yapı</FeatureTitle>
                <FeatureText>
                  Adım yönüne göre açılı esneyen üst yüzey, doğal yürüyüş
                  formunuzu destekler.
                </FeatureText>
              </FeatureBody>
            </FeatureCard>
          </CardsRow>
        </Section>
        <Footer></Footer>
      </PageWrapper>
    </>
  );
};

export default Tasarim;

// ============= STYLES (AŞAĞI) ============= //

const PageWrapper = styled.div`
  background: ${COLORS.background};
  color: ${COLORS.text};
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

/* HERO */

const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 82vh;
  padding: 7rem 1.5rem 4.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: radial-gradient(
      circle at left top,
      #fdf7f3 0%,
      rgba(253, 247, 243, 0.9) 25%,
      transparent 55%
    ),
    linear-gradient(135deg, #f7eee9 0%, #f0dfd2 45%, #e4c8af 100%);

  &::before {
    content: "";
    position: absolute;
    inset: -30%;
    background-image: url(${knitTexture});
    background-size: 260%;
    background-position: center;
    opacity: 0.18;
    mix-blend-mode: soft-light;
    pointer-events: none;
  }

  @media (min-width: 1024px) {
    min-height: 90vh;
    padding: 8rem 3rem 5.5rem;
  }

  @media (max-width: 768px) {
    padding-top: 6.5rem;
  }
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1100px;
  width: 100%;
  display: grid;
  gap: 2.8rem;
  align-items: center;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1.15fr);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2.2rem;
  }
`;

const HeroText = styled(motion.div)`
  max-width: 500px;

  @media (max-width: 900px) {
    max-width: none;
  }
`;

const HeroEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.8rem;
  border-radius: 999px;
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${COLORS.brown};
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(186, 152, 132, 0.45);
  margin-bottom: 0.9rem;
`;

const HeroTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-weight: 600;
  font-size: 3.1rem;
  line-height: 1.1;
  margin-bottom: 1rem;
  letter-spacing: 0.04em;
  color: #2c3440;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 0.98rem;
  line-height: 1.8;
  color: ${COLORS.textMuted};
`;

const HeroCardsArea = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 1024px) {
    transform: translateX(-2rem);
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transform: none;
  }
`;

const HeroCardBase = styled(motion.div)`
  background: ${COLORS.surface};
  border-radius: 2rem;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.25);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.9);
`;

const HeroCardLarge = styled(HeroCardBase)`
  width: 320px;
  max-width: 100%;
  transform-origin: center;

  @media (min-width: 1280px) {
    width: 340px;
  }

  @media (max-width: 900px) {
    width: 280px;
  }
`;

const HeroCardSmall = styled(HeroCardBase)`
  width: 260px;
  max-width: 80%;
  position: absolute;
  right: -6%;
  bottom: -22%;
  z-index: 3;

  @media (min-width: 1280px) {
    right: -4%;
    bottom: -24%;
  }

  @media (max-width: 900px) {
    position: relative;
    right: auto;
    bottom: auto;
    margin-top: -3.6rem;
    margin-left: auto;
    margin-right: 0.7rem;
    align-self: flex-end;
    width: 260px;
    max-width: 88%;
  }

  @media (max-width: 600px) {
    width: 240px;
    max-width: 92%;
    margin-top: -3.2rem;
    margin-right: 0.5rem;
  }
`;

const HeroCardImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;

  @media (min-width: 1024px) {
    height: 240px;
  }
`;

const HeroCardFooter = styled.div`
  padding: 0.9rem 1rem 1.1rem;
`;

const HeroChip = styled.span`
  display: inline-flex;
  padding: 0.18rem 0.7rem;
  border-radius: 999px;
  background: ${COLORS.blush};
  color: ${COLORS.brown};
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.45rem;
`;

const HeroCardText = styled.p`
  font-size: 0.8rem;
  color: ${COLORS.textMuted};
`;

/* METRICS */

const MetricsSection = styled.section`
  max-width: 1100px;
  margin: -3.5rem auto 0;
  padding: 0 1.5rem 3rem;
  position: relative;
  z-index: 2;

  @media (min-width: 1024px) {
    margin-top: -4rem;
    padding-bottom: 4rem;
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const MetricCard = styled(motion.div)`
  background: ${COLORS.surface};
  border-radius: 1.25rem;
  padding: 1.4rem 1.6rem;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.06);
  border: 1px solid ${COLORS.greySoft};
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: auto 0 0;
    height: 3px;
    background: linear-gradient(90deg, ${COLORS.brown}, ${COLORS.grey});
  }
`;

const MetricLabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.35rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: ${COLORS.textMuted};
`;

const MetricTitle = styled.span``;

const MetricIcon = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 999px;
  border: 1px solid ${COLORS.grey};
  background: ${COLORS.blush};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 14px;
    height: 14px;
    color: ${COLORS.brown};
  }
`;

const MetricValueRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
  margin-bottom: 0.7rem;
`;

const MetricValue = styled.span`
  font-size: 1.7rem;
  font-weight: 600;
  color: ${COLORS.text};
`;

const MetricUnit = styled.span`
  font-size: 0.8rem;
  color: ${COLORS.textMuted};
`;

const MetricBarTrack = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 999px;
  background: ${COLORS.greySoft};
  overflow: hidden;
`;

const MetricBarFill = styled(motion.div)`
  height: 100%;
  background: ${COLORS.brown};
`;

/* GENEL SECTION */

const Section = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;

  @media (min-width: 1024px) {
    padding-bottom: 5rem;
  }
`;

/* TABAN TEKNOLOJİSİ */

const SoleTechGrid = styled.div`
  display: grid;
  gap: 2rem;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 1.3fr);
  }
`;

const SoleImageCard = styled(motion.div)`
  background: ${COLORS.blush};
  border-radius: 1.75rem;
  padding: 1.3rem 1.5rem 1rem;
  box-shadow: 0 24px 60px rgba(107, 84, 74, 0.22);

  img {
    width: 100%;
    border-radius: 1.2rem;
    object-fit: cover;
    transform: scale(1.08);
    transform-origin: center;
  }

  footer {
    margin-top: 0.6rem;
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${COLORS.textMuted};
  }
`;

const SectionEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${COLORS.brown};
  background: ${COLORS.blush};
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 0.6rem;
  letter-spacing: 0.03em;

  @media (min-width: 768px) {
    font-size: 1.9rem;
  }
`;

const SectionLead = styled.p`
  font-size: 0.95rem;
  color: ${COLORS.textMuted};
  max-width: 520px;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const BulletList = styled.ul`
  display: grid;
  gap: 1rem;
`;

const BulletItem = styled.li`
  display: flex;
  gap: 0.9rem;
`;

const BulletIcon = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 999px;
  background: ${COLORS.brown};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f9fafb;
  flex-shrink: 0;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const BulletContent = styled.div``;

const BulletTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.1rem;
`;

const BulletText = styled.p`
  font-size: 0.82rem;
  color: ${COLORS.textMuted};
`;

/* MİKRO GÖZENEKLİ ÖRGÜ */

const KnitGrid = styled.div`
  display: grid;
  gap: 2.5rem;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.1fr);
  }
`;

const KnitCircle = styled(motion.div)`
  width: 260px;
  height: 260px;
  border-radius: 999px;
  margin: 0 auto;

  background-image: url(${(p) => p.$bg});
  background-size: ${(p) => (p.$zoomed ? "250%" : "120%")};
  background-position: center;
  transition: background-size 0.5s cubic-bezier(0.25, 1, 0.5, 1);

  box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.15),
    0 22px 50px rgba(107, 84, 74, 0.25);
  position: relative;
  cursor: zoom-in;
  border: 4px solid #fff;

  @media (min-width: 768px) {
    width: 320px;
    height: 320px;
  }
`;

const KnitZoomDot = styled.div`
  position: absolute;
  inset: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  pointer-events: none;

  svg {
    width: 24px;
    height: 24px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }
`;

const SmallGrid = styled.div`
  display: grid;
  gap: 0.75rem;
  margin-top: 1.1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const SmallCard = styled.div`
  background: ${COLORS.surface};
  border-radius: 1rem;
  padding: 0.9rem 1rem;
  border: 1px solid ${COLORS.greySoft};
  font-size: 0.8rem;

  span {
    display: block;
  }

  span:first-child {
    color: ${COLORS.textMuted};
    margin-bottom: 0.15rem;
  }

  span:last-child {
    font-weight: 600;
    color: ${COLORS.text};
  }
`;

/* ERGONOMİK UYUM */

const ErgonomicsHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const ErgonomicsTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.4rem;
  font-family: "Playfair Display", "Times New Roman", serif;
`;

const ErgonomicsText = styled.p`
  font-size: 0.9rem;
  color: ${COLORS.textMuted};
  max-width: 540px;
  margin: 0 auto;
  line-height: 1.7;
`;

const CardsRow = styled.div`
  display: grid;
  gap: 1.3rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const FeatureCard = styled(motion.div)`
  background: ${COLORS.surface};
  border-radius: 1.4rem;
  border: 1px solid ${COLORS.greySoft};
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const FeatureImage = styled.div`
  background: ${COLORS.blush};
  padding: 1.2rem 1.2rem 1rem;

  img {
    border-radius: 0.9rem;
    width: 100%;
    height: 320px;
    object-fit: contain;
  }

  @media (min-width: 768px) {
    img {
      height: 360px;
    }
  }

  @media (min-width: 1200px) {
    img {
      height: 400px;
    }
  }
`;

const FeatureBody = styled.div`
  padding: 0.9rem 1.1rem 1.1rem;
`;

const FeatureTag = styled.span`
  display: inline-flex;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: ${COLORS.blush};
  font-size: 0.7rem;
  color: ${COLORS.brown};
  margin-bottom: 0.7rem;
`;

const FeatureTitle = styled.h4`
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
`;

const FeatureText = styled.p`
  font-size: 0.82rem;
  color: ${COLORS.textMuted};
`;
