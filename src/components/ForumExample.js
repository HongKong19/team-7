import React from 'react';
import { Table, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

Table.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    size: PropTypes.string,
    bordered: PropTypes.bool,
    borderless: PropTypes.bool,
    striped: PropTypes.bool,
    dark: PropTypes.bool,
    hover: PropTypes.bool,
    responsive: PropTypes.bool,
    // Custom ref handler that will be assigned to the "ref" of the inner <table> element
    innerRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
      PropTypes.object
    ])
    };

const divStyle = {
  width: '80%',
  height: '80%', 
  fontSize: '15%'
};

const Example = (props) => {
  return (
    <div style={{margin:'50px'}}>
        <Table dark>
            <thead>
                <tr>
                    <td scope="row" style={{flex:0.1}}>John</td>
                    <td>Gonna swim this night at 8. Anyone want to join?<br></br><br></br><br></br></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>You</td>
                    <td><input type="text" name="name" style= {{width:"80%",height:"150px"}}/><br></br>
                    <Button>Submit</Button></td>
                </tr>
            </tbody>
        </Table>
    </div>
  );

  
 
}

export default Example;