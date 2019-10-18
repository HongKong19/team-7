import React from 'react';
import { Button } from 'reactstrap';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';


const Example = (props) => {
  
 return (
   <>
   <br/>
   <br/>
   <br/>
   <div>
   <Link to ='/login'>
    <Button color="primary" size="lg" block>CLIENTS</Button></Link>{' '} <br></br><br></br>
    <Link to ='/adminlogin'>
    <Button color="secondary" size="lg" block>ADMINS</Button></Link>{' '}<br></br>
   </div>
   </>
 );
}
export default Example;