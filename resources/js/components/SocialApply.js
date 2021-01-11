import React, {Component, Fragment} from 'react';
import {Col, Row} from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

class SocialApply extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Col className="text-justify" lg={12} md={12} sm={12}>
                        <Jumbotron>
                            <h1>Social Media Signup</h1>
                            <p className="text-justify">
                                From here you can apply for the membership of our service with your social media or any other account. If your membership request get approval you will get a confirmation mail.
                            </p>
                            <p>
                                <Button className="text-justify text-center" variant="dark">Signup with Facebook <Badge variant="primary"><FontAwesomeIcon icon={faFacebookF} /></Badge></Button>
                            </p>
                            <p>
                                <Button className="text-justify text-center" variant="dark">Signup with Linkedin <Badge variant="primary"><FontAwesomeIcon icon={faLinkedinIn} /></Badge></Button>
                            </p>
                        </Jumbotron>
                    </Col></Row>
            </Fragment>
        );
    }
}

export default SocialApply;
