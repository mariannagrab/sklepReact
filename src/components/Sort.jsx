import React from 'react';
import {Container,Form,Row, Col} from 'react-bootstrap';

function Sort(props) {
  return <Container className="mb-3" as={Row} >
  <Form.Label column sm="4" style={{textAlign:"right"}} >Sortuj rosnąco po</Form.Label>
  <Col sm="8">
    <Form.Select size="sm" onChange={(event) => props.sortType(event.target.value)}>
      <option value="name">Nazwa</option>
      <option value="price">Cena</option>
      <option value="color">Kolor</option>
      <option value="available">Dostępność</option>
    </Form.Select>
  </Col>
 
</Container>;
} 

export default Sort;