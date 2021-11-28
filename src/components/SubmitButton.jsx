import React from 'react';
import Button from 'react-bootstrap/Button';


function SubmitButton(props) {

  return  <Button variant="secondary"  type="submit" >{props.value}</Button>
  
} 

export default SubmitButton;