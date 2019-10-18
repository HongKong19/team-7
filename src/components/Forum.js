import React from 'react';
import { Table } from 'reactstrap';
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
          <th>Title</th>
          <th>Posted by</th>
          <th>Last Replied</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Link to='/forumExample'>
            <td style={{color:'white'}}>Anyone wanna swim tgt?</td>
          </Link>
          <td>Mark Otto</td>
          <td>3 mins ago</td>
          <td>Exercise</td>
        </tr>
        
        <tr>
          <td>My fav vegetarian dish! (recipe inside)</td>
          <td>Eric Wai</td>
          <td>10 mins ago</td>
          <td>Diet</td>
        </tr>
        <tr>
          <td>How I get rid of high blood pressure</td>
          <td>Larry Otto</td>
          <td>1 hr ago</td>
          <td>Stories</td>
        </tr>
      </tbody>
    </Table>
  </div>
  );

  
 
}

export default Example;