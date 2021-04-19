import React, {Component} from 'react';
import Menu from "../components/Menu";
import InsertQualification from "../components/AddSkillPWA";

class AddQualification extends Component {
    render() {
        return (
            <Menu>
                <InsertQualification/>
            </Menu>
        );
    }
}

export default AddQualification;
