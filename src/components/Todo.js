import React from "react";

const Todo = ({ todo, index, completeToDo, removeToDo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeToDo(index)}>Complete</button>
        <button onClick={() => removeToDo(index)}>x</button>
      </div>
    </div>
  );
};

export default Todo;
