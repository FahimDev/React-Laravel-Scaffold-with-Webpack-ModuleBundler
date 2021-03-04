import React, {Component, Fragment} from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import {Col, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Axios from "axios";
class RecoverPassword extends Component {

    constructor() {
        super();
        this.state={
            username:"",
            mail:"",
        }
        this.onSubmitLog = this.onSubmitLog.bind(this);
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangeMail = this.onChangeMail.bind(this);
    }

    onChangeUser(event){
        let user = event.target.value;
        this.setState({username:user})
    }

    onChangeMail(event){
        let mail = event.target.value;
        console.log(mail + "<--------------------")
        this.setState({mail:mail})
    }

    onSubmitLog(event){
        let username = this.state.username;
        let mail = this.state.mail;

        console.log(username+mail);
        let url ="/pass-recover";

        Axios.post(url,null,{params:{
                username,
                mail
            }}).then(function (response) {
            if(response.data == "200"){
                alert("Operation Successful! Please, check your email.");
                //window.location.href="/recover-mail";

            }else if (response.data == "401"){
                alert("Wrong mail address!Please, try again.");
            }
            else if (response.data == "404") {
                alert("Unknown user!Please, provide a valid user name.");
            }else if (response.data == "204"){
                alert("Key not found! Please, contact with the Office.");
            }else{
                alert("Error unknown!"+ response.data);
                console.log(response.data);
            }

        }).catch(function (error) {
            alert(error);
        })


        event.preventDefault();
    }

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
                                                                <Form.Control onChange={this.onChangeUser} type="text" placeholder="user name" />
                                                            </Form.Group>

                                                            <Form.Label>Email address</Form.Label>
                                                            <Form.Control onChange={this.onChangeMail} type="email" placeholder="Enter email" />
                                                            <Form.Text className="text-muted">
                                                                Never share your email with anyone else.
                                                            </Form.Text>
                                                        </Form.Group>

                                                        <Button onClick={this.onSubmitLog} variant="primary" type="submit">
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
