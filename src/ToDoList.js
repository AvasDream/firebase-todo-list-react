import React, { useContext, useEffect } from "react";
import { ListGroup } from "reactstrap";
import ToDoElement from "./ToDoElement";
import ToDoContext from "./context/todo/ToDoContext";
function ToDoList() {
  const { getToDos, todos, error } = useContext(ToDoContext);
  useEffect(() => {
    getToDos();
    // eslint-disable-next-line
  }, []);
  let toDoList = todos ? todos : [];
  let content = "";
  if (toDoList.length === 0) {
    content = <h5>No Tasks available!</h5>;
  } else if (error) {
    content = <h5>{error}</h5>;
  } else {
    content = (
      <ListGroup>
        {todos.map(todo => (
          <ToDoElement name={todo.name} done={todo.done} key={Math.random()} />
        ))}
      </ListGroup>
    );
  }
  return <>{content}</>;
}

export default ToDoList;
