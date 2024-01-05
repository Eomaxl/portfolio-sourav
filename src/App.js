import './App.css';
import styled, {ThemeProvider} from 'styled-components';
import {darkTheme} from "./utils/Themes";
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/HeroSection/heroSection";
import Skills from "./Components/Skills/skills";
import Education from "./Components/Education/index";
import Project from "./Components/Project/project";
import Experience from "./Components/Experience/experience";


const Body = styled.div`
background-color: ${({theme}) => theme.bg};
width:100%;
height: 100%;
overflow-x: hidden;
`
const Wrapper = styled.div`
background-color: '#f0f0f0',
width: 100%;
`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
        <Navbar/>
        <Body>
            <Hero/>
            <Wrapper>
                <Skills/>
                <Education/>
                <Project/>
                <Experience/>
            </Wrapper>
        </Body>
    </ThemeProvider>
  );
}

export default App;
