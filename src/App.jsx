import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function App() {
  const [validated, setValidated] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || !remember) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow"
        style={{
          maxWidth: 400,
          width: "100%",
          borderTop: "5px solid #ff3b3b", // merah Reimu
        }}
      >
        <h3 className="text-center mb-4" style={{ color: "#3baaa7" }}>
          Welcome to Gensokyo Login
        </h3>

        <Form.Group controlId="username" className="mb-3">
          <Form.Label style={{ color: "#d91e1e" }}>Username</Form.Label>
          <Form.Control required type="text" placeholder="Masukkan Username" />
          <Form.Control.Feedback type="invalid">Masukkan Username!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="password" className="mb-3">
          <Form.Label style={{ color: "#3baaa7" }}>Password</Form.Label>
          <Form.Control required type="password" placeholder="Masukkan Password" />
          <Form.Control.Feedback type="invalid">Masukkan Password!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="remember" className="mb-3">
          <Form.Check
            type="checkbox"
            label="Ingat Password"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            isInvalid={!remember && validated}
            feedback="Kamu harus mengingat password!"
            feedbackType="invalid"
            style={{ color: "#d91e1e" }}
          />
        </Form.Group>

        <Button
          type="submit"
          className="w-100"
          style={{
            backgroundColor: "#3baaa7", // biru Sanae
            borderColor: "#3baaa7",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#2a807e";
            e.target.style.borderColor = "#2a807e";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#3baaa7";
            e.target.style.borderColor = "#3baaa7";
          }}
          onMouseDown={(e) => {
            e.target.style.backgroundColor = "#1f6261";
            e.target.style.borderColor = "#1f6261";
          }}
          onMouseUp={(e) => {
            e.target.style.backgroundColor = "#2a807e";
            e.target.style.borderColor = "#2a807e";
          }}
        >
          Submit form
        </Button>
      </Form>
    </Container>
  );
}

export default App;
