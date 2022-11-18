import './App.css';
import GlobalStyle from './globalStyles'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Components/Themes'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AboutPage from './Components/AboutPage';
import Main from './Components/Main';
import BlogPage from './Components/BlogPage';
import WorkPage from './Components/WorkPage';
import SkillsPage from './Components/SkillsPage';
import { AnimatePresence } from 'framer-motion';
import SoundBar from './subComponents/SoundBar';



function App() {



  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <Router>
          <Routes >
            <Route path='/' element={ < Main/> } exact/>
            <Route path='/About' element={ <AboutPage /> } exact/>
            <Route path='/Blog' element={ < BlogPage/> } exact/>
            <Route path='/Work' element={ <WorkPage /> } exact/>
            <Route path='/Skills' element={ < SkillsPage/> } exact/>
          </Routes>

        </Router>
      </ThemeProvider>


    </>
  );
}

export default App;
