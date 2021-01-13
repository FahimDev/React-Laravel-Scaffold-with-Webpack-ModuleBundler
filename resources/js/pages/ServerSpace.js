import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import {Link} from "react-router-dom";

class ServerSpace extends Component {
    render() {
        return (
            <Fragment>
                <Menu>
                    <h1> Server Components will be Here </h1>
                    <h2><Link className="NavItem" to="/research-list"> Research</Link></h2>
                </Menu>
            </Fragment>
        );
    }
}

export default ServerSpace;
