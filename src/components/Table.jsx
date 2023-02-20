import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Table.css";
import { setDelete, setSearch } from "../slices/eployersSlice";

const Table = () => {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();
  const eployers = useSelector((state) => state.eployersSlice.items);
  const searchs = useSelector((state) => state.eployersSlice.searchs);
  console.log(searchs);
  const deletItem = (e) => {
    dispatch(setDelete(e.target.value));
  };

  const search = () => {
    dispatch(setSearch({ name: value }));
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
          {eployers.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.surename}</td>
                <td>{item.status}</td>
                <td>{item.contact}</td>
                <td>
                  <button className="yellow btn btn-warning ">Изменить</button>
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
    </div>
  );
};

export default Table;
