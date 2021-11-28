import React from 'react';
import Button from 'react-bootstrap/Button';

function ItemDeleteButton(props) {

  return  <Button variant="danger" onClick={props.handleClick}>Usuń</Button>;
  
} 

export default ItemDeleteButton;