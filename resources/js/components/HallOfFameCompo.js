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

    render() {
        if(this.state.isLoading==true){
            return (
                <Menu>
                    <Container>
                        <LoadingDiv/>
                    </Container>
                </Menu>
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
                    <FontAwesomeIcon icon={faArrowAltCircleRight} /> {TnC.title}  <sub> {TnC.institution} [{TnC.instructor}] </sub> <Button href={`/del-fame/${TnC.id}`} variant="danger"><FontAwesomeIcon icon={faTrash} /></Button><Button href={`/edit-hall-of-fame/${TnC.id}`} variant="warning"><FontAwesomeIcon icon={faEdit} /></Button> <br/>
                    </span>
            })

            const Awards = AnR.map(AnR=> {
                return <span>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} /> {AnR.title}: <i>{AnR.prizePosition}</i> <sub> {AnR.prizeCategory} </sub> <Button href={`/del-fame/${AnR.id}`} variant="danger"><FontAwesomeIcon icon={faTrash} /></Button><Button href={`/edit-hall-of-fame/${AnR.id}`} variant="warning"><FontAwesomeIcon icon={faEdit} /></Button>  <br/>
                    </span>
            })
            const Members = Member.map(Member=> {
                return <span>
                        <ListGroup.Item><FontAwesomeIcon icon={faArrowAltCircleRight} /> {Member.membership} <Button href={`/del-fame/${Member.id}`} variant="danger"><FontAwesomeIcon icon={faTrash} /></Button><Button href={`/edit-hall-of-fame/${Member.id}`} variant="warning"><FontAwesomeIcon icon={faEdit} /></Button> </ListGroup.Item>
                    </span>
            })

            const Publications = Publication.map(Publication=> {
                return <span>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} /> {Publication.title}: <i>{Publication.institution}</i> <sub> {Publication.membership} </sub> <Button href={`/del-fame/${Publication.id}`} variant="danger"><FontAwesomeIcon icon={faTrash} /></Button><Button href={`/edit-hall-of-fame/${Publication.id}`} variant="warning"><FontAwesomeIcon icon={faEdit} /></Button>  <br/>
                    </span>
            })


            //------------------------------------------
            return (
                <Fragment>
                    <Menu>
                        <Container fluid={true} className="p-0 mt-5" >
                            <Row>
                                <Link to="/add-hall-of-fame"><Button variant="primary"><FontAwesomeIcon icon={faPlusCircle} /> <span> Add New </span> </Button></Link>
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
                    </Menu>
                </Fragment>
            );
        }

    }
}

export default HallOfFameCompo;
