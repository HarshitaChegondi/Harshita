import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assets/img/logo-png.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.png';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    {/*<img src={logo} alt="logo" />*/}
                    <h3 className="logoName">Harshita Chegondi</h3>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}>
                            Home
                        </Nav.Link>

                        <Nav.Link
                            href="#experience"
                            className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('experience')}>
                            Experience
                        </Nav.Link>

                        <Nav.Link
                            href="#skills"
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('skills')}>
                            Skills
                        </Nav.Link>

                        <Nav.Link
                            href="#education"
                            className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('education')}>
                            Education
                        </Nav.Link>

                        <Nav.Link
                            href="#projects"
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('projects')}>
                            Projects
                        </Nav.Link>

                        <Nav.Link
                            href="#certifications"
                            className={activeLink === 'certifications' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('certifications')}>
                            Certifications
                        </Nav.Link>

                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/harshitachegondi/" target="_blank"><img src={navIcon1} alt="Icon1" /></a>
                            <a href="https://github.com/HarshitaChegondi" target="_blank"><img src={navIcon2} alt="Icon2" /></a>
                        </div>
                        <button className="vvd" onClick={() => {document.getElementById('footer-down')
                                                                .scrollIntoView({ behavior: 'smooth' });}}>
                            <span>Let's Connect</span>
                        </button>

                    </span>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};
