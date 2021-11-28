import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IconPicture from "./IconPicture";
import { Container } from 'react-bootstrap';

function Header() {
  return <header>
    <Container className='pt-5'>
      <Row>
        <Col sm={1}>
          <IconPicture url="favicon.ico" url_title="icon" />
        </Col>
        <Col>
          <h1>Sklep meblowy Agata</h1>
        </Col>
      </Row>
    </Container>
  </header>;
}

export default Header;