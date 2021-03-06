import React, {Component, Fragment} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import Axios from "axios";
import {
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faBackward, faIdCard, faIdCardAlt,
    faPlusSquare,
    faStepBackward
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import {faCreativeCommonsSamplingPlus} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import Badge from "react-bootstrap/Badge";

class EditFamePwa extends Component {
    /*
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
    */
    constructor(props){
        super();
        this.state = {
            type: "t&c",
            flexOne:"",
            flexTwo:"",
            flexThree:"",
        };
        this.onChangeFromOne = this.onChangeFromOne.bind(this);
        this.onChangeFromTwo = this.onChangeFromTwo.bind(this);
        this.onChangeFromThree = this.onChangeFromThree.bind(this);
        this.onAddClick = this.onAddClick.bind(this);
    }
    onChangeFromOne(event){
        let flexOne = event.target.value;
        this.setState({flexOne:flexOne});
        //------------------>Val_from_Constructor:LocalVal
        console.log(flexOne);
    }

    onChangeFromTwo(event){
        let flexTwo = event.target.value;
        this.setState({flexTwo:flexTwo});
        console.log(flexTwo);
    }

    onChangeFromThree(event){
        let flexThree = event.target.value;
        this.setState({flexThree:flexThree});
        console.log(flexThree);
    }

    onChangeType(event) {
        //console.log(event.target.value);
        //this.type = event.target.value;
        this.setState({type: event.target.value});
    }

    onAddClick(event){

        let type = this.state.type;
        let printData;

            if(type == 't&c'){
                printData = "Training & Certification";
            }else if(type == 'a&r'){
                printData = "Award & Recognition";
            }else if(type == 'pub'){
                printData = "Publication";
            }else{
                printData = "Membership";
            }


        let flexOne = this.state.flexOne;
        let flexTwo = this.state.flexTwo;
        let flexThree = this.state.flexThree;


        let path = "/add-fame";

        let config = {
            Headers:{'content-type': 'multipart/form-data'}
        }

        let formData = new FormData();
        formData.append('type',type);
        formData.append('flexOne',flexOne);
        formData.append('flexTwo',flexTwo);
        formData.append('flexThree',flexThree);

        Axios.post(path,formData,config).then(function (response) {
            if(response.data == "200"){
                alert("New "+printData+" information has been added.");
                window.location.href="/hall-of-fame";
            }else if (response.data == "304"){
                alert("New "+printData+" information is not added! Please, try again.");
            }
            else if (response.data == "400"){
                alert("Sorry! Bad request. Please, try again.");
            }else if (response.data == "401"){
                alert("Authorization problem! Please, login & try again.");
            }else{
                alert("ERROR UNKNOWN (TEAM GLITCH).");
            }
        }).catch(function (error) {
                alert(error);
        });
        event.preventDefault();
    }

    render() {
        const type = this.state.type;
        let formOne;
        let formTwo;
        let formThree;
        if (type == "t&c") {
            formOne =  <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label> Training Title</Form.Label>
                            <Form.Control onChange={this.onChangeFromOne} type="text" placeholder="Training Title" />
                        </Form.Group>;
            formTwo = <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Institute</Form.Label>
                            <Form.Control onChange={this.onChangeFromTwo} type="text" placeholder="Name of the institute or authority" />
                        </Form.Group>;
            formThree = <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Instructor</Form.Label>
                            <Form.Control onChange={this.onChangeFromThree} type="text" placeholder="Name of your instructor" />
                        </Form.Group>;

        } else if(type == "a&r") {
            formOne = <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Award Title</Form.Label>
                <Form.Control onChange={this.onChangeFromOne} type="text" placeholder="Award Title" />
                </Form.Group>;
            formTwo = <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Position</Form.Label>
                <Form.Control onChange={this.onChangeFromTwo} type="text" placeholder="The position you have achieved" />
            </Form.Group>;
            formThree = <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Contest</Form.Label>
                <Form.Control onChange={this.onChangeFromThree} type="text" placeholder="Name or type of your contest/event" />
            </Form.Group>;

        }else if(type == "member") {
            formOne = <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Membership Title</Form.Label>
                <Form.Control onChange={this.onChangeFromOne} type="text" placeholder="Membership Title" />
            </Form.Group>;
            formTwo = <Badge variant="dark"><FontAwesomeIcon icon={faIdCardAlt} /></Badge>;
            formThree = <Badge variant="dark"><FontAwesomeIcon icon={faIdCard} /></Badge>;

        }else{
            formOne = <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Publication Title</Form.Label>
                <Form.Control onChange={this.onChangeFromOne} type="text" placeholder="The title name of your article/journal/conference paper" />
            </Form.Group>;
            formTwo = <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Publisher</Form.Label>
                <Form.Control onChange={this.onChangeFromTwo} type="text" placeholder="The name of the publisher" />
            </Form.Group>;
            formThree = <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Important Links</Form.Label>
                <Form.Control onChange={this.onChangeFromThree} type="url" placeholder="Related URL of your publication" pattern="https?://.+" required />
            </Form.Group>;
        }
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col className="text-justify" lg={12} md={12} sm={12}>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Achievement Type</Form.Label>
                                    <Form.Control onChange={this.onChangeType.bind(this)} as="select">
                                        <option  value="t&c" >Training & Certification</option>
                                        <option  value="a&r">Awards & Recognition</option>
                                        <option  value="pub">Publication</option>
                                        <option  value="member">Membership</option>
                                    </Form.Control>
                                </Form.Group>

                                    {formOne}

                                    {formTwo}

                                    {formThree}


                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={4} sm={4}>
                            <Link to="/hall-of-fame"><Button href='' size="lg" variant="danger" block><FontAwesomeIcon icon={faArrowAltCircleLeft} /> <span> Cancel </span></Button></Link>
                        </Col>
                        <Col lg={8} md={8} sm={8}>
                            <Button href='' size="lg" onClick={this.onAddClick} variant="success" block><FontAwesomeIcon icon={faPlusSquare} /> <span> Submit </span></Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default EditFamePwa;
