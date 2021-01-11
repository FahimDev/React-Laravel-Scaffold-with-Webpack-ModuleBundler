import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class LandingZone extends Component {
    render() {
        return (
            <Fragment>
                <Menu>
                    <Container fluid={true}>
                        <Row>
                            <Col className="p-2" md={3} log={3} sm={6}>
                                <Card className="card">
                                    <Card.Body>
                                        <h5 className="title-text">+8801842844177</h5>
                                        <h5 className="des-text">Contact Request</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="p-2" md={3} log={3} sm={6}>
                                <Card className="card">
                                    <Card.Body>
                                        <h5 className="title-text">Laravel</h5>
                                        <h5 className="des-text">Server Side Application</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="p-2" md={3} log={3} sm={6}>
                                <Card className="card">
                                    <Card.Body>
                                        <h5 className="title-text">React.js</h5>
                                        <h5 className="des-text">Web Page</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="p-2" md={3} log={3} sm={6}>
                                <Card className="card">
                                    <Card.Body>
                                        <h5 className="title-text">Lumen</h5>
                                        <h5 className="des-text">API Service</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="p-2" md={3} log={3} sm={6}>
                                <Card className="card">
                                    <Card.Body>
                                        <h5 className="title-text">Flutter</h5>
                                        <h5 className="des-text">Mobile Application</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Menu>
            </Fragment>
        );
    }
}

export default LandingZone;
