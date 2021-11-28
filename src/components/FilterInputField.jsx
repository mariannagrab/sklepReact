import React from 'react';
import {Form,Col,Row} from "react-bootstrap";
function FilterInputField(props) {
  return <Col sm={6}><Row>
 <Form.Label style={{textAlign:"right"}} column sm="4">{props.label}</Form.Label>
 <Col sm="8">
     <Form.Control className="form-control-sm" type="number" name={props.name} onChange={(event) => props.onFilled(event.target.value,event.target.name)} />
     </Col></Row></Col>
}  

export default FilterInputField;
