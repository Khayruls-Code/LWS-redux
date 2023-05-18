import {
  ADDED,
  DELETED,
  COLOR_SELECTED,
  CLEAR_COMPLETED,
  ALL_COMPLETED,
  TOGGLED,
} from "./actionTypes";

export const addTodo = (todo) => {
  return {
    type: ADDED,
    payload: todo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETED,
    payload: id,
  };
};

export const selectColor = (id, color) => {
  return {
    type: COLOR_SELECTED,
    payload: {
      id,
      color,
    },
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLED,
    payload: id,
  };
};

export const allCompleted = () => {
  return {
    type: ALL_COMPLETED,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
  };
};
