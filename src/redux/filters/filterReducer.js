import { STATUS_CHANGED, COLOR_CHANGED } from "./actionTypes";
import initialState from "./initialState";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_CHANGED:
      return {
        ...state,
        status: action.payload,
      };
    case COLOR_CHANGED:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.color, color],
          };
        case "removed":
          return {
            state,
            colors: state.colors.filter(
              (existanceColor) => existanceColor !== color
            ),
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default filterReducer;
