import React, {Component, Fragment} from 'react';
import Axios from "axios";
import {Col, Container, Form, Row} from "react-bootstrap";
import LoadingDiv from "./loadingDiv";
import Menu from "./Menu";
import WentWrong from "./wentWrong";
import Alert from "react-bootstrap/Alert";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleLeft, faPlusSquare} from "@fortawesome/free-solid-svg-icons";

class EditSkillPwa extends Component {
    constructor(props){
        super();
        this.state = {

            type: "",
            id:props.id,
            flexOne:"",
            flexTwo:"",
            flexThree:"",
            flexFour:"",
            element:[],
            content:"",
            accessType:"",
            isLoading:true,
            isError:false,
        };

    }


    componentDidMount() {

        var accessType = window.location.pathname;
        console.log(accessType[1]);
        this.setState({accessType:accessType[1]})
        var getID = this.state.id;
        var url = '/get-skills-by-id/'+getID+'';
        console.log("----------->"+url);
        Axios.get(url).then((response)=>{
            if(response.status==200){
                this.setState({element:response.data,isLoading:false,isError:false})
                var obj = response.data;
                var element = obj[0];
                this.setState({type:element.type});
                if(this.state.type == "PE"){
                    this.setState({flexOne:element.experience});
                    this.setState({flexTwo:element.institution});
                    this.setState({flexThree:element.startYear});
                    this.setState({flexFour:element.endYear});
                }else if(this.state.type == "Skill"){
                    this.setState({flexOne:element.skillTitle});
                    this.setState({flexTwo:element.skillList});
                }else{
                    this.setState({flexOne:element.softwareAndTools});
                }
                console.log(element.experience);
            }
            else{
                this.setState({isLoading:false,isError:true})
            }
        }).catch((error)=>{
            this.setState({isLoading:false,isError:true})
        })
    }


    render() {
        if(this.state.isLoading==true){
            return (
                <Container>
                    <LoadingDiv/>
                </Container>
            )
        }
        else if(this.state.isError==true){
            return (
                <Menu>
                    <Container>
                        <WentWrong/>
                    </Container>
                </Menu>
            )
        }else{
            const element = this.state.element;

            const  type = this.state.type;
            let print;

            if(type == 'PE'){
                print = "Project Experience";
            }else if(type == 'Skill'){
                print = "Skills";
            }else{
                print = "Software & Tools";
            }
            let formOne;
            let formTwo;
            let formThree;
            let formFour;

            if (type == "PE") {
                formOne =  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Project Experience</Form.Label>
                    <Form.Control onChange={this.onChangeFromOne} value={this.state.flexOne} type="text" placeholder="Project Experience" />
                </Form.Group>;
                formTwo = <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Institute</Form.Label>
                    <Form.Control onChange={this.onChangeFromTwo} value={this.state.flexTwo} type="text" placeholder="Name of the institute or authority" />
                </Form.Group>;
                formThree = <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Started at</Form.Label>
                    <Form.Control onChange={this.onChangeFromThree} value={this.state.flexThree} type="text" placeholder="The date you started at" />
                </Form.Group>;
                formFour = <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Ended at</Form.Label>
                    <Form.Control type="date" onChange={this.onChangeFromFour} value={this.state.flexFour} placeholder="The date you ended at" />
                </Form.Group>;
                //onChange={this.onChangeFromThree} value={this.state.flexThree}
            } else if(type == "S&T") {
                formOne = <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Software & Tools</Form.Label>
                    <Form.Control onChange={this.onChangeFromOne} value={this.state.flexOne} type="text" placeholder="Software & Tools" />
                </Form.Group>;

            }else{
                formOne = <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Skill Title</Form.Label>
                    <Form.Control onChange={this.onChangeFromOne} value={this.state.flexOne} type="text" placeholder="The title name of your skill" />
                </Form.Group>;
                formTwo = <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Skill Set</Form.Label>
                    <Form.Control onChange={this.onChangeFromTwo} value={this.state.flexTwo} type="text" as="textarea" rows={2} placeholder="Specific skill set: Example 1, Example 2 Example 3 .....etc" />
                </Form.Group>;
            }
            return (
                <Fragment>
                    <Container>
                        <Row>
                            <Col className="text-justify" lg={12} md={12} sm={12}>
                                <Form>
                                    <Form.Label>Achievement Type</Form.Label>
                                    <Alert className="text-center" variant="dark">
                                        {print}
                                    </Alert>
                                    {formOne}

                                    {formTwo}

                                    {formThree}

                                    {formFour}
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4} md={4} sm={4}>
                                <Link to={this.state.accessType == "p"?"/pwa-skill0":"/qualification"}><Button href='' size="lg" variant="danger" block><FontAwesomeIcon icon={faArrowAltCircleLeft} /> <span> Cancel </span></Button></Link>
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
}

export default EditSkillPwa;