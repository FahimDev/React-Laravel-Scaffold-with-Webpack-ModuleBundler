import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";

class ClientAppSpace extends Component {
    render() {
        return (
            <Fragment>
                <Menu>
                    <h1> This is Client Mobile Application Space </h1>
                    <h2> Qualification </h2>
                    <h2> Hall of Fame </h2>
                </Menu>
            </Fragment>
        );
    }
}

export default ClientAppSpace;
