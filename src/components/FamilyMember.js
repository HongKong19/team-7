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

const Example = (props) => {
  return (

  <div style={{margin:'50px'}}>
    <Table dark>
      <thead>
        <tr>
          <th colspan="2">Otto&#39;s Family</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" style={{flex:0.1}}>1</th>
          <td>Mark Otto</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Rose Otto</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry Otto</td>
        </tr>
      </tbody>
    </Table>

    <Link to= '/Database'> 
      <Button>Statistics</Button>
    </Link>
  </div>
  );

  
 
}

export default Example;