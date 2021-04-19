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

class AddSkillPwa extends Component {

    constructor(props){
        super();
        this.state = {
            type: "expSum",
            flexOne:"",
            flexTwo:"",
            flexThree:"",
            flexFour:"",
            expSummary:"",
        };
        this.onChangeFromOne = this.onChangeFromOne.bind(this);
        this.onChangeFromTwo = this.onChangeFromTwo.bind(this);
        this.onChangeFromThree = this.onChangeFromThree.bind(this);
        this.onChangeFromFour = this.onChangeFromFour.bind(this);
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

    onChangeFromFour(event){
        let flexFour = event.target.value;
        this.setState({flexFour:flexFour});
        console.log(flexFour);
    }

    onChangeType(event) {
        //console.log(event.target.value);
        //this.type = event.target.value;
        this.setState({type: event.target.value});
    }

    onAddClick(event){

        let type = this.state.type;
        let printData;

        if(type == 'PE'){
            printData = "Project Experience";
        }else if(type == 'S&T'){
            printData = "Software/Tool";
        }else if(type == 'Skill'){
            printData = "Skill set";
        }else{
            printData = "Experience Summary";
        }


        let flexOne = this.state.flexOne;
        let flexTwo = this.state.flexTwo;
        let flexThree = this.state.flexThree;
        let flexFour = this.state.flexFour;

        let path = "/add-skill";

        let config = {
            Headers:{'content-type': 'multipart/form-data'}
        }

        let formData = new FormData();
        formData.append('type',type);
        formData.append('flexOne',flexOne);
        formData.append('flexTwo',flexTwo);
        formData.append('flexThree',flexThree);
        formData.append('flexFour',flexFour);

        //console.log(formData.);

        Axios.post(path,formData,config).then(function (response) {
            if(response.data == "200"){
                alert("New "+printData+" information has been added.");
                if(window.location.pathname == "/pwa-skill2"){
                    window.location.href="/pwa-skill0";
                }else {
                    window.location.href="/qualification";
                }
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
    componentDidMount(){
        Axios.get('/get-exp-summery').then((response)=>{
            if(response.status==200){
                this.setState({expSummary:response.data.expSummary,isLoading:false,isError:false})
                console.log(response.data.expSummary);
            }
            else{
                this.setState({isLoading:false,isError:true})
            }
            console.log(response);
        }).catch((error)=>{
            this.setState({isLoading:false,isError:true})
        })
    }

    render() {
        const type = this.state.type;

        let formOne;
        let formTwo;
        let formThree;
        let formFour;
        if (type == "PE") {
            formOne =  <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label> Project Name</Form.Label>
                <Form.Control onChange={this.onChangeFromOne} type="text" placeholder="Project Name" />
            </Form.Group>;
            formTwo = <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Institute</Form.Label>
                <Form.Control onChange={this.onChangeFromTwo} type="text" placeholder="Name of the institute or authority" />
            </Form.Group>;
            formThree = <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Started at</Form.Label>
                <Form.Control onChange={this.onChangeFromThree} type="date" placeholder="Project starting date" />
            </Form.Group>;
            formFour = <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Ended at</Form.Label>
                <Form.Control onChange={this.onChangeFromFour} placeholder="Project ending date" type="date"/>
            </Form.Group>;

        } else if(type == "S&T") {
            formOne = <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Software & Tools</Form.Label>
                <Form.Control onChange={this.onChangeFromOne} type="text" placeholder="Name of the Software / Tool" />
            </Form.Group>;


        }else if(type == "expSum") {

            formOne = <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Experience Summary</Form.Label>
                <Form.Control onChange={this.onChangeFromOne} value={this.state.expSummary} type="text" as="textarea" rows={3} placeholder="Experience Summary" />
            </Form.Group>;


        }else{
            formOne = <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Skill Title</Form.Label>
                <Form.Control onChange={this.onChangeFromOne} type="text" placeholder="Title name of the skill type" />
            </Form.Group>;
            formTwo = <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Skills</Form.Label>
                <Form.Control onChange={this.onChangeFromTwo} type="text" as="textarea" rows={2} placeholder="Skill one, Skill two, Skill three, etc....." />
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
                                        <option  value="expSum">Experience Summary</option>
                                        <option  value="PE" >Project Experience</option>
                                        <option  value="Skill">Skills</option>
                                        <option  value="S&T">Software & Tools</option>
                                    </Form.Control>
                                </Form.Group>

                                {formOne}

                                {formTwo}

                                {formThree}

                                {formFour}
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={4} sm={4}>
                            <Link to={window.location.pathname == "/pwa-skill2"?"/pwa-skill0":"/qualification"} ><Button href='' size="lg" variant="danger" block><FontAwesomeIcon icon={faArrowAltCircleLeft} /> <span> Cancel </span></Button></Link>
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

export default AddSkillPwa;
