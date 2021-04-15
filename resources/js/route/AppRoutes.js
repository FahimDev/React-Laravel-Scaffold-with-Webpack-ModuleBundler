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
import addFame from "../pages/EditFame";
import editFame from "../pages/UpdateFame";
import pwaLog from "../pages/PWAlog";
import pwaFame from "../pages/PWA-fame";
import pwaEditFame from "../pages/PWA-fame1";
import pwaAddFame from "../pages/PWA-fame2";

import pwaSkill from "../pages/PWA-skill";
//import pwaSkill from "../components/HallOfFameCompo";
//import pwaEditSkill from "../components/UpdateFamePWA";
//import pwaAddSkill from "../components/EditFamePWA";
//<Route exact path="/pwa-log-skill" component={pwaLog}/>
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
                    <Route exact path="/add-hall-of-fame" component={addFame}/>
                    <Route exact path="/edit-hall-of-fame/:editID" component={editFame}/>

                    <Route exact path="/pwa-log-fame" component={pwaLog}/>
                    <Route exact path="/pwa-fame0" component={pwaFame}/>
                    <Route exact path="/pwa-fame1/:editID" component={pwaEditFame}/>
                    <Route exact path="/pwa-fame2" component={pwaAddFame}/>

                    <Route exact path="/pwa-log-skill" component={pwaLog}/>
                    <Route exact path="/pwa-skill0" component={pwaSkill}/>
                    <Route exact path="/pwa-skill1/:editID" component={pwaEditFame}/>
                    <Route exact path="/pwa-skill2" component={pwaAddFame}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoutes;
