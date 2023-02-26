import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setItems } from "../slices/eployersSlice";
import uuid from "react-uuid";

const Crud = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [surename, setSurename] = useState("");
  const [status, setStatus] = useState("");
  const [contact, setContact] = useState("");

  const addItem = () => {
    const eployer = {
      id: uuid(),
      name: name,
      surename: surename,
      status: status,
      contact: contact,
    };
    dispatch(setItems(eployer));
  };

  return (
    <form>
      <input
        onInput={(e) => setName(e.target.value)}
        className="form-control my-3"
        type="text"
        placeholder="Введите имя"
      />
      <input
        onInput={(e) => setSurename(e.target.value)}
        className="form-control my-3"
        type="text"
        placeholder="Введите фамилию"
      />
      <select
        onChange={(e) => setStatus(e.target.value)}
        className="form-control my-3"
      >
        <option disabled selected>
          Выберите направление
        </option>
        <option value="front-end">Front-end</option>
        <option value="back-end">Back-end</option>
        <option value="grafic-dizayn">Grafic Dizayn</option>
        <option value="mobile dev">Mobile Developer</option>
      </select>
      <input
        onInput={(e) => setContact(e.target.value)}
        className="form-control my-2"
        type="number"
        placeholder="Введите контакт"
      />
      <button type="reset" onClick={addItem} className="btn btn-primary my-3">
        Добавить
      </button>
    </form>
  );
};

export default Crud;
