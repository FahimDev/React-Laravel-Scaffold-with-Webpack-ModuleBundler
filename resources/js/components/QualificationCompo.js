import React, {Component, Fragment} from 'react';
import Menu from "./Menu";
import {Col, Container, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Axios from "axios";
import WentWrong from "./wentWrong";
import LoadingDiv from "./loadingDiv";
import {faArrowAltCircleRight, faCompactDisc, faEdit, faPlusCircle, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";



class QualificationCompo extends Component {
    constructor(props){
        super();
        this.state={

            SnT:[],
            PE:[],
            Skill:[],

            expSummary: "TEST",
            isLoading:true,
            isError:false,
        }

    }

    componentDidMount() {
        Axios.get('/get-pe').then((response)=>{
            if(response.status==200){
                this.setState({PE:response.data,isLoading:false,isError:false})
            }
            else{
                this.setState({isLoading:false,isError:true})
            }
        }).catch((error)=>{
            this.setState({isLoading:false,isError:true})
        })

        Axios.get('/get-s&t').then((response)=>{
            if(response.status==200){
                this.setState({SnT:response.data,isLoading:false,isError:false})
            }
            else{
                this.setState({isLoading:false,isError:true})
            }
            console.log(response);
        }).catch((error)=>{
            this.setState({isLoading:false,isError:true})
        })

        Axios.get('/get-skill').then((response)=>{
            if(response.status==200){
                this.setState({Skill:response.data,isLoading:false,isError:false})
            }
            else{
                this.setState({isLoading:false,isError:true})
            }
            console.log(response);
        }).catch((error)=>{
            this.setState({isLoading:false,isError:true})
        })

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

    onDelClick(event){
        let delID = event.target.id;
        let delTitle = event.target.name;

        /*
        * For any reason The Delete button can not get the
        * ID & Name when user clicks on the icon
        * But if user Clicks on the RED Button area
        * everything works fine.
        * */

        if (confirm("Are you sure you want to delete ->"+delTitle)) {

            let path = "/del-skill";
            let config = {
                Headers:{'content-type': 'multipart/form-data'}
            }

            let formData = new FormData();
            formData.append('id',delID);
            //alert(type);
            Axios.post(path,formData,config).then(function (response) {
                if(response.data == "200"){
                    alert(delTitle+" has been deleted.");
                    if(window.location.pathname == "/pwa-skill0"){
                        window.location.href="/pwa-skill0";
                    }else {
                        window.location.href="/qualification";
                    }
                }else if (response.data == "304"){
                    alert(delTitle+" is not deleted! Please, try again.");
                }
                else{
                    alert("ERROR UNKNOWN (TEAM GLITCH).");
                }
            }).catch(function (error) {
                alert(error);
            });
            //event.preventDefault();
            console.log('Delete request has been sent.');
        } else {
            // Do nothing!
            console.log('User cancelled the request');
        }

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
            //Expert------------------------------------
            const PE = this.state.PE;
            const SnT = this.state.SnT;
            const Skill = this.state.Skill;
            const ProjExp = PE.map(PE=> {
                return <span>
                          ◌ {PE.experience} <sub> {PE.institution}   [ {PE.startYear} - {PE.endYear} ] </sub>
                            <Button onClick={this.onDelClick} id={PE.id} name={PE.experience} variant="danger">
                                <FontAwesomeIcon id={PE.id} name={PE.experience} icon={faTrash} />
                            </Button>
                            <Button href={window.location.pathname == "/pwa-skill0"?`/pwa-skill1/${PE.id}`:`/edit-qualification/${PE.id}`} variant="warning">
                                <FontAwesomeIcon icon={faEdit} />
                            </Button> <br/>
                    </span>
            })
            const softTools = SnT.map(SnT=> {
                return <span>
                          ◌ {SnT.softwareAndTools}
                            <Button onClick={this.onDelClick} id={SnT.id} name={SnT.softwareAndTools} variant="danger">
                                <FontAwesomeIcon id={SnT.id} name={SnT.softwareAndTools} icon={faTrash} />
                            </Button>
                            <Button href={window.location.pathname == "/pwa-skill0"?`/pwa-skill1/${SnT.id}`:`/edit-qualification/${SnT.id}`} variant="warning">
                                <FontAwesomeIcon icon={faEdit} />
                            </Button> <br/>
                    </span>
            })
            const skills = Skill.map(Skill=> {
                return <span>
                        <b>◌ {Skill.skillTitle} : </b> {Skill.skillList}
                            <Button onClick={this.onDelClick} id={Skill.id} name={Skill.skillList} variant="danger">
                                <FontAwesomeIcon id={Skill.id} name={Skill.skillList} icon={faTrash} />
                            </Button>
                            <Button href={window.location.pathname == "/pwa-skill0"?`/pwa-skill1/${Skill.id}`:`/edit-qualification/${Skill.id}`} variant="warning">
                                <FontAwesomeIcon icon={faEdit} />
                            </Button> <br/>
                    </span>
            })
            //------------------------------------------
            return (
                <Fragment>

                    <Container>
                        <Row>
                            <Link  to={window.location.pathname == "/pwa-skill0"?"/pwa-skill2":"/add-qualification"}><Button variant="primary"><FontAwesomeIcon icon={faPlusCircle} /> <span> Add New </span> </Button></Link>
                            <Col lg={12} md={12} sm={12} >
                                <Card className="textStyle" style={{marginTop:"2rem"}}>
                                    <Card.Header>Qualification</Card.Header>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            <Tabs defaultActiveKey="dash" id="uncontrolled-tab-example">
                                                <Tab eventKey="home" title="Experience Summary">
                                                    <br/>
                                                    {this.state.expSummary}

                                                    <Button href={window.location.pathname == "/pwa-fame0"?`/pwa-fame1/USERNAME`:`/edit-hall-of-fame/USERNAME`} variant="warning">
                                                        <FontAwesomeIcon icon={faEdit} />
                                                    </Button> <br/>
                                                </Tab>
                                                <Tab eventKey="profile" title="Project Experience">
                                                    <br/>
                                                    {ProjExp}
                                                </Tab>
                                                <Tab eventKey="contact" title="Skills" >
                                                    <br/>
                                                    {skills}
                                                </Tab>

                                                <Tab eventKey="soft&tool" title="Software & Tools" >
                                                    <br/>
                                                    {softTools}
                                                </Tab>
                                                <Tab eventKey="dash" title="-o-" >

                                                </Tab>
                                            </Tabs>
                                        </blockquote>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                </Fragment>
            );
        }

    }
}

export default QualificationCompo;
