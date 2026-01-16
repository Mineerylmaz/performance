// src/pages/Modeller.jsx
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, ArrowUpRight, Sparkles, X, Info } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ============= GLOBAL STYLES (KENAR BOŞLUĞU YOK) ============= //
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
    background: #F9F8F6;
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  }
`;

// ============= DATA: MODELLER + RENK VARYANTLARI ============= //

const MODELS = [
    {
        id: "perf-1-bagcikli",
        name: "Performance 1",
        headline: "Bağcıklı Seri",
        category: "daily",
        tag: "Modern & Sportif",
        description:
            "Günlük kullanım için ideal, bağcıklı yapısı ve estetik dikiş detaylarıyla modern şehir yaşamına uyum sağlayan konforlu model.",
        variants: [
            { id: "i1-siyah", label: "Siyah", color: "#111111", image: "/images/ip/i1.webp" },
            { id: "i2-gri", label: "Gri", color: "#9CA3AF", image: "/images/ip/i2.webp" },
            { id: "i3-koyugri", label: "Koyu Gri", color: "#4B5563", image: "/images/ip/i3.webp" },
            { id: "i4-bej", label: "Bej", color: "#E3DAC9", image: "/images/ip/i4.webp" },
            { id: "i5-siyah-beyaz", label: "Siyah (Beyaz Taban)", color: "#222222", image: "/images/ip/i5.webp" },
        ],
        features: [
            "Esnek bağcık yapısı",
            "Nefes alabilen iç astar",
            "Hafif taban teknolojisi",
            "Günlük kullanıma uygun ergonomi",
        ],
    },
    {
        id: "perf-2-babet",
        name: "Performance 2",
        headline: "Babet Serisi",
        category: "comfort",
        tag: "Zarif & Rahat",
        description:
            "Ayağı saran yapısı ve yumuşak tabanı ile gün boyu ayakta kalanlar için tasarlanmış zarif babet serisi.",
        variants: [
            { id: "b1-koyugri", label: "Koyu Gri", color: "#4B5563", image: "/images/babet/b1.webp" },
            { id: "b2-siyah", label: "Siyah", color: "#000000", image: "/images/babet/b2.webp" },
            { id: "b3-lacivert", label: "Lacivert", color: "#1E3A8A", image: "/images/babet/b3.webp" },
            { id: "b4-acikgri", label: "Açık Gri", color: "#D1D5DB", image: "/images/babet/b4.webp" },
            { id: "b5-siyah-taban", label: "Siyah (Siyah Taban)", color: "#1A1A1A", image: "/images/babet/b5.webp" },
        ],
        features: [
            "Kolay giyilebilir yapı",
            "Yumuşak topuk desteği",
            "Minimalist tasarım",
            "Kaymaz taban özelliği",
        ],
    },
    {
        id: "perf-3-capraz",
        name: "Performance 3",
        headline: "Çapraz Model",
        category: "daily",
        tag: "Özgün Tasarım",
        description:
            "Çapraz bant detaylarıyla hem şıklığı hem de ayağı kavrayan güvenli yapıyı bir arada sunan özel tasarım.",
        variants: [
            { id: "c1-bej", label: "Bej", color: "#E3DAC9", image: "/images/capraz/c1.webp" },
            { id: "c2-siyah", label: "Siyah", color: "#000000", image: "/images/capraz/c2.webp" },
            { id: "c3-acikgri", label: "Açık Gri", color: "#D1D5DB", image: "/images/capraz/c3.webp" },
            { id: "c4-siyah-taban", label: "Siyah (Siyah Taban)", color: "#1A1A1A", image: "/images/capraz/c4.webp" },
            { id: "c5-koyugri", label: "Koyu Gri", color: "#4B5563", image: "/images/capraz/c5.webp" },
            { id: "c6-lacivert", label: "Lacivert", color: "#1E3A8A", image: "/images/capraz/c6.webp" },
        ],
        features: [
            "Estetik çapraz bantlar",
            "Yüksek denge sağlayan taban",
            "Premium malzeme kalitesi",
            "Uzun ömürlü kullanım",
        ],
    },
    {
        id: "perf-4-terlik",
        name: "Performance 4",
        headline: "Terlik Serisi",
        category: "outdoor",
        tag: "Pratik & Hafif",
        description:
            "Yaz aylarının ve ev içi konforun vazgeçilmezi. Hafifliği ile ayağınızda yokmuş hissi yaratır.",
        variants: [
            { id: "t1-acikgri", label: "Açık Gri", color: "#D1D5DB", image: "/images/terlik/t1.webp" },
            { id: "t2-siyah", label: "Siyah", color: "#000000", image: "/images/terlik/t2.webp" },
            { id: "t3-bej", label: "Bej", color: "#E3DAC9", image: "/images/terlik/t3.webp" },
            { id: "t4-lacivert", label: "Lacivert", color: "#1E3A8A", image: "/images/terlik/t4.webp" },
            { id: "t5-siyah-taban", label: "Siyah (Siyah Taban)", color: "#1A1A1A", image: "/images/terlik/t5.webp" },
        ],
        features: [
            "Suya dayanıklı materyal",
            "Anatomik taban yapısı",
            "Ekstra hafiflik",
            "Kolay temizlenebilir yüzey",
        ],
    },
];

const CATEGORIES = [
    { id: "all", label: "Tümü" },
    { id: "daily", label: "Günlük" },
    { id: "comfort", label: "Konfor" },
    { id: "outdoor", label: "Yazlık/Terlik" },
];

// ============= COLORS ============= //
const COLORS = {
    bg: "#F9F8F6",
    text: "#1F2933",
    brown: "#6B544A",
    blush: "#F4E3E6",
    surface: "#FFFFFF",
    grey: "#9CA3AF",
    accent: "#D4A373",
};

// ============= ANIMATIONS ============= //
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Modeller = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [hoveredCard, setHoveredCard] = useState(null);

    const [selectedModel, setSelectedModel] = useState(null);
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

    const openModal = (model) => {
        setSelectedModel(model);
        setSelectedVariantIndex(0);
    };

    const closeModal = () => {
        setSelectedModel(null);
    };

    const filteredModels =
        activeCategory === "all"
            ? MODELS
            : MODELS.filter((m) => m.category === activeCategory);

    const activeVariant =
        selectedModel && selectedModel.variants[selectedVariantIndex];

    return (
        <>
            <GlobalStyles />
            <PageWrapper>
                <Navbar />

                {/* HEADER SECTION */}
                <HeaderSection initial="hidden" animate="visible" variants={fadeInUp}>
                    <Subtitle>KOLEKSİYON 2026</Subtitle>
                    <Title>
                        Adımlarınızı
                        <br />
                        <span style={{ fontStyle: "italic", color: COLORS.brown }}>
                            özgürleştirin
                        </span>
                    </Title>
                    <Description>
                        Mühendislik ve estetiğin dengelendiği Performance koleksiyonu. Her
                        model, şehir temposu ve günlük kullanım için farklı karakter ve renk
                        seçenekleri sunar.
                    </Description>
                </HeaderSection>

                {/* FILTER BAR */}
                <FilterContainer>
                    <FilterList>
                        {CATEGORIES.map((cat) => (
                            <FilterButton
                                key={cat.id}
                                $active={activeCategory === cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                whileTap={{ scale: 0.95 }}
                            >
                                {activeCategory === cat.id && <ActiveDot layoutId="activeDot" />}
                                {cat.label}
                            </FilterButton>
                        ))}
                    </FilterList>
                    <FilterIconWrapper>
                        <Filter size={20} color={COLORS.brown} />
                        <span>Filtrele</span>
                    </FilterIconWrapper>
                </FilterContainer>

                {/* MODEL GRID */}
                <GridContainer>
                    <AnimatePresence mode="popLayout">
                        {filteredModels.map((model) => {
                            const firstVariant = model.variants[0];
                            return (
                                <ProductCard
                                    key={model.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    onMouseEnter={() => setHoveredCard(model.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    onClick={() => openModal(model)}
                                >
                                    <ImageWrapper>
                                        <ProductImage
                                            src={firstVariant.image}
                                            alt={model.name}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                        />

                                        <OverlayTag>
                                            {model.category === "outdoor" && <Sparkles size={14} />}
                                            {model.headline}
                                        </OverlayTag>

                                        <HoverAction
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={
                                                hoveredCard === model.id
                                                    ? { opacity: 1, y: 0 }
                                                    : { opacity: 0, y: 20 }
                                            }
                                        >
                                            İncele <ArrowUpRight size={18} />
                                        </HoverAction>
                                    </ImageWrapper>

                                    <InfoWrapper>
                                        <ModelName>{model.name}</ModelName>
                                        <ModelDesc>
                                            {model.variants.length} Renk Seçeneği
                                        </ModelDesc>
                                    </InfoWrapper>
                                </ProductCard>
                            );
                        })}
                    </AnimatePresence>
                </GridContainer>

                {/* MODAL */}
                <AnimatePresence>
                    {selectedModel && activeVariant && (
                        <ModalOverlay
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                        >
                            <ModalContent
                                layout
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ModalLeft>
                                    <ModalImageWrapper>
                                        <img src={activeVariant.image} alt={selectedModel.name} />
                                    </ModalImageWrapper>
                                </ModalLeft>

                                <ModalRight>
                                    <ModalEyebrow>{selectedModel.headline}</ModalEyebrow>
                                    <ModalTitle>{selectedModel.name}</ModalTitle>
                                    <ModalDesc>{selectedModel.description}</ModalDesc>

                                    <SectionLabel>
                                        Seçilen Renk:{" "}
                                        <span
                                            style={{ color: COLORS.text, fontWeight: 600 }}
                                        >
                                            {activeVariant.label}
                                        </span>
                                    </SectionLabel>
                                    <ColorRow>
                                        {selectedModel.variants.map((variant, index) => (
                                            <ColorDot
                                                key={variant.id}
                                                style={{ backgroundColor: variant.color }}
                                                $active={index === selectedVariantIndex}
                                                onClick={() => setSelectedVariantIndex(index)}
                                                title={variant.label}
                                            />
                                        ))}
                                    </ColorRow>

                                    <SectionLabel>Özellikler</SectionLabel>
                                    <FeatureList>
                                        {selectedModel.features.map((feat) => (
                                            <li key={feat}>
                                                <Info size={14} style={{ marginRight: 6 }} /> {feat}
                                            </li>
                                        ))}
                                    </FeatureList>

                                    <CloseButton type="button" onClick={closeModal}>
                                        Kapat
                                    </CloseButton>
                                </ModalRight>

                                <IconClose type="button" onClick={closeModal}>
                                    <X size={18} />
                                </IconClose>
                            </ModalContent>
                        </ModalOverlay>
                    )}
                </AnimatePresence>

                <Footer />
            </PageWrapper>
        </>
    );
};

export default Modeller;

// ============= STYLES ============= //

const PageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${COLORS.bg};
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
`;

