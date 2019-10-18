import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import CurrentTasks from "./CurrentTasks";

class PersonalGoals extends React.Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
        this.state = { 
            data:  [{'task':'running', 'time': '5 hrs'}, {'task':'pilates', 'time': '1 hr'}, {'task':'stretching', 'time': '2 hrs'}],
            task : "",
            time: ""
        };
      };

    componentDidMount(){
        this.setState({
        data: [{'task':'Running', 'time': '5 hours'}, {'task':'Pilates', 'time': '1 hour'}, {'task':'Stretching', 'time': '2 hours'}]
        });
    }
    
    renderDataList(){
        return(
            <>
            <br/> 
            <div> 
                <h1> Active Tasks </h1>
                <CurrentTasks data = {this.state.data}/> 
            </div>
            </>
        );
    }


    onSubmit(e) {
        e.preventDefault();
        const temp_arr = this.state.data; 
        temp_arr.push({'task':this.state.task, 'time': this.state.time})
        this.setState({
            data: temp_arr 
        });
    }

    updateTaskValue(evt) {
        this.setState({
           task: evt.target.value
        });
      }

    updateTimeValue(evt) {
        this.setState({
            time: evt.target.value
        });
    }


    render() {
        return (
            <> 
            <br/>
            <br/>
            <div>
                Please Input your Goals
            </div>

            <InputGroup>
                <InputGroupAddon addonType="prepend">
                <InputGroupText>Desired Task</InputGroupText>
                </InputGroupAddon>
                <Input value={this.state.task} onChange={evt => this.updateTaskValue(evt)}/>
               
                <br />

                <InputGroupAddon addonType="append">
                <InputGroupText>Time Requirement</InputGroupText>
                </InputGroupAddon>
                <Input value={this.state.time} onChange={evt => this.updateTimeValue(evt)}/>

                <Button color="success"  onClick={this.onSubmit}>Add</Button>
            </InputGroup>

            <br/> 
            {this.renderDataList()}

            </>
         );
    }
}

export default PersonalGoals;
