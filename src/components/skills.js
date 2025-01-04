import { Container, Row, Col, Table } from 'react-bootstrap';
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

export const Skills = () => {
  return (
    <section className="skill" id="skills">
        <div><h2>Technical Skills</h2></div>
      {/* Programming Languages Table */}
      <Container>
        
        <Table responsive className="skill-table">
          <tbody>
            <tr>
            <td>Programming Languages</td>
              <td><img src={Java} alt="Java" /></td>
              <td><img src={Python} alt="Python" /></td>
              <td><img src={C} alt="C" /></td>
              <td><img src={Cpp} alt="C++" /></td>
              <td><img src={Apex} alt="Apex" /></td>
            </tr>
          </tbody>
        </Table>
      </Container>

      {/* Cloud Technologies Table */}
      <Container>
        <h4>Cloud Technologies</h4>
        <Table responsive className="skill-table">

          <tbody>
            <tr>
              <td><img src={Salesforce} alt="Salesforce" /></td>
              <td><img src={AWS} alt="AWS" /></td>
            </tr>
          </tbody>
        </Table>
      </Container>

      {/* Web Technologies Table */}
      <Container>
        <h4>Web Technologies</h4>
        <Table responsive className="skill-table">
          <tbody>
            <tr>
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
        <h4>Database Management</h4>
        <Table responsive className="skill-table">
          
          <tbody>
            <tr>
              <td><img src={mysql} alt="MySQL" /></td>
              <td><img src={oracle} alt="Oracle SQL" /></td>
              <td><img src={postgresql} alt="PostgreSQL" /></td>
              <td><img src={soql} alt="SOQL" /></td>
            </tr>
          </tbody>
        </Table>
      </Container>

      <Container>
        <h4>Developer Tools</h4>
        <Table responsive className="skill-table">
          
          <tbody>
            <tr>
              <td><img src={vscode} alt="MySQL" /></td>
              <td><img src={eclipse} alt="Oracle SQL" /></td>
              <td><img src={tableau} alt="PostgreSQL" /></td>
              <td><img src={formtitan} alt="SOQL" /></td>
              <td><img src={docker} alt="SOQL" /></td>
              <td><img src={jupyter} alt="SOQL" /></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </section>
  );
};
