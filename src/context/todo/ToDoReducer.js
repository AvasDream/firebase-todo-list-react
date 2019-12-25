import { GET_TODOS, CREATE_TODO } from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        nodes: action.payload,
        loading: false
      };
    case CREATE_TODO:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};
