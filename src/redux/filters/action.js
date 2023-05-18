import { STATUS_CHANGED, COLOR_CHANGED } from "./actionTypes";

export const changeStatus = (status) => {
  return {
    type: STATUS_CHANGED,
    payload: status,
  };
};

export const changeColor = (color, changeType) => {
  return {
    type: COLOR_CHANGED,
    payload: {
      color,
      changeType,
    },
  };
};
