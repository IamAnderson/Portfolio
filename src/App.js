import './App.css';
import GlobalStyle from './globalStyles'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './Components/Themes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './Components/AboutPage';
import Main from './Components/Main';
import BlogPage from './Components/BlogPage';
import WorkPage from './Components/WorkPage';
import SkillsPage from './Components/SkillsPage';
import SoundBar from './subComponents/SoundBar';
import { useState } from 'react';
import HiPage from './Components/HiPage';



function App() {

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click)
  }

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar click_={click}/>
        <Router>
          <Routes >
            <Route path='/' element={ < Main click={click} handleClick={handleClick}/> } exact/>
            <Route path='/About' element={ <AboutPage /> } exact/>
            <Route path='/Blog' element={ < BlogPage/> } exact/>
            <Route path='/Work' element={ <WorkPage /> } exact/>
            <Route path='/Skills' element={ < SkillsPage/> } exact/>
            <Route path='/SayHi' element={ < HiPage/> } exact/>
          </Routes>

        </Router>
      </ThemeProvider>


    </>
  );
}

export default App;
