import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import EditFamePwa from "../components/EditFamePWA";

class EditFame extends Component {
    render() {
        return (
            <Fragment>
                <Menu>
                    <EditFamePwa/>
                </Menu>
            </Fragment>
        );
    }
}

export default EditFame;
