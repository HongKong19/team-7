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
    <div >
     <Link to= '/familyMember'>  
     <Button variant="primary" size="lg" block>Otto's Family</Button> </Link>
      <br></br>
      <Button variant="primary" size="lg" block>Wai's Family</Button>
    </div>
  );

  
 
}

export default Example;