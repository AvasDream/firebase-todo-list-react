import React, { useReducer } from "react";
import ToDoReducer from "./ToDoReducer";
import ToDoContext from "./ToDoContext";
import firebase from "firebase";
import uuid from "uuid/v4";
import { GET_TODOS, CREATE_TODO } from "./types";

let config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_ID,
  storageBucket: process.env.REACT_APP_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
  appId: process.env.REACT_APP_APP_ID
};
firebase.initializeApp(config);

// Get a reference to the database service
const database = firebase.database();

const ToDoState = props => {
  const initialState = {
    todos: []
  };
  const [state, dispatch] = useReducer(ToDoReducer, initialState);

  // Get Nodes
  const getToDos = async () => {
    try {
      var ref = database.ref("todos/");

      // Attach an asynchronous callback to read the data at our posts reference
      ref.on(
        "value",
        function(snapshot) {
          let data = snapshot.val();
          let todoList = Object.entries(data);
          let cleanedData = [];
          todoList.map(l =>
            cleanedData.push({
              id: l[0],
              name: l[1].name,
              done: l[1].done
            })
          );
          console.log(cleanedData);
          dispatch({
            type: GET_TODOS,
            payload: cleanedData
          });
        },
        function(errorObject) {
          console.log("The read failed: " + errorObject.code);
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const createToDo = todo => {
    let id = uuid();
    firebase
      .database()
      .ref("todos/" + id)
      .set({
        name: todo,
        done: false
      });

    dispatch({
      type: CREATE_TODO,
      payload: todo
    });
  };
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <ToDoContext.Provider
      value={{
        todos: state.todos,
        getToDos,
        createToDo
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
