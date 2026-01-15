import React, { useState } from "react";
import styled from "styled-components";
import { ArrowRight, Wind, Feather, RotateCcw, Heart } from "lucide-react";
import HeroShowcase from "./Heroshowcase";
import { motion, useScroll, useTransform } from "motion/react";
// Eğer framer-motion kullanıyorsan:
// import { motion, useScroll, useTransform } from "framer-motion";

// En basit fallback'li img; istersen ayrı dosyaya alabilirsin
const ImageWithFallback = ({ src, alt, className }) => {
    return <img src={src} alt={alt} className={className} loading="lazy" />;
};

/* === ROOT === */

const PageRoot = styled.div`
  min-height: 100vh;
  background-color: #faf8f4;
`;

/* === HERO === */

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding-top: 5rem;
  padding-bottom: 3rem;
`;

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #f7f1eb 0%, #faf8f4 50%, #e5d2c0 100%);
`;

const HeroInner = styled.div`
  position: relative;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 0;
`;

const HeroGrid = styled.div`
  display: grid;
  gap: 2.5rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
    gap: 3.5rem;
  }
`;

const HeroLeft = styled(motion.div)`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

// Üstte chip + renk seçimi için wrapper (mobile-first)
const HeroTopBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

// Chip
const HeroTagline = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #7f7a78;
  margin-bottom: 1.6rem;
  font-style: italic;
`;


// Renk seçimi

const SectionLabel = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #aeaba8;
`;

const ColorRow = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const ColorButton = styled.button`
  position: relative;
  border: none;
  background: none;
  cursor: pointer;
`;

const ColorCircle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  background-color: ${(props) => props.$color || "#ccc"};
  box-shadow: ${(props) =>
        props.$active
            ? `0 0 0 4px ${props.$color}33, 0 0 0 8px #faf8f4`
            : "0 0 0 0 transparent"};
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  ${ColorButton}:hover & {
    transform: ${(props) => (props.$active ? "scale(1)" : "scale(1.08)")};
  }
`;

const ColorName = styled.span`
  position: absolute;
  left: 50%;
  bottom: -1.5rem;
  transform: translateX(-50%);
  font-size: 0.7rem;
  color: #aeaba8;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${ColorButton}:hover & {
    opacity: 1;
  }
`;

// Metin alanı

const HeroTextBlock = styled.div`
  max-width: 34rem;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.6rem, 4vw, 4.1rem);
  line-height: 1.05;
  margin-bottom: 1.25rem;
  color: #2a2a2a;
`;

const HeroHighlight = styled.span`
  font-style: italic;
  color: #b98c6a;
`;

const HeroSubtitle = styled.p`
  font-size: 1.02rem;
  line-height: 1.8;
  color: #aeaba8;
`;

// CTA: Artık "Modelleri Keşfet" yok, tasarım & konfor'a yönlendirelim


/* === HERO RIGHT (KARTLAR) === */

const HeroRightWrapper = styled.div`
  position: relative;
  height: 540px;

  @media (min-width: 1024px) {
    height: 680px;
  }
`;

const HeroCardBase = styled(motion.div)`
  position: absolute;
  border-radius: 1.75rem;
  overflow: hidden;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
`;

const HeroLifestyleCard = styled(HeroCardBase)`
  top: 0;
  right: 0;
  width: 85%;
  height: 68%;
`;

const HeroLifestyleOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(42, 42, 42, 0.4),
    rgba(42, 42, 42, 0.1),
    transparent
  );
`;

const HeroProductCard = styled(HeroCardBase)`
  bottom: 0;
  left: 0;
  width: 72%;
  height: 58%;
  background-color: #e5d2c0;
`;

const HeroBadge = styled(motion.div)`
  position: absolute;
  top: 52%;
  right: 2rem;
  transform: translateY(-50%);
  padding: 0.9rem 1.5rem;
  border-radius: 1.25rem;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(12px);
  background-color: rgba(247, 241, 235, 0.96);
`;

const HeroBadgeSmall = styled.p`
  font-size: 0.8rem;
  color: #aeaba8;
`;

const HeroBadgeBig = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2a2a2a;
`;

/* === GENEL SECTION WRAPPERS === */

const Section = styled.section`
  padding: 4.5rem 1.5rem;
  background-color: ${(props) => props.$bg || "transparent"};
`;

const SectionInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

/* === YENİ "KULLANIM ALANLARI" (Her An İçin Tasarlandı yerine) === */

const UsageHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const UsageTitle = styled.h2`
  font-size: clamp(2.1rem, 3vw, 2.7rem);
  margin-bottom: 0.6rem;
  color: #2a2a2a;
`;

const UsageSubtitle = styled.p`
  font-size: 1rem;
  color: #aeaba8;
`;

const UsageGrid = styled.div`
  display: grid;
  gap: 1.75rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const UsageCard = styled(motion.div)`
  padding: 1.5rem 1.6rem;
  border-radius: 1.5rem;
  background-color: #f7f1eb;
  border: 1px solid rgba(185, 140, 106, 0.18);
`;

const UsageTag = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #b98c6a;
  margin-bottom: 0.4rem;
