import {Row, Col, Container} from 'react-bootstrap'
import UTA from "../assets/img/uta.png";
import GITAM from "../assets/img/gitam.jpg";



export const Education = () =>{
    return(
        <section className="education" id="education" >
            <br/>
            <div><h2>Education</h2></div>
            <Container>
                <Row>

                    <Col xs={7} md={6} xl={10}>
                        <h5>Master of Science</h5>
                        <ul>
                            <li>Computer Science</li>
                            <li>GPA 3.8/4.0</li>
                            <li>Relevant Coursework: Artificial Intelligence, Big Data, Machine Learning, Data Mining, Web Data Management</li>
                        </ul>
                    </Col>
                    <Col xs={4} md={6} xl={1}>
                        <div>
                            <img src={UTA} alt='Image' />
                        </div>
                    </Col>

                    
                </Row>
            </Container>

            <Container>
                <Row>

                    <Col xs={7} md={6} xl={10}>
                        <h5>Bachelor of Technology</h5>
                        <ul>
                            <li>Computer Science</li>
                            <li>GPA 3.65/4.00</li>
                            <li>Relevant Coursework: Relevant Coursework: Web Technologies, Artificial Intelligence, Cloud Computing, Machine Learning </li>
                        </ul>
                    </Col>
                    <Col xs={4} md={6} xl={1}>
                        <div>
                            <img src={GITAM} alt='Image' />
                        </div>
                    </Col>

                    
                </Row>
            </Container>

        </section>
    )
}