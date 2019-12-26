import { GET_TODOS, CREATE_TODO, SET_ERROR } from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
        error: null
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case CREATE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            name: action.payload,
            done: false
          }
        ]
      };
    default:
      return state;
  }
};
