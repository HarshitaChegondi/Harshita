import { Container } from 'react-bootstrap';
import Java from "../assets/img/java-logo.png";
import Python from "../assets/img/python.png";
import C from "../assets/img/c.png";
import Cpp from "../assets/img/cpp.png";
import Apex from "../assets/img/apexpng.png";
import Salesforce from "../assets/img/Salesforce.jpg";
import AWS from "../assets/img/aws.png";
import HTML from "../assets/img/html.png";
import CS from "../assets/img/css.png";
import JavaScript from "../assets/img/js.png";
import ReactImg from "../assets/img/react.png";
import Bootstrap from "../assets/img/bootstrap.png";
import Nodejs from "../assets/img/nodejs.png";
import mysql from "../assets/img/mysql.png";
import oracle from "../assets/img/oracle.jpg";
import postgresql from "../assets/img/postgres.jpg";
import soql from "../assets/img/SOQL.webp";

import vscode from "../assets/img/vs.jpg";
import jupyter from "../assets/img/jupyter.png";
import eclipse from "../assets/img/eclipse.svg";
import formtitan from "../assets/img/formtitan.png";
import tableau from "../assets/img/Tableau.png";
import docker from "../assets/img/docker.png";
import github from "../assets/img/github.svg";

import git from "../assets/img/git.png";
import jira from "../assets/img/jira.png";
import confluence from "../assets/img/confluence.png";
import tf from "../assets/img/tf.png";
import keras from "../assets/img/keras.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div><h2>TECHNICAL SKILLS</h2></div>

      {/* Programming Languages */}
      <Container>
  <div className="skills-container">
    <div className="skill-section">
      <h3>Programming Languages</h3>
      <div className="skill-tile-container">
        <div className="skill-tile">
          <img src={Java} alt="Java" />
          <p>Java</p>
        </div>
        <div className="skill-tile">
          <img src={Python} alt="Python" />
          <p>Python</p>
        </div>
        <div className="skill-tile">
          <img src={C} alt="C" />
          <p>C</p>
        </div>
        <div className="skill-tile">
          <img src={Cpp} alt="C++" />
          <p>C++</p>
        </div>
        <div className="skill-tile">
          <img src={Apex} alt="Apex" />
          <p>Apex</p>
        </div>
      </div>
    </div>

    <div className="skill-section">
      <h3>Cloud Technologies</h3>
      <div className="skill-tile-container">
        <div className="skill-tile">
          <img src={Salesforce} alt="Salesforce" />
          <p>Salesforce</p>
        </div>
        <div className="skill-tile">
          <img src={AWS} alt="AWS" />
          <p>AWS</p>
        </div>
      </div>
    </div>
  </div>
</Container>

<Container>
  <div className="skills-container">
    {/* Web Technologies Section */}
    <div className="skill-section">
      <h3>Web Technologies</h3>
      <div className="skill-tile-container">
        <div className="skill-tile">
          <img src={HTML} alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="skill-tile">
          <img src={CS} alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="skill-tile">
          <img src={JavaScript} alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="skill-tile">
          <img src={ReactImg} alt="React" />
          <p>React</p>
        </div>
        <div className="skill-tile">
          <img src={Nodejs} alt="Node.js" />
          <p>Node.js</p>
        </div>
        <div className="skill-tile">
          <img src={Bootstrap} alt="Bootstrap" />
          <p>Bootstrap</p>
        </div>
      </div>
    </div>

    {/* Database Management Section */}
    <div className="skill-section">
      <h3>Database Management</h3>
      <div className="skill-tile-container">
        <div className="skill-tile">
          <img src={mysql} alt="MySQL" />
          <p>MySQL</p>
        </div>
        <div className="skill-tile">
          <img src={oracle} alt="Oracle SQL" />
          <p>Oracle SQL</p>
        </div>
        <div className="skill-tile">
          <img src={postgresql} alt="PostgreSQL" />
          <p>PostgreSQL</p>
        </div>
        <div className="skill-tile">
          <img src={soql} alt="SOQL" />
          <p>SOQL</p>
        </div>
      </div>
    </div>
  </div>
</Container>

<Container>
  <div className="skills-container">
    {/* Developer Tools Section */}
    <div className="skill-section">
      <h3>Developer Tools</h3>
      <div className="skill-tile-container">
        <div className="skill-tile">
          <img src={vscode} alt="VS Code" />
          <p>VS Code</p>
        </div>
        <div className="skill-tile">
          <img src={eclipse} alt="Eclipse" />
          <p>Eclipse</p>
        </div>
        <div className="skill-tile">
          <img src={tableau} alt="Tableau" />
          <p>Tableau</p>
        </div>
        <div className="skill-tile">
          <img src={formtitan} alt="FormTitan" />
          <p>FormTitan</p>
        </div>
        <div className="skill-tile">
          <img src={docker} alt="Docker" />
          <p>Docker</p>
        </div>
        <div className="skill-tile">
          <img src={jupyter} alt="Jupyter" />
          <p>Jupyter</p>
        </div>
        <div className="skill-tile">
          <img src={github} alt="GitHub" />
          <p>GitHub</p>
        </div>
      </div>
    </div>

    {/* Other Skills Section */}
    <div className="skill-section">
      <h3>Other Skills</h3>
      <div className="skill-tile-container">
        <div className="skill-tile">
          <img src={git} alt="Git" />
          <p>Git</p>
        </div>
        <div className="skill-tile">
          <img src={jira} alt="Jira" />
          <p>Jira</p>
        </div>
        <div className="skill-tile">
          <img src={confluence} alt="Confluence" />
          <p>Confluence</p>
        </div>
        <div className="skill-tile">
          <img src={tf} alt="Terraform" />
          <p>Terraform</p>
        </div>
        <div className="skill-tile">
          <img src={keras} alt="Keras" />
          <p>Keras</p>
        </div>
      </div>
    </div>
  </div>
</Container>

    </section>
  );
};
