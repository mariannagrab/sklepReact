import React from 'react';
import Button from 'react-bootstrap/Button';


function ItemButton(props) {

  return  <Button className="m-2" variant="secondary" type="submit" onClick={props.handleClick}>{props.label}</Button>
  
} 

export default ItemButton;