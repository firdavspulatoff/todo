import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Table.css";
import { Button, Modal } from "react-bootstrap";
import { setDelete, setSearch, setUpdateItems } from "../slices/eployersSlice";

const Table = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [surename, setSurename] = useState("");
  const [status, setStatus] = useState("");
  const [contact, setContact] = useState("");
  const [value, setValue] = React.useState("");
  const [isInSearch, setIsInSearch] = React.useState(false);
  const dispatch = useDispatch();
  const eployers = useSelector((state) => state.eployersSlice.items);
  const searchs = useSelector((state) => state.eployersSlice.searchs);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    const editeployer = {
      name: name,
      surename: surename,
      status: status,
      contact: contact,
    };

    dispatch(setUpdateItems(editeployer));

    setShow(false);
  };
  const handleShow = (index) => {
    setId(eployers[index].id);
    setName(eployers[index].name);
    setSurename(eployers[index].surename);
    setStatus(eployers[index].status);
    setContact(eployers[index].contact);

    setShow(true);
  };

  const deletItem = (e) => {
    dispatch(setDelete(e.target.value));
  };

  const search = () => {
    dispatch(setSearch({ name: value }));
    setIsInSearch(true);
  };

  const updateItems = () => {
    dispatch(
      setUpdateItems({
        id: id,
        name: name,
        surename: surename,
        status: status,
        contact: contact,
      })
    );
    setShow(false);
  };

  return (
    <div>
      <input
        onInput={(e) => setValue(e.target.value)}
        type="search"
        className="search"
        placeholder="Поиск"
      />
      <button onClick={search}>0</button>

      <table className="table">
        <thead>
          <tr key="">
            <th>Номер</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Направление</th>
            <th>Контакт</th>
            <th>Событие</th>
          </tr>
        </thead>
        <tbody>
          {!isInSearch &&
            eployers.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.surename}</td>
                  <td>{item.status}</td>
                  <td>{item.contact}</td>
                  <td>
                    <button
                      onClick={() => handleShow(index)}
                      className="yellow btn btn-warning "
                    >
                      Изменить
                    </button>
                    <button
                      value={item.id}
                      onClick={deletItem}
                      className="red btn btn-danger"
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              );
            })}
          {isInSearch &&
            searchs.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.surename}</td>
                  <td>{item.status}</td>
                  <td>{item.contact}</td>
                  <td>
                    <button
                      onClick={handleShow}
                      value={item.id}
                      className="yellow btn btn-warning "
                    >
                      Изменить
                    </button>
                    <button
                      value={item.id}
                      onClick={deletItem}
                      className="red btn btn-danger"
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Изменить</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input
              value={name}
              onInput={(e) => setName(e.target.value)}
              className="form-control my-3"
              type="text"
              placeholder="Введите имя"
            />
            <input
              value={surename}
              onInput={(e) => setSurename(e.target.value)}
              className="form-control my-3"
              type="text"
              placeholder="Введите фамилию"
            />
            <select
              value={status}
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
              value={contact}
              onInput={(e) => setContact(e.target.value)}
              className="form-control my-2"
              type="number"
              placeholder="Введите контакт"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button
            variant="primary"
            onClick={(e) => updateItems(e.target.value)}
          >
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Table;
