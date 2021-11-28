import React from 'react';
import { Form, Row ,Col,Container} from 'react-bootstrap';
function ItemAvSelect(props) {
    return (<Container>
        {(!(props.edit) && !(props.value)) && <p>Produkt niedostępny</p>}
        {(props.edit) && <Form.Group as={Row} className="mb-3" controlId="select">
        <Form.Label column sm="2">Dostępność</Form.Label>
        <Col  sm="10">
        <Form.Select name="available" value={(props.value) ? "available" : "notavailable"} onChange={(event) => props.saveAvInput(event)} >
            <option value="available">Dostępny</option>
            <option value="notavailable">Niedostępny</option>
            </Form.Select>
            </Col></Form.Group>}
   </Container>
    )
}

export default ItemAvSelect;
