import React, { useState } from "react";
import "../App.css";

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const clearInput = () => {
    setNewTodo("");
  };

  const createTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 99999),
      content: newTodo,
    };

    onCreateTodo(request);
    clearInput();
  };

  return (
    <div className="todoCreate">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todoInput"
        type="text"
        placeholder="Görev Giriniz"
      />
      <button onClick={createTodo} className="todoCreateButton">
        Görevi Ekle
      </button>
    </div>
  );
}

export default TodoCreate;