`;

const UsageCardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
  color: #2a2a2a;
`;

const UsageCardText = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: #7f7a78;
`;

/* === KONFOR ALANI (daha profesyonel) === */

const ComfortLayout = styled.div`
  display: grid;
  gap: 2.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  }
`;

const ComfortIntro = styled(motion.div)`
  max-width: 32rem;
`;

const ComfortTitle = styled.h2`
  font-size: clamp(2.1rem, 3vw, 2.8rem);
  margin-bottom: 0.8rem;
  color: #2a2a2a;
`;

const ComfortIntroText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #7f7a78;
`;

const ComfortList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ComfortItem = styled(motion.div)`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.9rem 1rem;
  padding: 1.15rem 1.4rem;
  border-radius: 1.25rem;
  background-color: #faf4ec;
  border: 1px solid rgba(174, 171, 168, 0.3);
`;

const ComfortIconWrapper = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 999px;
  background-color: #e5d2c0;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
`;

const ComfortItemTitle = styled.h3`
  font-size: 1.02rem;
  color: #2a2a2a;
  align-self: center;
`;

const ComfortItemText = styled.p`
  grid-column: 1 / -1;
  font-size: 0.9rem;
  color: #7f7a78;
`;

/* === HİKAYE ALANI (artık resimsiz, text odaklı) === */

const StoryBlock = styled.div`
  max-width: 760px;
  margin: 0 auto;
`;

const StoryLabel = styled.div`
  display: inline-block;
  padding: 0.4rem 1.1rem;
  border-radius: 999px;
  font-size: 0.8rem;
  background-color: #e5d2c0;
  color: #2a2a2a;
  margin-bottom: 1.2rem;
`;

const StoryTitle = styled.h2`
  font-size: clamp(2.1rem, 3vw, 2.8rem);
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #2a2a2a;
`;

const StoryHighlight = styled.span`
  font-style: italic;
  color: #b98c6a;
`;

const StoryText = styled.p`
  font-size: 1rem;
  line-height: 1.9;
  color: #7f7a78;
  margin-bottom: 1.8rem;
`;

const StoryRow = styled.div`
  display: grid;
  gap: 1.2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const StoryPill = styled.div`
  padding: 0.8rem 1rem;
  border-radius: 999px;
  background-color: #f7f1eb;
  font-size: 0.9rem;
  color: #7f7a78;
`;

const StoryLinkButton = styled.button`
  margin-top: 1.6rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.75rem 1.7rem;
  border-radius: 999px;
  border: 1px solid #b98c6a;
  background: transparent;
  color: #b98c6a;
  font-size: 0.9rem;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.14);
  }
`;

/* === CONTACT CTA === */

const ContactInner = styled.div`
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: clamp(2.1rem, 3vw, 2.8rem);
  line-height: 1.1;
  margin-bottom: 1rem;
  color: #2a2a2a;
`;

const ContactText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(42, 42, 42, 0.85);
  margin-bottom: 1.8rem;
`;

const ContactButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.9rem 2.2rem;
  border-radius: 999px;
  border: none;
  background-color: #2a2a2a;
  color: #faf8f4;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 18px 45px rgba(0, 0, 0, 0.22);
  }
`;

/* === COMPONENT === */

