import {useState} from 'react';

// Components
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header'
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
// Styles
import './styles/index.scss';
// import './base.css'

// data
import Data from './data.json'

function App() {

  const [data] = useState(Data);
  const [theme, setTheme] = useState('dark');


  const handleThemeChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <section className={`App theme theme--${theme} fade-in`}>
      <Navbar handleClick={handleThemeChange} theme={theme} />
      <Header data={data.About}/>
      <Skills data={data.Skills}/>
      <Projects data={data.Projects} />
      <Contact />
    </section>
  );
}

export default App;
