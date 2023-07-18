import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./todo.css";

export default function Todo() {
  const [inputItem, setInputItem] = useState("");
  const [items, setItem] = useState([]);
  function setItemList(e) {
    // console.log(e);
    setInputItem(e.target.value);
  }
  function itemSet(e) {
    setItem((preVal) => {
      return [...preVal, inputItem];
    });
    setInputItem("");
  }

  function delItem(id) {
    alert("deleted");

    setItem((preVal) => {
      console.log("vlaue is \n", preVal);
      return preVal.filter((arr, index) => {
        return id !== index;
      });
    });
  }

  return (
    <>
      <div className="card">
        <h1>Todo List</h1>
        <hr />
        <div className="card-body">
          <input
            type="text"
            value={inputItem}
            placeholder="add an items"
            onChange={setItemList}
          />
          <button className="btn" onClick={itemSet}>
            +
          </button>
          <ol>
            {items.map((value, index) => {
              return (
                <ToDoList
                  text={value}
                  key={index}
                  id={index}
                  onDelete={delItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