/* HEADER */
const HeaderSection = styled(motion.section)`
  text-align: center;
  padding: 8rem 1.5rem 4rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Subtitle = styled.span`
  display: block;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: ${COLORS.brown};
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 3.5rem;
  line-height: 1.1;
  color: ${COLORS.text};
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${COLORS.grey};
  line-height: 1.7;
  max-width: 500px;
  margin: 0 auto;
`;

/* FILTER */
const FilterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 3rem;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 1.5rem;
  }
`;

const FilterList = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const FilterButton = styled(motion.button)`
  background: none;
  border: none;
  font-size: 0.9rem;
  color: ${(p) => (p.$active ? COLORS.text : COLORS.grey)};
  font-weight: ${(p) => (p.$active ? 600 : 400)};
  cursor: pointer;
  position: relative;
  padding: 0.5rem 0;
  white-space: nowrap;
  transition: color 0.3s ease;

  &:hover {
    color: ${COLORS.text};
  }
`;

const ActiveDot = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background-color: ${COLORS.brown};
  border-radius: 50%;
`;

const FilterIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.85rem;
  color: ${COLORS.brown};
  font-weight: 500;

  @media (max-width: 768px) {
    align-self: flex-end;
  }
`;

/* GRID & CARDS */
const GridContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  background: #fff;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 380px;
  background-color: #f0efed;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
