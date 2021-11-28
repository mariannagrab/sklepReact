import React, { useState } from 'react';
import items from "../items.js";
import Item from "./Item";
import Filter from "./Filter";
import Sort from "./Sort";
import AddNew from './AddNew.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubjectLabel from "./SubjectLabel";

function Body() {
  const [itemList, setItemList] = useState(items);
  const [sortType, setSortType] = useState('name');
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  function deleteItem(id) {
    console.log(id);
    setItemList(itemList.filter((value, index) => id !== index));
  }
  function changeItem(id, name, descn, color, price, url, available) {
    // copying the old datas array
    let newArr = [...itemList];
    // changing one element
    newArr[id].name = name;
    newArr[id].descn = descn;
    newArr[id].color = color;
    newArr[id].price = price;
    newArr[id].url = url;
    newArr[id].available = available;
    setItemList(newArr);

  }
  function updatedKey() {
    return Math.floor(Math.random() * 1000) + 1;
  }

  function displayItems() {
    // sort by name
    let filteredList = itemList;
    if (sortType === "name") {
      itemList.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    } else if (sortType === "price") {
      // sort by price
      itemList.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
    } else if (sortType === "color") {
      // sort by price
      itemList.sort((a, b) => (a.color > b.color) ? 1 : ((b.color > a.color) ? -1 : 0));
    } else if (sortType === "available") {
      // sort by price
      itemList.sort((a) => (a.available) ? -1 : 1);
    };
    if (min !== "") {
      filteredList = filteredList.filter((item) => (item.price >= min));
    };
    if (max !== "") {
      filteredList = filteredList.filter((item) => (item.price <= max));
    };
    return filteredList.map((item, index) => {
      return <Item
        key={updatedKey()}
        id={index}
        name={item.name}
        descn={item.descn}
        color={item.color}
        available={item.available}
        price={item.price}
        url_title={item.url_title}
        url={item.url}
        ifDelete={deleteItem}
        ifChange={changeItem}
      />;
    })
  }

  function applyFilter(value, name) {
    if (name === "minPrice") {
      setMin(value);
    } else {
      setMax(value);
    }
  }
  function applySortType(value) {
    setSortType(value);
  }
  function addNewItem(value) {
    setItemList([...itemList, {
      name: value.name,
      descn: value.desc
      , price: parseInt(value.price)
      , url: value.url
      , urltitle: value.urltitle
      , color: value.color
      , available: value.available
    }]);
  }
  return <Container fluid className='mt-5'>
    <Container>
      <Row>
        <Col md={6}>
          <SubjectLabel text="Lista przedmiotów" />
          <Sort sortType={applySortType} />
          <Filter onValueFilled={applyFilter} />
          <Container className='mt-3'>
            {displayItems()}
          </Container>
        </Col>
        <Col md={6}>
          <AddNew handleSubmit={addNewItem} />
        </Col>
      </Row>
    </Container>
  </Container>;
}

export default Body;