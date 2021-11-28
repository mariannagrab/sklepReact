import React, { useState, useEffect } from 'react';
import ItemProperty from "./ItemProperty";
import ItemAvSelect from "./ItemAvSelect";
import ItemButton from "./ItemButton";
import ItemDeleteButton from "./ItemDeleteButton";
import ItemPicture from "./ItemPicture";
import Container from 'react-bootstrap/Container';


function Item(props) {
  const [edit, setEdit] = useState(false);
  const [items, setItems] = useState({
    key: props.id
    , name: props.name
    , url: props.url
    , url_title: props.url_title
    , descn: props.descn
    , color: props.color
    , price: props.price
    , available: props.available
  });
  useEffect(() => {
    setRenderz(!renderz);
  }, []);
  const [renderz, setRenderz] = useState(false);

  function editItem(value) {
    setEdit(value);
  }
  function saveInput(event) {
    const { name, value } = event.target;
    setItems(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  function saveAvInput(event) {
    const { value } = event.target;
    setItems(prevState => ({
      ...prevState,
      available: (value === "available") ? true : false
    }));
  }
  function saveItem() {
    editItem(false);
    props.ifChange(props.id, items.name, items.descn, items.color, items.price, items.url, items.available);
  }

  return (<Container className='p-3 mb-2 bg-light text-dark border rounded'>

    <ItemPicture url={items.url} url_title={items.url_title} />
  
    <ItemProperty edit={edit} label="Nazwa" type="text" value={items.name} name="name" savePropInput={saveInput} />
    <ItemProperty edit={edit} label="Opis" type="text" value={items.descn} name="descn" savePropInput={saveInput} />
    <ItemProperty edit={edit} label="Kolor" type="text" value={items.color} name="color" savePropInput={saveInput} />
    <ItemProperty edit={edit} label="Cena" type="number" value={items.price} name="price" savePropInput={saveInput} />
    <ItemProperty edit={edit} label="Url" type="text" value={items.url} name="url" savePropInput={saveInput} />
    <ItemAvSelect edit={edit} value={items.available} saveAvInput={saveAvInput} />

    <div className="itemButtons" style={{textAlign:"right"}}>
      {(edit) && <ItemButton handleClick={saveItem} label="Zapisz zmiany" />}
      {!(edit) && <ItemButton handleClick={() => editItem(true)} label="Edytuj" />}
      {!(edit) && <ItemDeleteButton handleClick={() => props.ifDelete(props.id)} />}
    </div>
  </Container>);
}

export default Item;