`;

const ProductImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const OverlayTag = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  padding: 0.4rem 0.8rem;
  border-radius: 100px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${COLORS.text};
  display: flex;
  align-items: center;
  gap: 0.3rem;
  z-index: 2;
`;

const HoverAction = styled(motion.div)`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  background: ${COLORS.text};
  color: #fff;
  padding: 0.8rem 1.2rem;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  z-index: 2;
`;

const InfoWrapper = styled.div`
  padding: 0.5rem 0.5rem 0;
`;

const ModelName = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.4rem;
  color: ${COLORS.text};
  margin-bottom: 0.3rem;
`;

const ModelDesc = styled.p`
  font-size: 0.9rem;
  color: ${COLORS.grey};
  font-weight: 500;
`;

/* MODAL */
const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 60;
  padding: 1.5rem;
`;

const ModalContent = styled(motion.div)`
  background: ${COLORS.surface};
  border-radius: 24px;
  max-width: 1000px;
  width: 100%;
  min-height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  position: relative;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    max-height: 90vh;
    overflow-y: auto;
  }
`;

const ModalLeft = styled.div`
  background: #f4f4f4;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    min-height: 300px;
  }
`;

const ModalImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 400px;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;

const ModalRight = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background: #fff;

  @media (max-width: 900px) {
    padding: 2rem;
  }
`;

const ModalEyebrow = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${COLORS.brown};
  font-weight: 700;
`;

const ModalTitle = styled.h2`
  font-size: 2.2rem;
  font-family: "Playfair Display", serif;
  margin-bottom: 0.5rem;
  color: ${COLORS.text};
`;

const ModalDesc = styled.p`
  font-size: 1rem;
  color: ${COLORS.grey};
  line-height: 1.6;
`;

const SectionLabel = styled.span`
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${COLORS.grey};
  margin-top: 1rem;
  display: block;
`;

const ColorRow = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`;

const ColorDot = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: ${(p) =>
        p.$active ? `2px solid ${COLORS.text}` : "1px solid rgba(0,0,0,0.1)"};
  box-shadow: ${(p) => (p.$active ? "0 0 0 2px #fff inset" : "none")};
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const FeatureList = styled.ul`
  margin: 0.5rem 0 1rem;
  padding: 0;
  list-style: none;
  font-size: 0.95rem;
  color: ${COLORS.text};

  li {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }
`;

const CloseButton = styled.button`
  margin-top: auto;
  align-self: flex-start;
  padding: 1rem 2rem;
  border-radius: 100px;
  border: none;
  background: ${COLORS.text};
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const IconClose = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.05);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
