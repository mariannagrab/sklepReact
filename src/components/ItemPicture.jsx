import React, { useState } from 'react';
import {Row,Col,Image} from 'react-bootstrap';

function ItemPicture(props) {
    return (<Row >
    <Col className="m-auto">
      <Image className="rounded mx-auto d-block" src={props.url} alt={props.url_title}  height ="150" width="200"/>
      </Col>
    </Row>
    )
}

export default ItemPicture;