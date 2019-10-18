import React from 'react';
import { Button } from 'reactstrap';
import { Picture } from 'react-responsive-picture';
const Example = (props) => {
  return (
    <div>
      <Button color="primary" size="lg" block>CLIENTS</Button>{' '} <br></br><br></br>

        <Button color="secondary" size="lg" block>ADMINS</Button>{' '}<br></br><br></br>
        <Picture src="./image/cover.png" />

    </div>
  );
}

export default Example;