import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material'
import './App.css';
import Intro from './pages/intro'
import Experience from './pages/experience';
import Education from './pages/education'
import Skills from './pages/skills';
import Projects from './pages/projects';
const a = ["intro", "skills", 'education', "exp", 'projects']
function App() {
  const [active, setActive] = useState("intro")
  useEffect(() => {
    var scrollDiv = document.getElementById(active).offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
  }, [active])
  useEffect(() => {
    window.addEventListener('scrollend', handleScroll);
    var education = document.getElementById('education').getBoundingClientRect();
    var exp = document.getElementById('exp').getBoundingClientRect();
    var skills = document.getElementById('skills').getBoundingClientRect();
    console.log(education, exp, skills)
    return () => window.removeEventListener("scrollend", handleScroll)
  }, [])
  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    console.log(pageYOffset);

  }
  return (
    <div className="App">
      <Intro />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Dots active={active} setActive={setActive} />
    </div>
  );
}

const Dots = ({ active, setActive }) => {

  const onClick = (e, index) => {

    // document.getElementById(e).scrollIntoView()
    setActive(e)
  }

  return (
    <div style={{ position: 'fixed', right: 10, top: 0, display: 'flex', height: '100vh', flexDirection: 'column', justifyContent: 'center' }}>
      {
        a.map((b, i) => {
          return (
            <div
              key={i}
              className={`dot ${b === active ? 'active' : ''}`}
              style={{}}
              onClick={() => onClick(b, i)}>

            </div>
          )
        })
      }
    </div>
  )
}
export default App;
