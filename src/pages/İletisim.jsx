// src/pages/Iletisim.jsx
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ============= RENK PALETİ ============= //
const COLORS = {
  bg: "#faf8f4",
  textMain: "#3E2C28",
  textLight: "#8D746A",
  cardBg: "rgba(255, 255, 255, 0.8)",
  accent: "#D7B29E",
  white: "#FFFFFF",
};

// 🔥 BODY & ROOT RESET – kenar boşluk yok
const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background: ${COLORS.bg};
    font-family: 'Inter', sans-serif;
    color: ${COLORS.textMain};
  }
`;

// ============= ANIMASYONLAR ============= //
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const Iletisim = () => {
  return (
    <>
      <GlobalStyles />
      <PageWrapper>
        <Navbar />

        {/* BAŞLIK ALANI */}
        <HeaderSection>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <HeaderTitle>Bize Ulaşın</HeaderTitle>
            <HeaderText>
              Sorularınız, iş birlikleri veya üretim talepleriniz için <br />
              doğrudan bizimle iletişime geçin.
            </HeaderText>
          </motion.div>
        </HeaderSection>

        {/* İÇERİK: İLETİŞİM KARTLARI & FORM */}
        <ContentWrapper>
          <ContentContainer>
            <GridContainer
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* SOL TARAF: BİLGİ KARTLARI */}
              <InfoColumn variants={fadeUp}>
                <InfoCard href="tel:+905354220577">
                  <IconBox>
                    <Phone size={24} />
                  </IconBox>
                  <InfoContent>
                    <Label>Telefon & WhatsApp</Label>
                    <Value>0535 422 0577</Value>
                    <SubText>Ömer Yıldız</SubText>
                  </InfoContent>
                </InfoCard>

                <InfoCard href="mailto:oy09401@gmail.com">
                  <IconBox>
                    <Mail size={24} />
                  </IconBox>
                  <InfoContent>
                    <Label>E-Posta</Label>
                    <Value>oy09401@gmail.com</Value>
                    <SubText>7/24 Bize yazabilirsiniz</SubText>
                  </InfoContent>
                </InfoCard>

                <InfoCard
                  href="http://googleusercontent.com/maps.google.com/7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBox>
                    <MapPin size={24} />
                  </IconBox>
                  <InfoContent>
                    <Label>Fabrika & Ofis</Label>
                    <Value>Yıldızlar Ayakkabı</Value>
                    <SubText>
                      Egemenlik Mah. 6143 Sok. No:8
                      <br />
                      Bornova, İZMİR
                    </SubText>
                  </InfoContent>
                </InfoCard>
              </InfoColumn>

              {/* SAĞ TARAF: FORM */}
              <FormColumn variants={fadeUp}>
                <FormBox>
                  <FormTitle>Mesaj Gönderin</FormTitle>
                  <FormElement>
                    <InputGroup>
                      <Input type="text" placeholder="Adınız Soyadınız" />
                    </InputGroup>
                    <InputGroup>
                      <Input type="email" placeholder="E-Posta Adresiniz" />
                    </InputGroup>
                    <InputGroup>
                      <TextArea placeholder="Mesajınız..." rows="5" />
                    </InputGroup>
                    <SubmitButton
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Gönder <Send size={18} />
                    </SubmitButton>
                  </FormElement>
                </FormBox>
              </FormColumn>
            </GridContainer>
          </ContentContainer>
        </ContentWrapper>

        {/* HARİTA BÖLÜMÜ */}
        <MapSection>
          <iframe
            title="Yıldızlar Ayakkabı Konum"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.459319071144!2d27.232473275725535!3d38.43085827182741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b9633b7e4801fb%3A0xf2c9c7fe6e46e8d5!2sEgemenlik%2C%206143.%20Sk.%20No%3A8%2C%2035070%20Bornova%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1768579468127!5m2!1str!2str"
          ></iframe>
          <MapOverlay />
        </MapSection>

        <Footer />
      </PageWrapper>
    </>
  );
};

export default Iletisim;

// ============= STYLES ============= //

const PageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${COLORS.bg};
`;

