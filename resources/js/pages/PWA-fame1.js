import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import EditFamePwa from "../components/UpdateFamePWA";

class PwaFame1 extends Component {
    constructor({match}) {
        super();
        this.state={
            updateID:match.params.editID
        }
    }
    render() {
        return (
            <Fragment>
                    <EditFamePwa id={this.state.updateID}/>
            </Fragment>
        );
    }
}

export default PwaFame1;
