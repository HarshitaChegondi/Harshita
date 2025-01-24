import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



export const Projects = () => {
    return (
        <section className="project" id="projects">
            <br/>
            <div><h2>PROJECTS</h2></div>
            <div className="tabs">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Tabs defaultActiveKey="project1" justify className="custom-tab">
                            <Tab eventKey="project1" title="Project 1">
                                <div className="project-tab-inner">
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
                                        <p> Tech Stack: 
                                        Python, Jupyter Notebook, Github

                                        
                                        </p>
                                        
                                        </Col>
                                    </Row>
                                    
                                </div>
                            </Tab>

                            <Tab eventKey="project2" title="Project 2">

                                <div className="project-tab-inner">
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
                                        <p> Tech Stack: 
                                        ReactJS, CSS, Node.JS, PHP, VS CODE
                                        </p>
                                        </Col>
                                    </Row>
                                </div>

                            </Tab>

                            <Tab eventKey="project3" title="Project 3">
                                <div className="project-tab-inner">
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
                                        <p> Tech Stack: HTML, CSS, JavaScript, VS Code, Github
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
