import React from "react";
import { ListGroupItem, Badge } from "reactstrap";

function ToDoElement({ name, done }) {
  let content = "";
  const handleChange = evt => {
    evt.preventDefault();
    console.log(evt);
  };
  if (done) {
    content = (
      <ListGroupItem tag="button">
        <strike>{name}</strike>
        <Badge color="success" pill className="ml-5">
          Done
        </Badge>
      </ListGroupItem>
    );
  } else {
    content = (
      <ListGroupItem tag="button" onDoubleClick={handleChange}>
        {name}
        <Badge color="primary" pill className="ml-5">
          Do it
        </Badge>
      </ListGroupItem>
    );
  }
  return <>{content}</>;
}

export default ToDoElement;
