import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import EditFamePwa from "../components/UpdateFamePWA";

class UpdateFame extends Component {

    constructor({match}) {
        super();
        this.state={
            updateID:match.params.editID
        }

    }

    render() {
        return (
            <Fragment>
                <Menu>
                    <EditFamePwa id={this.state.updateID}/>
                </Menu>
            </Fragment>
        );
    }
}

export default UpdateFame;
