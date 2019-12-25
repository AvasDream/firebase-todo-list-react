import React, { useReducer } from "react";
import ToDoReducer from "./ToDoReducer";
import ToDoContext from "./ToDoContext";

import { GET_TODOS, CREATE_TODO } from "./types";

const API_URL = process.env.REACT_APP_ARTEMIS_API;

const ToDoState = props => {
  const initialState = {
    todos: [
      {
        name: "Task1",
        done: false
      },
      {
        name: "Task2",
        done: false
      },
      {
        name: "Task3",
        done: true
      },
      {
        name: "Task4",
        done: false
      }
    ]
  };
  const [state, dispatch] = useReducer(ToDoReducer, initialState);

  // Get Nodes
  const getToDos = async () => {
    try {
    } catch (error) {
      console.log(error.message);
    }
  };
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <ToDoContext.Provider
      value={{
        todos: state.todos,
        getToDos
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

/* NodesState.propTypes = {
  children: PropTypes.shape.required
}; */

export default ToDoState;
