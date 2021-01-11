import React, {Component, Fragment} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
class LoginForm extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                   <Row>
                       <Col className="text-justify" lg={4} md={2} sm={1}></Col>
                       <Col className="text-justify" lg={4} md={8} sm={10}>
                           <br />
                           <Card border="info" style={{ width: '18rem' }}>
                               <Card.Header>Progressive Web Application</Card.Header>
                               <Card.Body>
                                   <Card.Title>USER LOGIN</Card.Title>
                                   <Card.Text>
                                       <Form>
                                           <Form.Group controlId="formBasicEmail">
                                               <Form.Label>User Name</Form.Label>
                                               <Form.Control type="text" placeholder="Enter user name" />
                                           </Form.Group>

                                           <Form.Group controlId="formBasicPassword">
                                               <Form.Label>Password</Form.Label>
                                               <Form.Control type="password" placeholder="Password" />
                                               <Form.Text className="text-muted">
                                                   Never share your password with anyone else.
                                               </Form.Text>
                                           </Form.Group>
                                           <Form.Group controlId="formBasicCheckbox">
                                               <Form.Check type="checkbox" label="Remember me" />
                                           </Form.Group>
                                           <Button variant="primary" type="submit">
                                               Login
                                           </Button>
                                       </Form>
                                   </Card.Text>
                               </Card.Body>
                           </Card>
                           <br />

                       </Col>
                       <Col className="text-justify" lg={4} md={2} sm={1}></Col>
                   </Row>
                </Container>
            </Fragment>
        );
    }
}

export default LoginForm;
