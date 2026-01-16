import React from "react";
import styled from "styled-components";
import { ArrowRight, Wind, Feather, RotateCcw, Activity } from "lucide-react";
import HeroShowcase from "./Heroshowcase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

// --- RENK PALETİ (Hero ile uyumlu) ---
const COLORS = {
  bg: "#faf8f4",
  textMain: "#3E2C28",
  textLight: "#8D746A",
  cardBg: "rgba(255, 255, 255, 0.6)",
  accent: "#D7B29E",
};

const PageRoot = styled.div`
  background-color: ${COLORS.bg};
  overflow-x: hidden;
`;

// --- YENİ BÖLÜM: MARQUEE (Kayan Yazı Şeridi) ---
const MarqueeSection = styled.div`
  padding: 2rem 0;
  background: #EAD5D1;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

const MarqueeTrack = styled(motion.div)`
  display: flex;
  gap: 4rem;
  font-size: 3rem;
  font-weight: 900;
  color: rgba(62, 44, 40, 0.1); /* Silik renk */
  text-transform: uppercase;
  user-select: none;
`;

// --- YENİ BÖLÜM: TEKNOLOJİ KARTLARI ---
const TechSection = styled.section`
  padding: 6rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;

  h2 {
    font-size: 3rem;
    color: ${COLORS.textMain};
    margin-bottom: 1rem;
    font-weight: 800;
  }
  p {
    color: ${COLORS.textLight};
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TechCard = styled(motion.div)`
  background: ${COLORS.cardBg};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.5);
  padding: 3rem 2rem;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    background: #fff;
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
  }
`;

const IconBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 20px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.textMain};
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${COLORS.textMain};
`;

const CardDesc = styled.p`
  font-size: 1rem;
  color: ${COLORS.textLight};
  line-height: 1.6;
`;

// --- YENİ BÖLÜM: BÜYÜK GÖRSEL & HİKAYE ---
const StorySection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  padding: 4rem 2rem 8rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const StoryImage = styled(motion.div)`
  width: 100%;
  height: 600px;
  border-radius: 40px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StoryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 3.5rem;
    line-height: 1.1;
    color: ${COLORS.textMain};
  }
  p {
    font-size: 1.1rem;
    color: ${COLORS.textLight};
    line-height: 1.8;
  }
`;

const StoryBtn = styled.button`
  padding: 1rem 2rem;
  background: ${COLORS.textMain};
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  width: fit-content;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export default function Home({ onNavigate }) {

  // Marquee için kayan yazı animasyonu
  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <PageRoot>
      <Navbar />

      {/* 1. HERO ALANI */}
      <HeroShowcase onNavigate={onNavigate} />

      {/* 2. KAYAN YAZI (MARQUEE) */}
      {/* 2. KAYAN YAZI (MARQUEE) */}
      <MarqueeSection>
        <MarqueeTrack variants={marqueeVariants} animate="animate">
          PERFORMANS • HAFİFLİK • NEFES ALAN • KONFOR • PERFORMANS • HAFİFLİK • NEFES ALAN • KONFOR •
        </MarqueeTrack>
      </MarqueeSection>

      {/* 3. TEKNOLOJİ & ÖZELLİKLER */}
      <TechSection>
        <SectionHeader>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            HAFİFLİĞİN MİMARİSİ
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Sadece bir ayakkabı değil, gün boyu süren bir konfor deneyimi.
            Bilim ve tasarımın birleştiği nokta.
          </motion.p>
        </SectionHeader>

        <GridContainer>
          {/* KART 1 */}
          <TechCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <IconBox><Feather size={28} /></IconBox>
            <CardTitle>Ultra Hafif</CardTitle>
            <CardDesc>
              Ayağınızda yokmuş gibi hissettiren özel polimer taban yapısı ile yerçekimine meydan okuyun.
            </CardDesc>
          </TechCard>

          {/* KART 2 */}
          <TechCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <IconBox><Wind size={28} /></IconBox>
            <CardTitle>Nefes Alan Doku</CardTitle>
            <CardDesc>
              Mikro gözenekli örgü teknolojisi, hava akışını maksimuma çıkararak terlemeyi önler.
            </CardDesc>
          </TechCard>

          {/* KART 3 */}
          <TechCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <IconBox><Activity size={28} /></IconBox>
            <CardTitle>Enerji Dönüşümü</CardTitle>
            <CardDesc>
              Attığınız her adımda enerjiyi absorbe edip size geri kazandıran yaylanma teknolojisi.
            </CardDesc>
          </TechCard>
        </GridContainer>
      </TechSection>

      {/* 4. HİKAYE / LIFESTYLE ALANI */}
      <StorySection>
        <StoryImage
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Buraya lifestyle bir fotoğraf koymalısın. Örn: Yürüyen bir kadın */}
          <img src="/images/lifestyle.webp" alt="Lifestyle" />
        </StoryImage>

        <StoryContent>
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            OFİSTEN SOKAĞA,<br />SINIRSIZ STİL.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Modern yaşamın temposuna ayak uydurmak hiç bu kadar şık olmamıştı.
            Nude tonların zarafeti ile her kombine uyum sağlayan Performance serisi,
            sabah toplantısından akşam yürüyüşüne kadar yanınızda.
          </motion.p>
          <StoryBtn>
            HİKAYEYİ KEŞFET <ArrowRight size={18} />
          </StoryBtn>
        </StoryContent>
      </StorySection>
      <Footer></Footer>
    </PageRoot>
  );
}