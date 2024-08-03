import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import styled from "styled-components";

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const InfoText = styled.p`
  margin-bottom: 1rem;
  color: #333;
`;

const ToggleButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Register = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <RegisterContainer>
      {isLogin ? (
        <>
          <Login />
          <InfoText>
            Don't have an account? <ToggleButton onClick={toggleForm}>Signup</ToggleButton>
          </InfoText>
        </>
      ) : (
        <>
          <Signup />
          <InfoText>
            Already have an account? <ToggleButton onClick={toggleForm}>Login</ToggleButton>
          </InfoText>
        </>
      )}
    </RegisterContainer>
  );
};

export default Register;
