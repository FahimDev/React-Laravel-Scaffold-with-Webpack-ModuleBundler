import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import auth from "../pages/AuthPortal";
import fame from "../pages/Achievement";
import wisdom from "../pages/Qualification";
import clientSpace from "../pages/ClientAppSpace";
import serverSpace from "../pages/ServerSpace";
import landingZone from "../pages/LandingZone";
import devPortal from "../pages/DevPortal";
import recovPass from "../pages/RecovPass";
import social from "../pages/SocialSignup";
import edu from "../pages/Educaion";
import research from "../pages/ResearchList";
import editFame from "../pages/EditFame";

class AppRoutes extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={landingZone}/>
                    <Route exact path="/hall-of-fame" component={fame}/>
                    <Route exact path="/wisdom" component={wisdom}/>
                    <Route exact path="/edu" component={edu}/>
                    <Route exact path="/social-log" component={social}/>
                    <Route exact path="/recover-auth" component={recovPass}/>
                    <Route exact path="/dev-portal" component={devPortal}/>
                    <Route exact path="/satellite" component={serverSpace}/>
                    <Route exact path="/ground-station" component={clientSpace}/>
                    <Route exact path="/astronaut" component={auth}/>
                    <Route exact path="/research-list" component={research}/>
                    <Route exact path="/edit-hall-of-fame" component={editFame}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoutes;
