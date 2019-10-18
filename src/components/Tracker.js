import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

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
    <Table dark>
      <thead>
        <tr>
          <th> </th>
          <th>Medicine Name</th>
          <th>Frequency</th>
          <th>Timing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark Otto</td>
          <td>2 times</td>
          <td>Morning, Night</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Rose Otto</td>
          <td>1 time</td>
          <td>Morning</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry Otto</td>
          <td>4 times</td>
          <td>Every 6 hours</td>
        </tr>
      </tbody>
    </Table>
  );

  
 
}

export default Example;