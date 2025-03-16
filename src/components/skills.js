import { Container } from 'react-bootstrap';
import SQL from "../assets/img/sql.png";
import Python from "../assets/img/python.png";
import Hive from "../assets/img/hive.png";
import Shell from "../assets/img/shell.png";
import Pyspark from "../assets/img/pyspark.jpeg";
import AWS from "../assets/img/aws.png";
import Azure from "../assets/img/azure.jpg";
import GCP from "../assets/img/gcp.png";
import DynamoDB from "../assets/img/dynamodb.png";
import MongoDB from "../assets/img/mongodb.webp";
import Cassandra from "../assets/img/cassandra.png";
import mysql from "../assets/img/mysql.png";
import oracle from "../assets/img/oracle.jpg";
import postgresql from "../assets/img/postgres.jpg";
import MSSQL from "../assets/img/mssql.png";
import HDFS from "../assets/img/hdfs.jpg";
import NifI from "../assets/img/nifi.webp";
import sqoop from "../assets/img/sqoop.png";
import pig from "../assets/img/pig.png";
import oozie from "../assets/img/oozie.jpeg";
import impala from "../assets/img/impala.png";
import zookeeper from "../assets/img/zookeeper.png";
import spark from "../assets/img/spark.png";
import kafka from "../assets/img/kafka.png";
import powerbi from "../assets/img/powerbi.png";
import ssrs from "../assets/img/ssrs.jpg";
import maven from "../assets/img/maven.png";
import jenkins from "../assets/img/jenkins.png";
import snowflake from "../assets/img/Snowflake.png";
import airflow from "../assets/img/airflow.jpg";
import informatica from "../assets/img/informatica.webp";


import vscode from "../assets/img/vs.jpg";
import jupyter from "../assets/img/jupyter.png";
import eclipse from "../assets/img/eclipse.svg";

import tableau from "../assets/img/Tableau.png";
import docker from "../assets/img/docker.png";
import github from "../assets/img/github.svg";
import postman from "../assets/img/postman.png";

import teradata from "../assets/img/teradata.png";
import vertica from "../assets/img/vertica.png";
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
          <img src={SQL} alt="SQL" />
          <p>Java</p>
        </div>
        <div className="skill-tile">
          <img src={Python} alt="Python" />
          <p>Python</p>
        </div>
        <div className="skill-tile">
          <img src={Shell} alt="Shell Scripting" />
          <p>C</p>
        </div>
        <div className="skill-tile">
          <img src={Pyspark} alt="PySpark" />
          <p>C++</p>
        </div>
      </div>
    </div>

    <div className="skill-section">
      <h3>Cloud Technologies</h3>
      <div className="skill-tile-container">
        <div className="skill-tile">
          <img src={AWS} alt="AWS" />
          <p>AWS</p>
        </div>
        <div className="skill-tile">
          <img src={Azure} alt="Azure" />
          <p>Azure</p>
        </div>
        <div className="skill-tile">
          <img src={GCP} alt="GCP" />
          <p>GCP</p>
        </div>
      </div>
    </div>
  </div>
</Container>

<Container>
  <div className="skills-container">
    {/* Web Technologies Section */}
    <div className="skill-section">
      <h3>No SQL Databases</h3>
      <div className="skill-tile-container">
       
        
        <div className="skill-tile">
          <img src={DynamoDB} alt="Dynamo DB" />
          <p>Dynamo DB</p>
        </div>
        <div className="skill-tile">
          <img src={MongoDB} alt="Mongo DB" />
          <p>Mongo DB</p>
        </div>
        <div className="skill-tile">
          <img src={Cassandra} alt="cassandra" />
          <p>Cassandra</p>
        </div>
      </div>
    </div>

    {/* Database Management Section */}
    <div className="skill-section">
      <h3>SQL Database</h3>
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
          <img src={teradata} alt="teradata" />
          <p>Teradata</p>
        </div>
        <div className="skill-tile">
          <img src={MSSQL} alt="mssql" />
          <p>MS SQL</p>
        </div>
        <div className="skill-tile">
          <img src={vertica} alt="vertica" />
          <p>Vertica</p>
        </div>
      </div>
    </div>
  </div>
</Container>

<Container>

  <div className="skills-container">
    {/* Developer Tools Section */}
    <div className="skill-section">
      <h3>Hadoop/Big Data Technologies </h3>
      <div className="skill-tile-container">
        <div className="skill-tile">
          <img src={HDFS} alt="HDFS" />
          <p>HDFS</p>
        </div>
        <div className="skill-tile">
          <img src={NifI} alt="NiFi" />
          <p>Apache NiFi</p>
        </div>
        <div className="skill-tile">
          <img src={sqoop} alt="sqoop" />
          <p>Sqoop</p>
        </div>
        <div className="skill-tile">
          <img src={pig} alt="pig" />
          <p>Apache Pig</p>
        </div>
        <div className="skill-tile">
          <img src={oozie} alt="oozie" />
          <p>oozie</p>
        </div>
        <div className="skill-tile">
          <img src={impala} alt="impala" />
          <p>Impala</p>
        </div>
        <div className="skill-tile">
          <img src={zookeeper} alt="Zookeeper" />
          <p>Zookeeper</p>
        </div>
        <div className="skill-tile">
          <img src={spark} alt="spark" />
          <p>Apache Spark</p>
        </div>
        <div className="skill-tile">
          <img src={spark} alt="spark" />
          <p>Apache Spark</p>
        </div>
        <div className="skill-tile">
          <img src={kafka} alt="kafka" />
          <p>Apache Kafka</p>
        </div>
      </div>
    </div>

    <div className="skill-section">
      <h3>Data Visualization</h3>
      <div className="skill-tile-container">
        <div className="skill-tile">
          <img src={powerbi} alt="PowerBI" />
          <p>Power BI</p>
        </div>
        <div className="skill-tile">
          <img src={tableau} alt="Tableau" />
          <p>Tableau</p>
        </div>
        <div className="skill-tile">
          <img src={ssrs} alt="SSRS" />
          <p>SSRS</p>
        </div>
      </div>
    </div>
  </div>

</Container>

<Container>
  <div className="skills-container">
    {/* Web Technologies Section */}
    <div className="skill-section">
      <h3>Build and Deployment tools</h3>
      <div className="skill-tile-container">
       
        
        <div className="skill-tile">
          <img src={maven} alt="maven" />
          <p>Maven</p>
        </div>
        <div className="skill-tile">
          <img src={git} alt="Git" />
          <p>Git</p>
        </div>
        <div className="skill-tile">
          <img src={jenkins} alt="jenkins" />
          <p>Jenkins</p>
        </div>
      </div>
    </div>

    {/* Database Management Section */}
    <div className="skill-section">
      <h3>ETL and Integration tools</h3>
      <div className="skill-tile-container">
        <div className="skill-tile">
          <img src={snowflake} alt="Snowflake" />
          <p>Snowflake</p>
        </div>
        <div className="skill-tile">
          <img src={airflow} alt="Airflow" />
          <p>Apache Airflow</p>
        </div>
        <div className="skill-tile">
          <img src={informatica} alt="Informatica" />
          <p>Informatica</p>
        </div>
        
      </div>
    </div>
  </div>
</Container>

    </section>
  );
};
