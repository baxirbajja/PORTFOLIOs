import { motion } from 'framer-motion';
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import styled from '@emotion/styled';

const HeroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  position: relative;
  background-color: ${props => props.theme.colors.background};
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const Greeting = styled.span`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: block;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: ${props => props.theme.colors.text};
  margin: 0.5rem 0;
  font-family: ${props => props.theme.fonts.heading};
`;

const Subtitle = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 1rem;
  cursor: pointer;
  transition: ${props => props.theme.transitions.default};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 87, 34, 0.3);
  }
`;

const SocialLinks = styled.div`
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    position: relative;
    left: auto;
    top: auto;
    transform: none;
    flex-direction: row;
    justify-content: center;
    margin-top: 2rem;
  }
`;

const SocialIcon = styled.a`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.5rem;
  transition: ${props => props.theme.transitions.default};

  &:hover {
    color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 768px) {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    margin-top: 2rem;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <ContentWrapper>
        <TextContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Greeting>Hello</Greeting>
            <Title>I'm BACHIR BAJJA </Title>
            <Subtitle>A full stack developer.</Subtitle>
            <Button onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                window.scrollTo({
                  top: contactSection.offsetTop,
                  behavior: 'smooth'
                });
              }
            }}>
              Contact Me
            </Button>
          </motion.div>
        </TextContent>

        <FloatingElements>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Add your 3D character or illustration here */}
          </motion.div>
        </FloatingElements>
      </ContentWrapper>

      <SocialLinks>
        <SocialIcon href="https://www.instagram.com/bachir_bajja/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="https://github.com/baxirbajja" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="https://web.facebook.com/mohamed.e.bachir.3" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/bachir-bajja-19b538249/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialIcon>
      </SocialLinks>
    </HeroContainer>
  );
};

export default Hero;