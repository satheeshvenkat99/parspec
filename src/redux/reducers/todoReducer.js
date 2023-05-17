import { ADD_TODO, DELETE_TODO, MARK_COMPLETE } from "../actions/actiontypes";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let newTodos = [...state.todos, action.payload];
      return {
        ...state,
        todos: newTodos,
      };

    case DELETE_TODO:
      let newTodoList = state.todos.filter((item) => {
        return item.id != action.payload;
      });
      return {
        ...state,
        todos: newTodoList,
      };

    case MARK_COMPLETE:
      let newTodo = [...state.todos];
      let isMarkIndex = newTodo.findIndex((item) => item.id == action.payload);
      newTodo[isMarkIndex].isDone = true;
      return {
        ...state,
        todos: newTodo,
      };

    default:
      return state;
  }
};

export default todoReducer;
