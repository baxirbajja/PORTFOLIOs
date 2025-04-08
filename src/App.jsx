import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from './styles/theme';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

const AppContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.body};
  position: relative;
  padding-bottom: 60px;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Hero />
        <About />
        <Skills />
        <Works />
        <Contact />
        <Footer>
          © {new Date().getFullYear()} Bachir BAJJA. All rights reserved.
        </Footer>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
