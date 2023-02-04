import React, { useState } from "react";

import Form from "./components/form";
import "./App.css";

export default () => {
  const [todos, setTodos] = useState([]);

  const toggleComplete = i =>
    setTodos(
      todos.map(
        (todo, k) =>
          k === i
            ? {
                ...todo,
                complete: !todo.complete
              }
            : todo
      )
    );

  return (
    
    <div className="App" class="float-start">
      <h2>Todo</h2>
      <Form
        onSubmit={text => setTodos([{ text, complete: false }, ...todos])}
      />
      <div>
        {todos.map(({ text, complete }, i) => (
          <div
            key={text}
            onClick={() => toggleComplete(i)}
            style={{
              textDecoration: complete ? "line-through" : ""
            }}
          >
            <p Class=" fs-1">{text}</p>
          </div>
        ))}
      </div>
      <button class="btn btn-light" onClick={() => setTodos([])}>reset</button>
      
    </div>
  );
};