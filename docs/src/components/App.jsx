import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="main">
      <div className="paper">
        <div className="heading">
          <h1>My To-Do List</h1>
        </div>
        <InputArea onAdd={addItem} />
        <div>
          <ul>
            {items.map((todoItem, index) => (
              <ToDoItem key={index} id={index} text={todoItem} onChecked={deleteItem} />
            ))}
          </ul>
        </div>
      </div>
      <div className="footer">
        <span>
          <h2 style={{ display: "inline-block", verticalAlign: "middle" }}>To-Do List App made with 🖤 by Aakash M. using&nbsp;</h2>
          <img style={{ display: "inline-block", verticalAlign: "middle" }} src={require("../images/react-icon.png")} alt="react-logo" />
        </span>
      </div>
    </div>
  );
}

export default App;
