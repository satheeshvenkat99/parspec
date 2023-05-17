import { ADD_TODO, DELETE_TODO, MARK_COMPLETE } from "./actiontypes";

export const addNewTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const deleteTodo = (id) => {
  return { type: DELETE_TODO, payload: id };
};

export const isMarkTodo = (id) => {
  return {
    type: MARK_COMPLETE,
    payload: id,
  };
};
