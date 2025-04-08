import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: ${props => props.theme.spacing.xl} 0;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xl};
  position: relative;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 2px solid ${props => props.theme.colors.primary};

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    margin: 0 auto;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const Title = styled(motion.h2)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2.5rem;
  margin-bottom: ${props => props.theme.spacing.md};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  span {
    color: ${props => props.theme.colors.primary};
  }
`;

const Description = styled(motion.p)`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: ${props => props.theme.spacing.lg};

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 ${props => props.theme.spacing.md};
  }
`;

const About = () => {
  return (
    <AboutSection>
      <ProfileImage
        src="/images/me.png"
        alt="Bachir BAJJA"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      />
      <ContentContainer>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About <span>Me</span>
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I am Bachir BAJJA, a web developer passionate about creating innovative and intuitive digital experiences. My expertise focuses on developing modern and high-performance web solutions, using the latest technologies and industry best practices. I strive to create applications that not only meet functional requirements but also deliver an exceptional user experience.
        </Description>
      </ContentContainer>
    </AboutSection>
  );
};

export default About;