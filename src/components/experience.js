import { Row, Col, Container } from "react-bootstrap";
import ABSYZ from "../assets/img/absyz.jpg";
import Pena4 from "../assets/img/pena4.jpg";

export const Experience = () => {
    
    return(
        <section className="experience" id="experience">
            <br/>
            <div><h2>WORK EXPERIENCE</h2></div>
            <Container>
                <Row>
                    <Col xs={4} md={2} xl={2}>
                        <div>
                            <img src={ABSYZ} alt='Image' />
                        </div>
                    </Col>
                    
                    <Col xs={7} md={10} xl={10}>
                        <h5>Senior Software Engineer | Apr 2022 - Jan 2023</h5>
                        <ul>
                            <li>Tackled inefficiencies within non-profit program management processes on company’s 
                                CRM by translating complex diagrams into functional systems using Salesforce framework; 
                                leveraged FormTitan to enhance user interface and automate workflows, achieving a notable 
                                20% increase in customer satisfaction ratings  </li>
                            <li>Spearheaded modernization efforts by redesigning web architectures using Salesforce CMS technologies; 
                                addressed the problem of delayed access to critical data, achieving a 40% reduction in decision-making time 
                                for stakeholders </li>
                            <li>Refined underlying technology infrastructure linked with KPIs enabling real-time access to crucial data 
                                trends resulting not only in greater analytical precision but also facilitating immediate responses during 
                                high-stakes decision-making scenarios faced daily</li>
                            <li>Automated the manual auditing by implementing FormTitan within Salesforce, fulfilling 
                                client requests for digitization while leveraging Apex coding techniques that cut 
                                processing time by half and achieved 30% reduction in errors </li>
                        </ul>

                        <h5>Software Engineer | Apr 2021 - Apr 2022</h5>
                        <ul>
                            <li>Led the implementation of a customized application form within Salesforce HEDA using 
                                Aura components, JavaScript, and Apex; designed and developed complex inter-object relationships
                                 resulting in 35% increased data processing efficiency for client operations </li>
                            <li>Identified and resolved critical bugs on the client’s website by writing and 
                                executing more than 50 targeted test cases, enhancing backend stability and resulting 
                                in a significant increase in end user satisfaction score </li>
                            <li>Created robust unit tests as part of a test-driven development strategy that led to an overall 
                                reduction in critical bugs in production environments by 50%; this directly supported system 
                                availability initiatives</li>
                        </ul>

                        <h5>Salesforce Intern | Sept 2020 - Apr 2021</h5>
                        <ul>
                            <li>By orchestrating workflows and validation rules within Salesforce platforms, 
                        there was a noticeable enhancement in operational efficiency. Developing Asynchronous 
                        Apex solutions not only improved system performance but also reduced processing times 
                        for bulk transactions dramatically</li>
                            <li>Additionally, creating comprehensive test classes 
                        ensured that all automated processes maintained high reliability levels while decreasing 
                        error rates by 30%. The opportunity to work alongside experienced developers while integrating 
                        Lightning Aura Components into existing frameworks enriched both technical skills and practical 
                        knowledge of user experience design. </li>
                        </ul>
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
                        <ul>
                            <li>Applied advanced analytics to healthcare Charge Description Master Listings, 
                                identifying cost-saving opportunities, achieving a 15% operational expense reduction, 
                                and optimizing financial efficiency for institutions </li>
                            <li>Transformed raw data into actionable insights using Tableau, leading to a 25 percent 
                                increase in customer lifetime value through strategic analysis and data-driven decision-making</li>
                        </ul>
                    </Col>
                    
                </Row>
            </Container>
        </section>
        
    )
}