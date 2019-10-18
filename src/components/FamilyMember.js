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


    <Table dark style={{margin:10}}>
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
  );

  
 
}

export default Example;