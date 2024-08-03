import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/authReducer";
import { login as loginApi } from "../services/api";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const LoginTitle = styled.h2`
  margin-bottom: 1rem;
`;

const LoginInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginApi({ email, password });
      dispatch(login(response.data));
      // Redirect to home or profile
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginContainer>
      <LoginTitle>Login</LoginTitle>
      <form onSubmit={handleSubmit}>
        <LoginInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <LoginInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <LoginButton type="submit">Login</LoginButton>
      </form>
    </LoginContainer>
  );
};

export default Login;
