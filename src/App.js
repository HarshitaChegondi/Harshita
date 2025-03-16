import './App.css';
import {NavBar} from './components/navigation';
import {Banner} from './components/banner';
import {Skills} from './components/skills.js';
import {Experience} from './components/experience.js';
import { Education } from './components/education.js';
import { Certifications } from './components/certifications.js';
import { Footer } from './components/footer.js';
import { useEffect } from "react";


import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  useEffect(() => {
    document.title = "HC Portfolio";
    const link = document.querySelector("link[rel*='icon']") || document.createElement("link");
    link.type = "image/png"; // Set the image type
    link.rel = "icon"; // Set the rel attribute for favicon
    link.href = "/favicon.png"; // Path to the favicon image
    document.head.appendChild(link);

  }, []);
  return (

    <div className="App">
      <NavBar/>
      <Banner />
      <Experience/>
      <Skills/>
      <Education />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;
