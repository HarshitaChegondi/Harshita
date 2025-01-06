import { Container, Table } from 'react-bootstrap';
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
      {/* Programming Languages Table */}
      <Container>
        <Table className="skill-table">
          <tbody>
            <tr>
              <th>Programming Languages</th>
              <td><img src={Java} alt="Java" /></td>
              <td><img src={Python} alt="Python" /></td>
              <td><img src={C} alt="C" /></td>
              <td><img src={Cpp} alt="C++" /></td>
              <td><img src={Apex} alt="Apex" /></td>
            </tr>
          </tbody>
        </Table>
      </Container>

      <Container>
        <Table responsive className="skill-table">
          <tbody>
            <tr>
              <th>Cloud Technologies</th>
              <td><img src={Salesforce} alt="Salesforce" /></td>
              <td><img src={AWS} alt="AWS" /></td>
            </tr>
          </tbody>
        </Table>
      </Container>

      {/* Web Technologies Table */}
      <Container>
        <Table responsive className="skill-table">
          <tbody>
            <tr>
              <th>Web Technologies</th>
              <td><img src={HTML} alt="HTML" /></td>
              <td><img src={CS} alt="CSS" /></td>
              <td><img src={JavaScript} alt="JavaScript" /></td>
              <td><img src={ReactImg} alt="React" /></td>
              <td><img src={Nodejs} alt="Node.js" /></td>
              <td><img src={Bootstrap} alt="Bootstrap" /></td>
            </tr>
          </tbody>
        </Table>
      </Container>

      {/* Database Management Table */}
      <Container>
        
        <Table responsive className="skill-table">
          <tbody>
            <tr>
              <th>Database Management</th>
              <td><img src={mysql} alt="MySQL" /></td>
              <td><img src={oracle} alt="Oracle SQL" /></td>
              <td><img src={postgresql} alt="PostgreSQL" /></td>
              <td><img src={soql} alt="SOQL" /></td>
            </tr>
          </tbody>
        </Table>
      </Container>

      <Container>
      
        <Table responsive className="skill-table">

          <tbody>
            <tr>
              <th>Developer Tools</th>
              <td><img src={vscode} alt="MySQL" /></td>
              <td><img src={eclipse} alt="Oracle SQL" /></td>
              <td><img src={tableau} alt="PostgreSQL" /></td>
              <td><img src={formtitan} alt="SOQL" /></td>
              <td><img src={docker} alt="SOQL" /></td>
              <td><img src={jupyter} alt="SOQL" /></td>
              <td><img src={github} alt="SOQL" /></td>
            </tr>
          </tbody>
        </Table>
      </Container>

      <Container>
        <Table responsive className="skill-table">

          <tbody>
            <tr>
              <th>Other Skills</th>
              <td><img src={git} alt="MySQL" /></td>
              <td><img src={jira} alt="Oracle SQL" /></td>
              <td><img src={confluence} alt="PostgreSQL" /></td>
              <td><img src={tf} alt="SOQL" /></td>
              <td><img src={keras} alt="SOQL" /></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </section>
  );
};
