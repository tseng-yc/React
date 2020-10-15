//2020-10-15  2.react-bootstrap與react-icons範例
import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { SiFacebook } from 'react-icons/si';

function App17(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container>
        <Row>
          <Col md={8}>
            <SiFacebook color="red" size={150} />
          </Col>
          <Col md={4}>
            <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// 輸出元件(函式)
export default App17;
