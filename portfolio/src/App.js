import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import { BrowserRouter as Router } from 'react-router-dom';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
background: rgb(27,32,28);
background: linear-gradient(180deg, rgba(27,32,28,1) 20%, rgba(60,108,77,1) 90%, rgba(115,253,168,1) 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`

function App() {
  return (
    <ThemeProvider theme= {darkTheme}>
      <Router>
        <Navbar />
        <Body>
        <Hero />
        <Wrapper>
          <Skills />
          <Experience />
        </Wrapper>
        <Wrapper>
        <Education />
        </Wrapper>
      </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