export function HomePage({ onNavigate }) {
    const [selectedColor, setSelectedColor] = useState("nude");

    const { scrollY } = useScroll();

    // Parallax daha güçlü
    const heroY = useTransform(scrollY, [0, 600], [0, 220]);
    const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
    const productY = useTransform(scrollY, [0, 600], [0, -120]);

    // Her renk için farklı ürün görseli (URL'leri sen değiştir)
    const productImages = {
        black:
            "/images/performance-black.webp", // SİYAH ürün fotoğunu buraya koy
        grey: "/images/performance-grey.webp", // GRİ ürün foto
        nude: "/images/performance-nude.webp", // NUDE ürün foto
    };

    // Lifestyle sabit kalsın istersen, istersen bunu da renk bazlı yapabiliriz
    const lifestyleImage =
        "https://images.unsplash.com/photo-1765092262698-8b4817cfe39f?auto=format&fit=crop&w=1080&q=80";

    const usageBlocks = [
        {
            label: "GÜNLÜK",
            title: "Şehrin her adımında",
            text: "Gün boyu ayakta olduğunuz günlerde bile ayağınızı sıkmayan, kolayca giyilip çıkarılabilen modeller.",
        },
        {
            label: "YÜRÜYÜŞ",
            title: "Ritminize uyum sağlar",
            text: "Uzun yürüyüşlerde hafif taban ve esnek yapı sayesinde ek yük oluşturmadan size eşlik eder.",
        },
        {
            label: "OFİS",
            title: "Profesyonel ama rahat",
            text: "Ofis giyimine uyum sağlayan sade tasarım, akşam eve dönerken bile konfordan ödün vermez.",
        },
        {
            label: "SAĞLIK",
            title: "Tüm gün yoğun tempo",
            text: "Sağlık ve hizmet sektöründe gün boyu ayakta çalışan kadınlar için tasarlanmış, destekleyici yapı.",
        },
    ];

    const comfortFeatures = [
        {
            icon: Wind,
            title: "Nefes Alan Yapı",
            text: "File örgü üst yüzey sayesinde hava dolaşımı artar, uzun saatler sonunda bile ayakta terleme hissi azalır.",
        },
        {
            icon: Feather,
            title: "Ultra Hafif Taban",
            text: "Yürüyüş ve günlük kullanım için optimize edilmiş hafif taban, adım başına binen yükü hissedilir şekilde azaltır.",
        },
        {
            icon: RotateCcw,
            title: "Esnek Hareket",
            text: "Esnek orta taban ve bilek desteği, farklı zeminlerde hareket özgürlüğü ve stabilite sunar.",
        },
        {
            icon: Heart,
            title: "Yumuşak İç Astar",
            text: "Yumuşak ve nefes alan iç astar, sürtünme ve baskı noktalarını minimize edecek şekilde tasarlanır.",
        },
    ];

    return (
        <PageRoot>
            {/* HERO */}
            <HeroShowcase></HeroShowcase>

            {/* YENİ KULLANIM ALANLARI BÖLÜMÜ (eski “Her An İçin Tasarlandı” yerine) */}
            <Section>
                <SectionInner>
                    <UsageHeader>
                        <UsageTitle>Kimin İçin Tasarlandı?</UsageTitle>
                        <UsageSubtitle>
                            Farklı tempo ve ihtiyaçlara göre şekillenen kullanım alanları
                        </UsageSubtitle>
                    </UsageHeader>

                    <UsageGrid>
                        {usageBlocks.map((item) => (
                            <UsageCard
                                key={item.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <UsageTag>{item.label}</UsageTag>
                                <UsageCardTitle>{item.title}</UsageCardTitle>
                                <UsageCardText>{item.text}</UsageCardText>
                            </UsageCard>
                        ))}
                    </UsageGrid>
                </SectionInner>
            </Section>

            {/* KONFOR ALANI (daha profesyonel layout) */}
            <Section $bg="#F7F1EB">
                <SectionInner>
                    <ComfortLayout>
                        <ComfortIntro
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <ComfortTitle>Konfor Mühendisliği</ComfortTitle>
                            <ComfortIntroText>
                                Performance modelleri, estetikten önce ayak sağlığı ve konforu
                                odağa alır. Hafif taban, nefes alan dokular ve yumuşak iç
                                astar; günün sonunda yorgunluk hissini azaltmak için bir araya
                                gelir.
                            </ComfortIntroText>
                        </ComfortIntro>

                        <ComfortList>
                            {comfortFeatures.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <ComfortItem
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <ComfortIconWrapper>
                                            <Icon size={20} color="#2A2A2A" />
                                        </ComfortIconWrapper>
                                        <ComfortItemTitle>{feature.title}</ComfortItemTitle>
                                        <ComfortItemText>{feature.text}</ComfortItemText>
                                    </ComfortItem>
                                );
                            })}
                        </ComfortList>
                    </ComfortLayout>
                </SectionInner>
            </Section>

            {/* HİKAYE ALANI (resimsiz, text+pill yapısı) */}
            <Section>
                <SectionInner>
                    <StoryBlock>
                        <StoryLabel>Biz Kimiz?</StoryLabel>
                        <StoryTitle>
                            Her kadının temposuna{" "}
                            <StoryHighlight>uyum sağlayan</StoryHighlight> adımlar.
                        </StoryTitle>
                        <StoryText>
                            Performance, gün boyu ayakta olan, iş çıkışı arkadaşlarıyla
                            buluşan, hafta sonu şehirde yürüyüşe çıkan kadınların gerçek
                            ihtiyaçlarını dinleyerek ortaya çıktı. Amacımız; gardırobunuzda
                            “sadece şık” görünen değil, günün sonunda da teşekkür ettiğiniz
                            ayakkabılar üretmek.
                        </StoryText>

                        <StoryRow>
                            <StoryPill>• Gün boyu kullanım için tasarım</StoryPill>
                            <StoryPill>• Bağcıklı / bağcıksız seçenekler</StoryPill>
                            <StoryPill>• Siyah, gri ve nude tonlarda koleksiyon</StoryPill>
                        </StoryRow>

                        <StoryLinkButton onClick={() => onNavigate("biz-kimiz")}>
                            <span>Marka hikayesini oku</span>
                            <ArrowRight size={16} />
                        </StoryLinkButton>
                    </StoryBlock>
                </SectionInner>
            </Section>

            {/* CONTACT CTA */}
            <Section $bg="#D7C3AF">
                <ContactInner>
                    <ContactTitle>
                        Yeni koleksiyonları
                        <br />
                        ilk siz duyun
                    </ContactTitle>
                    <ContactText>
                        Tasarım süreçlerimiz, yeni modeller ve size özel lansmanlardan haberdar
                        olmak için bizimle iletişimde kalın.
                    </ContactText>
                    <ContactButton onClick={() => onNavigate("iletisim")}>
                        <span>İletişime Geçin</span>
                        <ArrowRight size={18} />
                    </ContactButton>
                </ContactInner>
            </Section>
        </PageRoot>
    );
}
