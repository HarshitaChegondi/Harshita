import React, { useState } from 'react';
import { Row, Col, Form } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import gmail from "../assets/img/gmail.png";
import phone from "../assets/img/p2.webp";

export const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        queries: '',
    });
    const [loading, setLoading] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Send form data via Formspree
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("https://formspree.io/f/mvggvrbl", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.queries, // Formspree expects a 'message' field
                }),
            });

            if (response.ok) {
                toast.success("Email sent successfully to Harshita!");
                setFormData({ name: '', email: '', queries: '' }); // Reset form
            } else {
                toast.error("Failed to send email. Please try again.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            toast.error("Failed to send email. Please check your internet connection.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="footer-down">
            <footer className="footer">
                <div className="container-footer">
                    <div className="formbox">
                        <h3>Contact Me</h3>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col xs={12} >
                                    <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="First Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12} >
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Your Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="name@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <Form.Group className="mb-3" controlId="queries">
                                        <Form.Label>Your Queries or Feedback</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            name="queries"
                                            value={formData.queries}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <button type="submit" className="submit-button" disabled={loading}>
                                        {loading ? "Sending..." : "Send"}
                                    </button>
                                </Col>
                            </Row>
                        </Form>
                    </div>

                    <div className="second-box">
                        <Row>
                            <Col xs={12}>
                                <div>
                                    <h5>harshita.chegondi@gmail.com</h5>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <div>
                                    <h5>+1 (682)-392-5855</h5>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <div>
                                    <h5>Location: Arlington, Texas</h5>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </footer>
            <ToastContainer />
        </section>
    );
};
