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
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
