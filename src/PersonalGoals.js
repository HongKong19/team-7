import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class PersonalGoals extends React.Component {

    render() {
        return (
            <> 
            <div>
                Please Input your Goals
            </div>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                <InputGroupText>Place Desired Task</InputGroupText>
                </InputGroupAddon>
                <Input />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="append">
                <InputGroupText>Time Requirement</InputGroupText>
                </InputGroupAddon>
                <Input />
            </InputGroup>
            </>
         );
    }
}

export default PersonalGoals;