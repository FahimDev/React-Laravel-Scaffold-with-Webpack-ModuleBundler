import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import SocialApply from "../components/SocialApply";

class SocialSignup extends Component {
    render() {
        return (
            <Fragment>
                <Menu>
                    <SocialApply/>
                </Menu>
            </Fragment>
        );
    }
}

export default SocialSignup;
