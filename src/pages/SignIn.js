import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Cookies } from "react-cookie";
// import { authenticateAction } from "../redux/actions/authenticateAction";

const SignIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cookies = new Cookies();
  const authenticate = cookies.get("authenticate");

  const loginUser = (event) => {
    event.preventDefault();
    console.log("login user");
    // dispatch(authenticateAction.login(id, password));
    // navigate("/");
  };

  if (authenticate == 1) {
    console.log("signinauth", authenticate);
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => setId(event.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
