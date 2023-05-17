import React from "react";
import { Button } from "react-bootstrap";

const TodoCard = ({ title, id, index, isDone, removeTodo, markTodo }) => {
  return (
    <div className="todo" key={index}>
      <span
        style={{
          textDecoration: `${isDone ? "line-through" : ""}`,
        }}
      >
        {title}
      </span>
      <div>
        <div>
          <Button variant="outline-success" onClick={() => markTodo(id)}>
            ✓
          </Button>{" "}
          <Button variant="outline-danger" onClick={() => removeTodo(id)}>
            ✕
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