/* HEADER */
const HeaderSection = styled.section`
  padding: 8rem 1.5rem 5rem;
  text-align: center;
  background: ${COLORS.textMain};
  color: ${COLORS.bg};
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  box-shadow: 0 10px 30px rgba(62, 44, 40, 0.15);
`;

const HeaderTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: ${COLORS.accent};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeaderText = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
  line-height: 1.6;
  font-weight: 300;
  color: ${COLORS.bg};
`;

/* CONTENT WRAPPER */
const ContentWrapper = styled.section`
  padding: 4rem 1.5rem;
  flex: 1;
  margin-top: -3rem;
`;

const ContentContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1.2fr;
    align-items: start;
  }
`;

/* SOL KOLON */
const InfoColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: ${COLORS.cardBg};
  padding: 1.5rem;
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 20px rgba(62, 44, 40, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(62, 44, 40, 0.1);
    border-color: ${COLORS.accent};

    div:first-child {
      background: ${COLORS.textMain};
      color: ${COLORS.white};
    }
  }
`;

const IconBox = styled.div`
  width: 54px;
  height: 54px;
  background: ${COLORS.accent};
  color: ${COLORS.textMain};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${COLORS.textLight};
  font-weight: 700;
  margin-bottom: 0.3rem;
`;

const Value = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${COLORS.textMain};
  font-family: "Playfair Display", serif;
`;

const SubText = styled.span`
  font-size: 0.85rem;
  color: ${COLORS.textLight};
  margin-top: 0.2rem;
  opacity: 0.8;
`;

/* SAĞ KOLON */
const FormColumn = styled(motion.div)``;

const FormBox = styled.div`
  background: ${COLORS.white};
  padding: 2.5rem;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(62, 44, 40, 0.08);
  border: 1px solid rgba(62, 44, 40, 0.03);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormTitle = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  color: ${COLORS.textMain};
  margin-bottom: 1.5rem;
`;

const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const InputGroup = styled.div``;

const Input = styled.input`
  width: 100%;
  padding: 1.1rem;
  background: ${COLORS.bg};
  border: 1px solid rgba(141, 116, 106, 0.2);
  border-radius: 12px;
  font-size: 1rem;
  color: ${COLORS.textMain};
  outline: none;
  transition: 0.3s;

  &:focus {
    background: #fff;
    border-color: ${COLORS.accent};
    box-shadow: 0 0 0 4px rgba(215, 178, 158, 0.2);
  }

  &::placeholder {
    color: ${COLORS.textLight};
    opacity: 0.6;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1.1rem;
  background: ${COLORS.bg};
  border: 1px solid rgba(141, 116, 106, 0.2);
  border-radius: 12px;
  font-size: 1rem;
  color: ${COLORS.textMain};
  outline: none;
  transition: 0.3s;
  resize: vertical;
  font-family: inherit;

  &:focus {
    background: #fff;
    border-color: ${COLORS.accent};
    box-shadow: 0 0 0 4px rgba(215, 178, 158, 0.2);
  }

  &::placeholder {
    color: ${COLORS.textLight};
    opacity: 0.6;
  }
`;

const SubmitButton = styled(motion.button)`
  background: ${COLORS.textMain};
  color: #fff;
  border: none;
  padding: 1.1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 0.5rem;
  transition: background 0.3s;

  &:hover {
    background: #2a1d1a;
  }
`;

/* HARİTA */
const MapSection = styled.div`
  width: 100%;
  height: 450px;
  position: relative;
  filter: sepia(0.2) grayscale(0.1);
  transition: filter 0.5s;

  &:hover {
    filter: sepia(0) grayscale(0);
  }
`;

const MapOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(to bottom, ${COLORS.bg}, transparent);
  pointer-events: none;
`;
