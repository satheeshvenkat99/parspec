import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { addNewTodo, deleteTodo, isMarkTodo } from "../../redux/actions";
import TodoCard from "./todoCard";

const Todo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todo = useSelector((state) => state?.todoReducer?.todos || []);


  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addTodoItem = () => {
    let value = {
      id: Date.now(),
      text: text,
      isDone: false,
    };
    dispatch(addNewTodo(value));
    setText("");
  };

  const markTodo = (id) => {
    dispatch(isMarkTodo(id));
  };

  const removeTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="todo-container">
      Todo List
      <div className="todo-box">
        <span className="label">Add your Todo</span>
        <div className="input-wrapper">
          <input
            name="user"
            value={text}
            type="text"
            placeholder="enter your todo"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <Button variant="outline-success" onClick={addTodoItem}>
          Add
        </Button>
      </div>
      {todo?.length
        ? todo?.map((item, index) => {
            return (
              <TodoCard
                id={item.id}
                key={index}
                title={item.text}
                isDone={item.isDone}
                removeTodo={removeTodo}
                markTodo={markTodo}
              />
            );
          })
        : ""}
    </div>
  );
};

export default Todo;
