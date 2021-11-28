import React from 'react';
import FilterInputField from "./FilterInputField";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Filter(props) {
  return <Container className="mb-3" as={Row} >
    <FilterInputField label="Cena od" name="minPrice" onFilled={props.onValueFilled} />
    <FilterInputField label="Cena do" name="maxPrice" onFilled={props.onValueFilled} />
  
</Container>;
} 

export default Filter;