import React, {Component, Fragment} from 'react';
import {Nav,Navbar,NavLink} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBars,
    faHome,
    faEnvelope,
    faBookOpen,
    faCode,
    faFolder,
    faComment,
    faPowerOff,
    faKey, faUserAstronaut, faUserCog, faSatellite, faSatelliteDish, faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {faInternetExplorer, faWeibo} from "@fortawesome/free-brands-svg-icons";




class Menu extends Component {

    constructor(props) {
        super();
        this.state={
            sideNav:false,
            sideNavClass:"sidenavClose",
            NavText:"d-none",
            mainDivOverlay:"main-overlay-close"
        }

        this.showHideSideNav=this.showHideSideNav.bind(this);
    }


    showHideSideNav(){
        if(this.state.sideNav===false){
            this.setState({sideNav:true,NavText:"",sideNavClass:"sidenavOpen",mainDivOverlay:"main-overlay-open"})
        }
        else {
            this.setState({sideNav:false,NavText:"d-none",sideNavClass:"sidenavClose",mainDivOverlay:"main-overlay-close"})
        }
    }


    render() {
        return (
            <Fragment>
                <title>{this.props.title}</title>
                <Navbar  expand="lg" className="fixed-top shadow-sm bg-white mb-5 py-3" variant="light" bg="white">
                    <Navbar.Brand onClick={this.showHideSideNav}  href="#"><FontAwesomeIcon icon={faBars} /></Navbar.Brand>
                    <b>Mobile Application Support</b>
                </Navbar>

                <div className={this.state.sideNavClass}>
                    <Nav.Link href="https://glitch-innovations.com/" > <FontAwesomeIcon icon={faInternetExplorer} /> <span className={this.state.NavText}>WEB PAGE</span> </Nav.Link>
                    <NavLink> <Link className="NavItem" to="/"> <FontAwesomeIcon icon={faHome} /> <span className={this.state.NavText}>Home</span> </Link></NavLink>
                    <NavLink> <Link className="NavItem" to="/satellite"> <FontAwesomeIcon icon={faSatellite} /> <span className={this.state.NavText}>Mobile Service Zone</span> </Link></NavLink>
                    <NavLink> <Link className="NavItem" to="/ground-station"> <FontAwesomeIcon icon={faSatelliteDish} /> <span className={this.state.NavText}>Applications</span> </Link></NavLink>
                    <NavLink> <Link className="NavItem" to="/social-log"><FontAwesomeIcon icon={faUserPlus} /> <span className={this.state.NavText}>Social Signup</span></Link></NavLink>
                    <NavLink> <Link className="NavItem" to="/astronaut"> <FontAwesomeIcon icon={faUserAstronaut} /> <span className={this.state.NavText}>User Portal (PWA)</span> </Link></NavLink>
                    <NavLink> <Link className="NavItem" to="/dev-portal"> <FontAwesomeIcon icon={faCode} /> <span className={this.state.NavText}>Portal for Developers</span> </Link> </NavLink>
                    <Nav.Link> <Link className="NavItem" to="/recover-auth"> <FontAwesomeIcon icon={faKey} /> <span className={this.state.NavText}>Recover Password</span> </Link> </Nav.Link>
                </div>
                <div onClick={this.showHideSideNav} className={this.state.mainDivOverlay}>

                </div>

                <div className="mainDiv">
                    {this.props.children}
                </div>


            </Fragment>
        );
    }
}

export default Menu;


/*
*                   <NavLink> <FontAwesomeIcon icon={faHome} /> <span className={this.state.NavText}>Home</span> </NavLink>
                    <NavLink> <FontAwesomeIcon icon={faEnvelope} /> <span className={this.state.NavText}>Contact</span></NavLink>
                    <NavLink> <FontAwesomeIcon icon={faBookOpen} /> <span className={this.state.NavText}>Courses</span></NavLink>
                    <NavLink> <FontAwesomeIcon icon={faCode} /> <span className={this.state.NavText}>Projects</span></NavLink>
                    <NavLink> <FontAwesomeIcon icon={faFolder} /> <span className={this.state.NavText}>Services</span></NavLink>
                    <NavLink> <FontAwesomeIcon icon={faComment} /> <span className={this.state.NavText}>Review</span></NavLink>
                    *
* */
