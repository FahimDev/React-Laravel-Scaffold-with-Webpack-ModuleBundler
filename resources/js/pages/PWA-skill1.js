import React, {Component, Fragment} from 'react';
import EditSkill from "../components/EditSkillPWA";
class PwaSkill1 extends Component {

    constructor({match}) {
        super();
        this.state={
            updateID:match.params.editID
        }
    }

    render() {
        return (
            <Fragment>
                <br/>
                   <EditSkill id={this.state.updateID}/>
            </Fragment>
        );
    }
}

export default PwaSkill1;
