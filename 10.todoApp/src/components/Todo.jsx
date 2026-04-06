import React, { useState } from "react";

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
  const { id, content } = todo;
  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const removeTodo = () => {
    onRemoveTodo(id);
  };
  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo,
    };
    onUpdateTodo(request);
    setEditable(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "solid 1px",
        padding: "5px",
        marginTop: "10px",
      }}
    >
      <div>
        {editable ? (
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="todoInput"
            type="text"
          />
        ) : (
          content
        )}
      </div>
      <div style={{ fontWeight: "900" }}>
        <button
          onClick={removeTodo}
          style={{
            backgroundColor: "red",
            color: "white",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          Sil
        </button>
        <div>
          {editable ? (
            <button
              onClick={updateTodo}
              style={{
                backgroundColor: "green",
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              Onayla
            </button>
          ) : (
            <button
              onClick={() => setEditable(true)}
              style={{
                backgroundColor: "blue",
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              Düzenle
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
