import { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/head.jpg";
import resume from '../assets/HARSHITAC_Resume.pdf'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Welcome to my portfolio"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
        tick();
        }, delta)

        return() => {clearInterval(ticker)};
    }, [text])

    const tick = () => {

        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        //let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);
        let updatedText = fullText.substring(0, text.length+1);

        setText(updatedText);

        
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
    }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);  
        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);
        } 
         
        
    }
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume; // Replace with the file's URL
        link.download = 'HarshitaC_Resume.pdf'; // Set the file name
        link.click();

       
      };

      
    return(
        <section className="banner" id="home">
            <br/>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <h1 className="bannerH1">{'Hi! I am Harshita'}</h1>
                        <h3><span className="wrap">{text}</span></h3>
                        <div><p>7+ years of experience in Data Engineering, specializing in designing and developing 
                            data pipelines, migration, modeling, and transformation using cloud platforms AWS, Azure and GCP
                            and big data tools. Expertise in Databricks, Apache Spark, and Airflow to optimize performance 
                            and automation. Skilled in building scalable data architectures for real-time insights and analytics, 
                            ensuring seamless data flow and informed decision-making.</p></div>
                        <button className='tagline' onClick={handleDownload}>Download Resume <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={5} md={5} xl={2}>
                        <img src={headerImg} alt="Header img" className="circular-image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
