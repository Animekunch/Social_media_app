import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #333;
  padding: 1rem;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  width: 200px;
`;

const NavbarTitle = styled.h1`
  color: white;
  margin: 0;
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 1rem;
`;

const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.75rem 1rem;
  width: 100%;
  text-align: center;
  box-sizing: border-box;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarTitle>Social_Media</NavbarTitle>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/search">Search</NavbarLink>
      <NavbarLink to="/profile">Profile</NavbarLink>
      <NavbarLink to="/register">Register</NavbarLink>
      <NavbarLink to="/more">More</NavbarLink>
    </NavbarContainer>
  );
};

export default Navbar;
