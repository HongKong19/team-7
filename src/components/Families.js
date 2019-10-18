import React from 'react';
import { Table, Button } from 'reactstrap';
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

const divStyle = {
  width: '80%',
  height: '60%', 
  fontSize: '15%'
};

const Example = (props) => {
  return (
    <div style={divStyle}>
    <Button>Otto Family</Button>
    <br></br>
    <Button>Wai Family</Button>
    </div>
  );

  
 
}

export default Example;