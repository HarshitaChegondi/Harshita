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
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        setLoading(true);

        if (!formData.name || !formData.email || !formData.queries) {
            toast.error("Please fill in all required fields.");
            setLoading(false);
            return;
        }

        const TOKEN_URL = "https://login.salesforce.com/services/oauth2/token";
        const SALESFORCE_API_URL = "https://uta-f-dev-ed.develop.my.salesforce.com/services/data/v57.0/sobjects/ContactForm__c";

        const CLIENT_ID = '3MVG9HB6vm3GZZR_DKUfFYaIliQ5kKRJAyfGOIFE4mJnTOVJo_4cGK6NRn3WFZFgpLl.hrDl2hmSMwdho7HWj';
        const CLIENT_SECRET = '812C651DAEEA275A6BFC2702294C53D8E8B5BE24342CAD2C37FA6C296FA7F1E5';
        const USERNAME = 'harshita.chegondi@blurise.com';
        const PASSWORD = 'Harshita@056G9adj6SglenEXaijXqtNlVeD';

        const formDataToken = new URLSearchParams();
        formDataToken.append('grant_type', 'password');
        formDataToken.append('client_id', CLIENT_ID);
        formDataToken.append('client_secret', CLIENT_SECRET);
        formDataToken.append('username', USERNAME);
        formDataToken.append('password', PASSWORD);

        try {
            // Get the access token
            const tokenResponse = await fetch(TOKEN_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: formDataToken,
            });

            const tokenData = await tokenResponse.json();

            if (!tokenResponse.ok) {
                throw new Error(tokenData.error_description || "Error retrieving Salesforce token.");
            }

            const accessToken = tokenData.access_token;

            // Submit the form data to Salesforce
            const response = await fetch(SALESFORCE_API_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Name: formData.name,
                    Email__c: formData.email,
                    Queries__c: formData.queries,
                }),
            });

            const responseData = await response.json();

            if (response.ok) {
                toast.success("Details successfully sent to Harshita!");
                setFormData({ name: '', email: '', queries: '' });
                setFormSubmitted(false);
            } else {
                console.error("Error saving to Salesforce:", responseData);
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
                                            isInvalid={formSubmitted && !formData.name}
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
                                            isInvalid={formSubmitted && !formData.email}
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
                                            isInvalid={formSubmitted && !formData.queries}
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
