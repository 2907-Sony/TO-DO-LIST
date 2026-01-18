import React, { useState } from "react";
import ToDoItem from "./toDoItem";

function App() {
  const [newInput, setNewInput] = useState("");
  const [newItems, setItems] = useState([]);

  function handleInput(event) {
    const newValue = event.target.value;
    setNewInput(newValue);
  }

  function setInputs() {
    setItems((prevValue) => {
      return [...prevValue, newInput];
    });
    setNewInput("");
  }

  function deleteItem() {}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" value={newInput} />
        <button onClick={setInputs}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {newItems.map((Item) => (
            <ToDoItem text={Item} OnChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
