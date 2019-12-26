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
      var ref = database.ref("todo-list");

      // Attach an asynchronous callback to read the data at our posts reference
      ref.on(
        "value",
        function(snapshot) {
          let data = snapshot;
          let cleanedData = [];
          data.forEach(function(childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            cleanedData.push({
              id: childKey,
              name: childData.name,
              done: childData.done
            });
          });

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
    /* Not necessary firebase has a List datastructure where the id is auto generated */
    /* let id = uuid();
    database.ref("todos/" + id).set({
      name: todo,
      done: false
    }); */
    let todoListRef = database.ref("todo-list");
    var newPostRef = todoListRef.push();
    newPostRef.set({
      id: newPostRef.key,
      name: todo,
      done: false
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
