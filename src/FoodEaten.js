import React from 'react';
import { Table } from 'reactstrap';

class FoodEaten extends React.Component {
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
                <th>Food:</th>
                <th>Quantity (g) :</th>
                <th>Calorie Count:</th>
                </tr>
            </thead>
            <tbody>
                {this.props.data.map((item, key) =>
                    <tr>
                    <th scope="row">{key}</th>
                    <td>{item.food}</td>
                    <td>{item.quantity}</td>
                    <td>{item.calorie}</td>
                    </tr>
            )}
               <tr>
                    <th scope="row">Total Calorie Count:</th>
                    <td></td>
                    <td></td>
                    <td>{this.props.calorie_consumed}</td>
                 </tr>
            </tbody>
            </Table>
        );
    }
}

export default FoodEaten;
