import {Row, Col, Container} from 'react-bootstrap'
import UTA from "../assets/img/uta.png";



export const Education = () =>{
    return(
        <section className="education" id="education" >
            <br/>
            <div><h2>EDUCATION</h2></div>
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

        </section>
    )
}