import React from 'react';
import { Table } from 'reactstrap';

class CurrentTasks extends React.Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef();
      };


    render() {
        return (
            <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>Task:</th>
                <th>Time Requirement:</th>
                </tr>
            </thead>
            <tbody>
                {this.props.data.map((item, key) =>
                    <tr>
                    <th scope="row">{key}</th>
                    <td>{item.task}</td>
                    <td>{item.time}</td>
                    </tr>
            )}
            </tbody>
            </Table>
        );
    }
}

export default CurrentTasks;
