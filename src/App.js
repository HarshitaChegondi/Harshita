import './App.css';
import {NavBar} from './components/navigation';
import {Banner} from './components/banner';
import {Skills} from './components/skills.js';
import {Experience} from './components/experience.js';
import { Education } from './components/education.js';
import {Projects} from './components/projects.js';
import { Certifications } from './components/certifications.js';
import { Footer } from './components/footer.js';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <Experience/>
      <Skills/>
      <Education />
      <Projects />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;
