import React from "react";
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';

function Contact() {
    return (
        <div className="form-container">
            <Form className="form">
                <FormGroup>
                    <FormLabel>Name</FormLabel>
                    <FormControl type="text" placeholder="Name" required/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Email address</FormLabel>
                    <FormControl type="email" placeholder="Enter your email" required/>
                    <Form.Text className="text-muted">
                        I will never share your email with anyone else.
                    </Form.Text>
                </FormGroup>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Contact;