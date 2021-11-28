import React, { useState } from 'react';
import {Row,Col,Image} from 'react-bootstrap';

function IconPicture(props) {
    return  <Image  src={props.url} alt={props.url_title}  height ="75" width="75"/>

}

export default IconPicture;