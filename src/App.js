import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import CreateForm from "./CreateForm";
function App() {
  return (
    <>
      <Container className="mt-5 ">
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card style={{ height: "50vh" }}>
              <CardBody>
                <h2>ToDo App</h2>
                <hr />
                <CreateForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
