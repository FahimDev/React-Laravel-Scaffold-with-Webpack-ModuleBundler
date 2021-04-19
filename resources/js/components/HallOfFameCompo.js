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



class HallOfFameCompo extends Component {
    constructor(props){
        super();
        this.state={
            dataList:[],
            TnC:[],
            AnR:[],
            Member:[],
            Publication:[],
            isLoading:true,
            isError:false,
        }

    }

    componentDidMount() {
        Axios.get('/get-tnc').then((response)=>{
            if(response.status==200){
                this.setState({TnC:response.data,isLoading:false,isError:false})
            }
            else{
                this.setState({isLoading:false,isError:true})
            }
        }).catch((error)=>{
            this.setState({isLoading:false,isError:true})
        })

        Axios.get('/get-anr').then((response)=>{
            if(response.status==200){
                this.setState({AnR:response.data,isLoading:false,isError:false})
            }
            else{
                this.setState({isLoading:false,isError:true})
            }
            console.log(response);
        }).catch((error)=>{
            this.setState({isLoading:false,isError:true})
        })

        Axios.get('/get-pub').then((response)=>{
            if(response.status==200){
                this.setState({Publication:response.data,isLoading:false,isError:false})
            }
            else{
                this.setState({isLoading:false,isError:true})
            }
            console.log(response);
        }).catch((error)=>{
            this.setState({isLoading:false,isError:true})
        })

        Axios.get('/get-member').then((response)=>{
            if(response.status==200){
                this.setState({Member:response.data,isLoading:false,isError:false})

            }
            else{
                this.setState({isLoading:false,isError:true})
            }
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

            let path = "/del-fame";
            let config = {
                Headers:{'content-type': 'multipart/form-data'}
            }

            let formData = new FormData();
            formData.append('id',delID);
            //alert(type);
            Axios.post(path,formData,config).then(function (response) {
                if(response.data == "200"){
                    alert(delTitle+" has been deleted.");
                    if(window.location.pathname == "/pwa-fame0"){
                        window.location.href="/pwa-fame0";
                    }else {
                        window.location.href="/hall-of-fame";
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
            //Award-------------------------------------
            const TnC = this.state.TnC;
            const AnR = this.state.AnR;
            const Member = this.state.Member;
            const Publication = this.state.Publication;

            const Certifications = TnC.map(TnC=> {
                return <span>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} /> {TnC.title}  <sub> {TnC.institution} [{TnC.instructor}] {TnC.year} </sub>
                    <Button onClick={this.onDelClick} id={TnC.id} name={TnC.title} variant="danger">
                        <FontAwesomeIcon id={TnC.id} name={TnC.title} icon={faTrash} />
                    </Button>
                    <Button href={window.location.pathname == "/pwa-fame0"?`/pwa-fame1/${TnC.id}`:`/edit-hall-of-fame/${TnC.id}`} variant="warning">
                        <FontAwesomeIcon icon={faEdit} />
                    </Button> <br/>
                    </span>
            })

            const Awards = AnR.map(AnR=> {
                return <span>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} /> {AnR.title}: <i>{AnR.prizePosition}</i> <sub> {AnR.prizeCategory} {AnR.year} </sub> <Button onClick={this.onDelClick} id={AnR.id} name={AnR.title} variant="danger"><FontAwesomeIcon id={AnR.id} name={AnR.title} icon={faTrash} /></Button><Button href={window.location.pathname == "/pwa-fame0"?`/pwa-fame1/${AnR.id}`:`/edit-hall-of-fame/${AnR.id}`}  variant="warning"><FontAwesomeIcon icon={faEdit} /></Button>  <br/>
                    </span>
            })
            const Members = Member.map(Member=> {
                return <span>
                        <ListGroup.Item><FontAwesomeIcon icon={faArrowAltCircleRight} /> {Member.membership} <Button onClick={this.onDelClick} id={Member.id} name={Member.membership} variant="danger"><FontAwesomeIcon id={Member.id} name={Member.membership}  icon={faTrash} /></Button><Button href={window.location.pathname == "/pwa-fame0"?`/pwa-fame1/${Member.id}`:`/edit-hall-of-fame/${Member.id}`} variant="warning"><FontAwesomeIcon icon={faEdit} /></Button> </ListGroup.Item>
                    </span>
            })

            const Publications = Publication.map(Publication=> {
                return <span>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} /> {Publication.title}: <i>{Publication.institution}</i> <sub> {Publication.membership} </sub> <Button onClick={this.onDelClick} name={Publication.title} id={Publication.id} variant="danger"><FontAwesomeIcon name={Publication.title} id={Publication.id} icon={faTrash} /></Button><Button href={window.location.pathname == "/pwa-fame0"?`/pwa-fame1/${Publication.id}`:`/edit-hall-of-fame/${Publication.id}`} variant="warning"><FontAwesomeIcon icon={faEdit} /></Button>  <br/>
                    </span>
            })


            //------------------------------------------
            return (
                <Fragment>

                        <Container>
                            <Row>
                                <Link  to={window.location.pathname == "/pwa-fame0"?"/pwa-fame2":"/add-hall-of-fame"}><Button variant="primary"><FontAwesomeIcon icon={faPlusCircle} /> <span> Add New </span> </Button></Link>
                                <Col lg={12} md={12} sm={12} >
                                    <Card className="textStyle" style={{marginTop:"2rem"}} >
                                        <Card.Header>Achievement</Card.Header>
                                        <Card.Body>
                                            <blockquote className="blockquote mb-0">
                                                <Tabs defaultActiveKey="dash" id="uncontrolled-tab-example">
                                                    <Tab eventKey="home" title="Training and Certifications">
                                                        <br/>
                                                        {Certifications}
                                                    </Tab>
                                                    <Tab eventKey="profile" title="Awards & Recognitions">
                                                        <br/>
                                                        {Awards}
                                                    </Tab>
                                                    <Tab eventKey="pub" title="Publications">
                                                        <br/>
                                                        {Publications}
                                                    </Tab>
                                                    <Tab eventKey="contact" title="Community Membership" >
                                                        <ListGroup style={{marginTop:"1rem"}} variant="flush">
                                                            <br/>
                                                            {Members}
                                                        </ListGroup>
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

export default HallOfFameCompo;
