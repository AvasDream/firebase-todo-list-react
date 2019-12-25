import React, { useContext, useEffect } from "react";
import { ListGroup } from "reactstrap";
import ToDoElement from "./ToDoElement";
import ToDoContext from "./context/todo/ToDoContext";
function ToDoList() {
  const { getToDos, todos } = useContext(ToDoContext);
  useEffect(() => {
    getToDos();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <ListGroup>
        {todos.map(todo => (
          <ToDoElement name={todo.name} done={todo.done} key={Math.random()} />
        ))}
      </ListGroup>
    </>
  );
}

export default ToDoList;
