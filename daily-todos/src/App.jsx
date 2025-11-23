import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  const TodosList = [
    { id: nanoid(), text: "ვუყურებთ როგორ აგებს ბარსა რეალთან" },
    { id: nanoid(), text: "რეალმა გაანადგურა 11-0(ისტორია გაამეორა)" },
    { id: nanoid(), text: "მივდივართ მზიურში" },
    { id: nanoid(), text: "ვესალმებით ჯიგარ მასწავლებალს" },
    { id: nanoid(), text: "ვახსენებთ ბარსას წაგებებს" },
    { id: nanoid(), text: "თუ დიალოგში აგვყვა ისტორიაში ბარსას ყველა წაგებას ვახსენებთ" },
    { id: nanoid(), text: "და ტკბილად ვაგრძელებთ ცხოვრებას(რეალი არ აგებს)(ვერ)" },
  ];
  const addTodo = (text) => {
    const newTodo = { id: nanoid(), text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="Start">
      <h1>Todo List</h1>

      <div className="todo-list">
        {todos.length === 0 && (
          <div className="empty">list is empty</div>
        )}

        {todos.length > 0 && (
          <>
            {todos.map((todoAll) => (
              <div className="item" key={todoAll.id}>
                <p>{todoAll.text}</p>
                <button onClick={() => deleteTodo(todoAll.id)}>delete</button>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="buttons">
        <h2>I am not evil just love madrid</h2>

        <div className="container">
          {TodosList.map((press) => (
            <button
              key={press.id}
              className="preset-button"
              onClick={() => addTodo(press.text)}
            >
              {press.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}