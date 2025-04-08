import styled from '@emotion/styled';
import { motion, useInView } from 'framer-motion';
import React from 'react';
import { FaBrain, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinux, FaWindows, FaCode } from 'react-icons/fa';

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
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { margin: "-20%" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const skillCategories = {
    languages: [
      { icon: FaHtml5, name: 'HTML5' },
      { icon: FaCss3Alt, name: 'CSS3' },
      { icon: FaJs, name: 'JavaScript' },
      { icon: FaPhp, name: 'PHP' },
      { icon: FaPython, name: 'Python' },
      { icon: FaBrain, name: 'Learning Never Ends ....' },
    ],
    frameworks: [
      { icon: FaCode, name: 'Bootstrap' },
      { icon: FaCode, name: 'Tailwind CSS' },
      { icon: FaReact, name: 'React' },
      { icon: FaCode, name: 'Laravel' },
      { icon: FaNodeJs, name: 'Node.js' },
      { icon: FaCode, name: 'Express.js' },
      { icon: FaCode, name: 'Next.js' },
    ],
    tools: [
      { icon: FaCode, name: 'VS Code' },
      { icon: FaCode, name: 'Figma' },
      { icon: FaGitAlt, name: 'Git' },
      { icon: FaGithub, name: 'GitHub' },
      { icon: FaCode, name: 'MySQL' },
      { icon: FaCode, name: 'MongoDB' },
      { icon: FaLinux, name: 'Linux' },
      { icon: FaWindows, name: 'Windows' },
      { icon: FaCode, name: 'Google Cloud' },
    ]
  };



  return (
    <SkillsSection
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
        My <span>Skills</span>
      </SectionTitle>
      
      <SkillsContainer>
        <SkillCategory>
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <React.Fragment key={category}>
              <CategoryTitle
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </CategoryTitle>
              <TechnicalSkillsGrid>
                {skills.map((skill, index) => (
                  <SkillItem
                    key={skill.name}
                    variants={skillVariants}
                  >
                    <skill.icon />
                    <span>{skill.name}</span>
                  </SkillItem>
                ))}
              </TechnicalSkillsGrid>
            </React.Fragment>
          ))}
        </SkillCategory>

      
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;