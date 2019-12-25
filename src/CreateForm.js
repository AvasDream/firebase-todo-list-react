import React, { useContext } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import useForm from "./context/form/useForm";
import ToDoContext from "./context/todo/ToDoContext";
function CreateForm() {
  const submitAction = () => {
    createToDo(values.todo);
  };
  const { values, handleChange, handleSubmit } = useForm(submitAction);
  const { createToDo } = useContext(ToDoContext);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Add Task</Label>
          <Input
            type="text"
            name="todo"
            id="todoInput"
            placeholder="Enter new Task"
            value={values.todo || ""}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Button color="secondary" onClick={handleSubmit}>
            Add Task
          </Button>
        </FormGroup>
      </Form>
    </>
  );
}

export default CreateForm;
