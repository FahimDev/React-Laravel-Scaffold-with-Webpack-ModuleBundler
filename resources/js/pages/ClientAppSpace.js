import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class ClientAppSpace extends Component {
    render() {
        return (
            <Fragment>
                <Menu>
                    <h1> This is Client Mobile Application Space </h1>
                    <h2><Link className="NavItem" to="/skill"> Qualification</Link></h2>
                    <h2><Link className="NavItem" to="/hall-of-fame"> Hall of Fame</Link></h2>
                </Menu>
            </Fragment>
        );
    }
}

export default ClientAppSpace;
