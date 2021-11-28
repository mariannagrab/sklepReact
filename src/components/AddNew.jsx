import React, {useState} from 'react';
import ItemProperty from "./ItemProperty";
import ItemAvSelect from "./ItemAvSelect";
import SubmitButton from "./SubmitButton";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import SubjectLabel from "./SubjectLabel";
function AddNew(props) {
    const [newItem, setNewItem] = useState( {name: ""
      , url: ""
      , url_title: ""
      , descn: ""
      , color: ""
      , price: ""
      , available: ""
    });
    function saveInput(event) {
      const { name, value } = event.target;
      setNewItem(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
    function saveAvInput(event) {
      const { value } = event.target;
      setNewItem(prevState => ({
        ...prevState,
        available: (value === "available") ? true : false
      }));
    }
  function submit(event) {
    event.preventDefault();
    props.handleSubmit(newItem);
  }
  return <Container><SubjectLabel text="Dodaj nowy przedmiot" />
    <Form className="d-grid mt-4" onSubmit={submit}>
      <ItemProperty edit={true} label="Nazwa" type="text" value={newItem.name} name="name" savePropInput={saveInput} />
      <ItemProperty edit={true} label="Opis" type="text" value={newItem.descn} name="descn" savePropInput={saveInput} />
      <ItemProperty edit={true} label="Kolor" type="text" value={newItem.color} name="color" savePropInput={saveInput} />
      <ItemProperty edit={true} label="Cena" type="number" value={newItem.price} name="price" savePropInput={saveInput} />
      <ItemProperty edit={true} label="Url" type="text" value={newItem.url} name="url" savePropInput={saveInput} />
      <ItemAvSelect edit={true} value={newItem.available} saveAvInput={saveAvInput} />
      <Container className="d-grid gap-4 mt-3">
      <SubmitButton value="Dodaj" />
      </Container>
    </Form>
  </Container>;
}

export default AddNew;