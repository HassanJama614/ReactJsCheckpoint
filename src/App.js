import React from 'react';
import { Navbar, Container, Card } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#">My React App</Navbar.Brand>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <h1 className="mb-4">
           Welcome to Hassan React App
          </h1>

          <div className="d-flex gap-4">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>
                  Text3
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>
                  Text2
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>
                  Text3
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;

