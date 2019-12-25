import { GET_TODOS, CREATE_TODO } from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false
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
