import React, {Component, Fragment} from 'react';
import Axios from "axios";
import Menu from "../components/Menu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import WentWrong from "../components/wentWrong";
import LoadingDiv from "../components/loadingDiv";

class ResearchList extends Component {
    constructor() {
        super();
        this.state={
            dataList:[],
            isLoading:true,
            isError:false,
            rowDataID:"",
            deleteBtnText:"Delete"
        }


    }
    componentDidMount() {
        Axios.get('/research').then((response)=>{
            if(response.status==200){
                this.setState({dataList:response.data,isLoading:false,isError:false})
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
                <Menu title="Contact">
                    <Container>
                        <LoadingDiv/>
                    </Container>
                </Menu>
            )
        }
        else if(this.state.isError==true){
            return (
                <Menu title="Contact">
                    <Container>
                        <WentWrong/>
                    </Container>
                </Menu>
            )
        }else{



            const data = this.state.dataList;
            const columns=[
                {dataField: 'id', text: 'ID'},
                {dataField: 'title', text: 'Title'},
                {dataField: 'summary', text: 'Summary'},
                {dataField: 'Details', text: 'Details'},
            ]
            const selectRow={
                mode:'radio',
                onSelect:(row,isSelect,rowIndex)=>{
                    this.setState({rowDataID:row['id']})
                }
            }

            return (
                <Fragment>
                    <Menu>
                        <Container fluid={true}>
                            <Row>
                                <Col md={12} sm={12} lg={12}>
                                    <Card>
                                        <Card.Body>
                                            <button className="normal-btn my-2 btn">{this.state.deleteBtnText}</button>
                                            <BootstrapTable
                                                keyField='id'
                                                data={ data }
                                                columns={ columns }
                                                selectRow={selectRow}
                                                pagination={ paginationFactory() }>
                                            </BootstrapTable>
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

export default ResearchList;
