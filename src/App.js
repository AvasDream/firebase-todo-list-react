import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import CreateForm from "./CreateForm";
import ToDoList from "./ToDoList";
import ToDoState from "./context/todo/ToDoState";
function App() {
  return (
    <>
      <ToDoState>
        <Container className="mt-5 ">
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Card>
                <CardBody>
                  <h2>ToDo App</h2>
                  <hr />
                  <CreateForm />
                  <hr />
                  <ToDoList />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </ToDoState>
    </>
  );
}

export default App;
