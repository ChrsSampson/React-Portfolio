import {useState} from 'react';

// Components
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header'
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
// Styles
import './App.css';
import './base.css'

// data
import Data from './data.json'

function App() {

  const [data, setData] = useState(Data);
 

  return (
    <section className="App fade-in">

      <Navbar />
      <Header data={data.About}/>
      <Projects data={data.Projects} />
      <Skills data={data.Skills}/>
      <Contact />
    </section>
  );
}

export default App;
