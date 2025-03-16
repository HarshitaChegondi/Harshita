import { Row, Col, Container } from "react-bootstrap";
import ABSYZ from "../assets/img/absyz.jpg";
import Pena4 from "../assets/img/pena4.jpg";
import Verizon from "../assets/img/verizon.jpg";
import GAF from "../assets/img/GAF.png";
import Schemax from "../assets/img/schemax.jpeg";
import iMerit from "../assets/img/iMerit.jpg";



export const Experience = () => {
    
    return(
        <section className="experience" id="experience">
            <br/>
            <div><h2>WORK EXPERIENCE</h2></div>
            
            <Container>
                <Row>
                    <Col xs={4} md={2} xl={2}>
                        <div>
                            <img src={Verizon} alt='Image' />
                        </div>
                    </Col>
                    
                    <Col xs={7} md={10} xl={10}>
                        <h5>Senior Software Engineer | Apr 2022 - Jan 2023</h5>
                        <p>Verizon, a global leader in telecommunications, is committed to delivering scalable, data-driven 
                            solutions by leveraging Azure cloud services to enhance data integration, transformation, and real-time analytics. 
                            This project utilized Azure Databricks, Azure Data Factory, HDInsight, Cosmos DB and Azure SQL Data Warehouse 
                            for smooth data transformation and integration. AI-driven insights and smooth workflows for business operations 
                            were made possible using Apache Airflow, Spark and Power BI.</p>
                    </Col>
                </Row>
            </Container>
            <br/>
            

            <Container>
                <Row>
                    <Col xs={4} md={2} xl={2}>
                        <div>
                            <img src={GAF} alt='Image' />
                        </div>
                    </Col>
                    
                    <Col xs={7} md={10} xl={10}>
                        <h5>Senior Software Engineer | Apr 2022 - Jan 2023</h5>
                        <p> GAF, a leading roofing and waterproofing manufacturer, built a scalable AWS data lake to 
                        combine data from SQL server, Hive and PostgreSQL. Leveraging Snowflake, MongoDB and Spark, the project 
                        optimized data transformation and also automated ETL pipelines with Apache Airflow, AWS Glue and Lambda. 
                        Fraud detection was made possible by real-time streaming using Kafka, enhanced business intelligence and decision
                        making with Tableau dashboards and query optimization. </p>
                    </Col>
                </Row>
            </Container>
            <br/>

            <Container className="pena4-container">
                <Row>
                    <Col xs={4} md={2} xl={2}>
                        <div className="pena4-image">
                            <img src={Pena4} alt='Image' />
                        </div>
                    </Col>

                    <Col xs={7} md={10} xl={10}>
                        <h5>Data Analyst Intern | May 2019 - Jun 2019</h5>
                        <p> The project built an extensible AWS data integration and analysis system using services like S3, 
EMR, Redshift, Athena and Glue for smooth ETL process and querying. AWS Glue and Airflow automated processes 
while Snowflake and Databricks improved big data processing. Real-time reporting was made achievable by using 
Tableau and Power BI, monitored them using CloudWatch, CloudTrail and SNS.</p>
                    </Col>
                    
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col xs={4} md={2} xl={2}>
                        <div>
                        <img src={Schemax} alt='Image' />
                        </div>
                    </Col>
                    
                    <Col xs={7} md={10} xl={10}>
                        <h5>Senior Software Engineer | Apr 2022 - Jan 2023</h5>
                        <p> With a focus on corporate applications, business intelligence and data integration, Schemax 
Expert Techno Craft Pvt. Ltd. offers robust solutions that facilitate productivity in operations and data-driven decision 
making. With the objective to improve data analysis and report, the project included creating interactive Tableau 
dashboards, obtaining data from various sources, and constructing reliable ETL pipelines with Informatica. </p>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col xs={4} md={2} xl={2}>
                        <div>
                            <img src={iMerit} alt='Image' />
                        </div>
                    </Col>
                    
                    <Col xs={7} md={10} xl={10}>
                        <h5>Senior Software Engineer | Apr 2022 - Jan 2023</h5>
                        <p>  AI-driven solutions and data annotation are the areas of expertise for IMerit Technology Services 
Pvt. Ltd. In order to improve business insights, I developed machine learning models, automated data aggregation, 
and streamlined pipelines as a data engineer. </p>
                    </Col>
                </Row>
            </Container>
        </section>
        
    )
}
