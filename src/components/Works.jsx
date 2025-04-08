import React from 'react';
import styled from '@emotion/styled';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const WorksSection = styled.section`
  padding: ${props => props.theme.spacing.xl} 0;
  background: ${props => props.theme.colors.background};
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2.5rem;
  margin-bottom: ${props => props.theme.spacing.xl};
  text-align: center;
  
  span {
    color: ${props => props.theme.colors.primary};
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 70vh;
  margin: 0;

  @media (max-width: 768px) {
    height: 50vh;
    --swiper-pagination-bullet-horizontal-gap: 4px;
    --swiper-pagination-bullet-size: 10px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${props => props.theme.colors.primary};
    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .swiper-pagination-bullet {
    background: ${props => props.theme.colors.primary};
  }

  .swiper-pagination-bullet-active {
    background: ${props => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    .swiper-slide {
      width: 85%;
      margin-right: 15px;
    }
    
    .project-overlay {
      padding: 1rem;
    }
    
    .project-title {
      font-size: 1.2rem;
    }
    
    .project-description {
      font-size: 0.9rem;
    }
  }
`;

const ProjectSlide = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  
  &:hover {
    .project-overlay {
      opacity: 1;
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    opacity: 1;
    background: rgba(0, 0, 0, 0.8);
  }
`;

const ProjectInfo = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xl};
  color: white;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xl};
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ViewSiteButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 1.1rem;
  margin-top: auto;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ProjectTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2rem;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textSecondary};
  max-width: 600px;
  margin-bottom: ${props => props.theme.spacing.xl};

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: ${props => props.theme.spacing.lg};
  }
`;

const projects = [
  {
    title: 'CMCSpace',
    description: 'Système de réservation des espaces pédagogiques de CMC',
    image: '/images/espace_CMC.png',
    link: 'https://cmcspaces.vercel.app/'
  },
  {
    title: 'Hottely',
    description: "Système de réservation d'hôtel",
    image: '/images/Hottely.png',
    link: 'http://hotelly.42web.io'
  },
  {
    title: 'StudyTracker',
    description: "Système de calcul du temps d'étude",
    image: '/images/study_tracker.png',
    link: 'http://studytrack.infy.uk'
  },
  {
    title: 'Gestion de Restaurant',
    description: 'Système de gestion de restaurant',
    image: '/images/restaurent.png',
    link: '#'
  }
];

const Works = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { margin: "-20%" });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const swiperParams = {
    modules: [Autoplay, EffectFade, Navigation, Pagination],
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1.5,
        spaceBetween: 40,
      }
    }
  };

  return (
    <WorksSection
      ref={sectionRef}
      as={motion.section}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured <span>Works</span>
      </SectionTitle>
      <StyledSwiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <ProjectSlide
              as={motion.div}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5 }
                }
              }}
            >
              <div style={{ position: 'relative', height: '100%' }}>
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectOverlay className="project-overlay">
                  <ProjectInfo>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <ViewSiteButton
                        as="a"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Site
                      </ViewSiteButton>
                    </motion.div>
                  </ProjectInfo>
                </ProjectOverlay>
              </div>
            </ProjectSlide>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </WorksSection>
  );
};

export default Works;