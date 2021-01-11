import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import LoginForm from "../components/LoginForm";


class AuthPortal extends Component {
    render() {
        return (
            <Fragment>
                <Menu>
                    <h3 className="text-justify text-center" >User Portal (PWA)</h3>
                    <LoginForm/>
                </Menu>
            </Fragment>
        );
    }
}

export default AuthPortal;
