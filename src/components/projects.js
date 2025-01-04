import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import JavaScript from "../assets/img/js.png";
import VSCODE from "../assets/img/vs.jpg";
import HTML from "../assets/img/html.png";
import CS from "../assets/img/css.png";
import React from "../assets/img/react.png";
import Nodejs from "../assets/img/nodejs.png";


export const Projects = () => {
    return (
        <section className="project" id="projects">
            <br/>
            <div><h2>Projects</h2></div>
            <div className="tabs">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Tabs defaultActiveKey="project1" justify className="custom-tab">
                            <Tab eventKey="project1" title="Project 1">
                                <div className="p1-content">
                                    <Row>
                                        <Col>
                                        <h4>Sentiment Analysis on Movie Review</h4>
                                        <ul>
                                            <li>
                                                Constructed cutting-edge sentiment prediction systems leveraging both CNNs and BERT 
                                                technology aimed at deciphering emotional responses captured in thousands of online 
                                                reviews—accomplished this throughput enhancement without compromising analytical quality.
                                            </li>
                                            <li>
                                                Achieved a remarkable accuracy level of 97%, enhancing data processing speed for public 
                                                perception insights.
                                            </li>
                                        </ul>
                                        
                                        </Col>
                                    </Row>
                                    
                                </div>
                            </Tab>

                            <Tab eventKey="project2" title="Project 2">
                                <div className="p2-content">
                                <Row>
                                        <Col>
                                        <h4>MSC program MERN Stack </h4>
                                        <ul>
                                            <li>
                                            Designed a web application, allowing instructors to interact with up to 100+ 
                                            students, conduct quizzes, and manage grading in real-time
                                            </li>
                                            <li>
                                            Implemented features for real-time communication, quiz creation, and automated grading, 
                                            enhancing course management efficiency by 30% in full-stack development 
                                            </li>
                                        </ul>
                                        <p> Tools and technologies used: 
                                        <img src={React} alt="Image" />
                                        <img src={CS} alt="Image" />
                                        <img src={Nodejs} alt="Image" />
                                        <img src={VSCODE} alt="Image" />
                                        </p>
                                        </Col>
                                    </Row>
                                </div>
                            </Tab>

                            <Tab eventKey="project3" title="Project 3">
                                <div className="p3-content">
                                <Row>
                                        <Col>
                                        <h4>Sorting Techniques Visualizer</h4>
                                        <ul>
                                            <li>
                                            Engineered an interactive web application for sorting algorithms, visualizing 
                                            performance metrics and run-time complexities for arrays from 100 to 1000 elements, 
                                            leading to improved understanding and comparison of sorting techniques 
                                            </li>
                                            <li>
                                            Initiated innovative coding practices by restructuring how timing measurements 
                                            presented through intuitive interfaces—delivered findings that fixed three critical 
                                            causes slowing down overall system responsiveness during operations  
                                            </li>
                                        </ul>
                                        <p> Tools and technologies used: <img src={HTML} alt="Image" />
                                        <img src={CS} alt="Image" />
                                        <img src={JavaScript} alt="Image" />
                                        <img src={VSCODE} alt="Image" />
                                        </p>
                                        
                                        </Col>
                                    </Row>
                                </div>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        </section>
    );
};
