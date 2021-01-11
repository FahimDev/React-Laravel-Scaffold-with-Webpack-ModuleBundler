import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import RecoverPassword from "../components/RecoverPassword";

class RecovPass extends Component {
    render() {
        return (
            <Fragment>
                <Menu>
                    <RecoverPassword/>
                </Menu>
            </Fragment>
        );
    }
}

export default RecovPass;
