import React, { useState } from 'react';
import { Form, Row ,Col,Container} from 'react-bootstrap';
function ItemProperty(props) {
    const customStyle = {
        fontSize : "20px"
        }

    return (<Container className='mt-2'>
        {(!(props.edit) && (props.name !== "url")) && <p>{props.label + " : "}
        <label style={customStyle}>{" " +props.value}</label>{(props.name === "price") && " zł"}</p>
        }
        {(props.edit) && <Form.Group as={Row} className="mb-3" controlId={props.name}>
        <Form.Label column sm="2">{props.label}</Form.Label>
        <Col sm="10">
        <Form.Control type={props.type} name={props.name} value={props.value} onChange={(event) => props.savePropInput(event)} />
        </Col>
        </Form.Group>
      }
    </Container>
    )
}

export default ItemProperty;