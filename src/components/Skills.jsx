import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinux, FaWindows, FaCode } from 'react-icons/fa';

const SkillsSection = styled.section`
  padding: ${props => props.theme.spacing.xl} 0;
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

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
`;

const SkillCategory = styled.div`
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const CategoryTitle = styled(motion.h3)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.8rem;
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.primary};
`;

const TechnicalSkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.xl};

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    gap: ${props => props.theme.spacing.md};
  }
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.spacing.md};
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${props => props.theme.borderRadius.md};
  transition: ${props => props.theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 87, 34, 0.1);
  }

  svg {
    font-size: 2.5rem;
    margin-bottom: ${props => props.theme.spacing.sm};
    color: ${props => props.theme.colors.primary};

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  span {
    text-align: center;
    font-size: 0.9rem;
    color: ${props => props.theme.colors.textSecondary};

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 768px) {
    padding: ${props => props.theme.spacing.sm};
  }
`;

const SoftSkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${props => props.theme.spacing.md};
  list-style: none;
  padding: 0;
`;

const SoftSkillItem = styled(motion.li)`
  padding: ${props => props.theme.spacing.md};
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${props => props.theme.borderRadius.md};
  transition: ${props => props.theme.transitions.default};
  
  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 87, 34, 0.1);
  }
`;

const Skills = () => {
  const technicalSkills = [
    { icon: FaHtml5, name: 'HTML5' },
    { icon: FaCss3Alt, name: 'CSS3' },
    { icon: FaJs, name: 'JavaScript' },
    { icon: FaPhp, name: 'PHP' },
    { icon: FaPython, name: 'Python' },
    { icon: FaCode, name: 'Bootstrap' },
    { icon: FaCode, name: 'Tailwind CSS' },
    { icon: FaReact, name: 'React' },
    { icon: FaCode, name: 'Laravel' },
    { icon: FaNodeJs, name: 'Node.js' },
    { icon: FaCode, name: 'Express.js' },
    { icon: FaCode, name: 'Next.js' },
    { icon: FaCode, name: 'VS Code' },
    { icon: FaCode, name: 'Figma' },
    { icon: FaGitAlt, name: 'Git' },
    { icon: FaGithub, name: 'GitHub' },
    { icon: FaCode, name: 'MySQL' },
    { icon: FaCode, name: 'MongoDB' },
    { icon: FaLinux, name: 'Linux' },
    { icon: FaWindows, name: 'Windows' },
    { icon: FaCode, name: 'Google Cloud' }
  ];



  return (
    <SkillsSection>
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span>Skills</span>
      </SectionTitle>
      
      <SkillsContainer>
        <SkillCategory>
          <CategoryTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technical Skills
          </CategoryTitle>
          <TechnicalSkillsGrid>
            {technicalSkills.map((skill, index) => (
              <SkillItem
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <skill.icon />
                <span>{skill.name}</span>
              </SkillItem>
            ))}
          </TechnicalSkillsGrid>
        </SkillCategory>

      
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;