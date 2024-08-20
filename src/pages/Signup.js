import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup as signupApi } from "../services/api";
import { signup } from "../redux/reducers/authReducer";
import styled from "styled-components";

const SignupContainer = styled.div`
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

const SignupTitle = styled.h2`
  margin-bottom: 1rem;
`;

const SignupInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SignupButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signupApi({ username, email, password });
      dispatch(signup(response.data));
      navigate('/profile'); // Redirect to profile page after successful signup
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignupContainer>
      <SignupTitle>Signup</SignupTitle>
      <form onSubmit={handleSubmit}>
        <SignupInput
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <SignupInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <SignupInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <SignupButton type="submit">Signup</SignupButton>
      </form>
    </SignupContainer>
  );
};

export default Signup;
