import React, {Component, Fragment} from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import {Col, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

class RecoverPassword extends Component {
    render() {
        return (
            <Fragment>

                <Jumbotron fluid>
                    <Container>

                        <h1>Recover password</h1>
                        <p>
                            <Card>
                                <Card.Header>Apply & wait for server response to recover the password</Card.Header>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <Container>
                                            <Row>

                                                <Col className="text-justify" lg={6} md={8} sm={10}>

                                                    <Form>
                                                        <Form.Group controlId="formBasicEmail">

                                                            <Form.Group controlId="formBasicPassword">
                                                                <Form.Label>User Name</Form.Label>
                                                                <Form.Control type="text" placeholder="user name" />
                                                            </Form.Group>

                                                            <Form.Label>Email address</Form.Label>
                                                            <Form.Control type="email" placeholder="Enter email" />
                                                            <Form.Text className="text-muted">
                                                                Never share your email with anyone else.
                                                            </Form.Text>
                                                        </Form.Group>

                                                        <Button variant="primary" type="submit">
                                                            Submit
                                                        </Button>
                                                    </Form>

                                                </Col>

                                            </Row>
                                        </Container>
                                        <footer className="blockquote-footer">
                                            Team Glitch <cite title="Source Title"> www.glitch-innovations.com </cite>
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </p>
                    </Container>
                </Jumbotron>
            </Fragment>
        );
    }
}

export default RecoverPassword;
