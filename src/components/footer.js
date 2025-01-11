import React, { useState } from 'react';
import { Row, Col, Form } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        queries: '',
    });
    const [loading, setLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false); // Track if form is submitted

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Send form data to Salesforce
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true); // Set form submission to true
        setLoading(true);

        // Check if all required fields are filled
        if (!formData.name || !formData.email || !formData.queries) {
            toast.error("Please fill in all required fields.");
            setLoading(false);
            return;
        }

        const SALESFORCE_API_URL = "https://uta-f-dev-ed.develop.my.salesforce.com/services/data/v57.0/sobjects/ContactForm__c";
        const ACCESS_TOKEN = "00DHs000000QWhh!ARoAQOJlMY2krCivMc.LwKf7E0I.Y0AWZUnmcwAKvCn.91SId25jk5k2J9Ys5.j_.Y38lRjjekXSP0JOn06texb_kUF7TsU8";

        try {
            const response = await fetch(SALESFORCE_API_URL, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${ACCESS_TOKEN}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Name: formData.name,
                    Email__c: formData.email,
                    Queries__c: formData.queries,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(`Details successfully sent to Harshita!`);
                setFormData({ name: '', email: '', queries: '' }); // Reset form fields
                setFormSubmitted(false); // Reset form submission state to hide error messages
            } else {
                console.error("Error saving to Salesforce:", data);
                toast.error("Failed to save details. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to connect to Salesforce. Please check your setup.");
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
                                <Col xs={12}>
                                    <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Your Name *</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="First Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            isInvalid={formSubmitted && !formData.name} // Show error if field is empty
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Name is required.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Your Email *</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="name@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            isInvalid={formSubmitted && !formData.email} // Show error if field is empty
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Email is required.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <Form.Group className="mb-3" controlId="queries">
                                        <Form.Label>Your Queries or Feedback *</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            name="queries"
                                            value={formData.queries}
                                            onChange={handleChange}
                                            isInvalid={formSubmitted && !formData.queries} // Show error if field is empty
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Queries/Feedback is required.
                                        </Form.Control.Feedback>
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
                <center className="center-bottom">Driven by innovation, powered by passion | © 2025 Harshita Chegondi. All Rights Reserved</center>
            </footer>
            <ToastContainer />
        </section>
    );
};
