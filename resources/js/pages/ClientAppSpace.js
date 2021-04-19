import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

class ClientAppSpace extends Component {
    render() {
        return (
            <Fragment>
                <Menu>
                    <h1> This is Client Mobile Application Space </h1>
                    <Col className="p-2" md={3} log={3} sm={6}>
                        <Link className="NavItem" to="/qualification">
                        <Card className="card">
                            <Card.Body>
                                <h5 className="title-text">Qualification</h5>
                                <h5 className="des-text">Experience | Expertise | Skills</h5>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>

                    <Col className="p-2" md={3} log={3} sm={6}>
                        <Link className="NavItem" to="/hall-of-fame">
                            <Card className="card">
                                <Card.Body>
                                    <h5 className="title-text"> Hall of Fame</h5>
                                    <h5 className="des-text">Achievement | Certification | Publication</h5>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Menu>
            </Fragment>
        );
    }
}

export default ClientAppSpace;
