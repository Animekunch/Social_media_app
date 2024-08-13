import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faUser, faUserPlus, faEllipsisH, faCalendarDay, faUsers, faBriefcase, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import AzureLogo from '../assets/azure-logo.svg';
import Tooltip from './Tooltip'; 

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; /* Center align items */
  background-color: #333;
  padding: 1rem;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  width: 80px; /* Set a fixed width */
  transition: width 0.3s ease; /* Smooth transition */
`;

const NavbarLogo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const Logo = styled.img`
  width: 40px; /* Set the width for the logo */
  height: auto;
`;

const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 1rem;
  width: 100%;
  text-align: center; /* Center align text (though text is hidden) */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem; /* Adjust font size for icons */
  transition: background-color 0.3s ease; /* Smooth transition for background color */
  
  &:hover {
    background-color: #444; /* Slightly different color on hover */
  }
`;

const Navbar = ({ isExtended, toggleNavbar }) => {
  return (
    <NavbarContainer>
      <NavbarLogo to="/">
        <Logo src={AzureLogo} alt="Azure Logo" />
      </NavbarLogo>

      <Tooltip text="Home">
        <NavbarLink to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavbarLink>
      </Tooltip>

      <Tooltip text="Search">
        <NavbarLink to="/search">
          <FontAwesomeIcon icon={faSearch} />
        </NavbarLink>
      </Tooltip>

      <Tooltip text="Profile">
        <NavbarLink to="/profile">
          <FontAwesomeIcon icon={faUser} />
        </NavbarLink>
      </Tooltip>

      <Tooltip text="Register">
        <NavbarLink to="/register">
          <FontAwesomeIcon icon={faUserPlus} />
        </NavbarLink>
      </Tooltip>

      <Tooltip text="Events">
        <NavbarLink to="/events">
          <FontAwesomeIcon icon={faCalendarDay} />
        </NavbarLink>
      </Tooltip>

      <Tooltip text="Groups">
        <NavbarLink to="/groups">
          <FontAwesomeIcon icon={faUsers} />
        </NavbarLink>
      </Tooltip>

      <Tooltip text="Job Board">
        <NavbarLink to="/job-board">
          <FontAwesomeIcon icon={faBriefcase} />
        </NavbarLink>
      </Tooltip>

      <Tooltip text="Q&A">
        <NavbarLink to="/qa">
          <FontAwesomeIcon icon={faQuestionCircle} />
        </NavbarLink>
      </Tooltip>

      <Tooltip text="More">
        <NavbarLink to="/more">
          <FontAwesomeIcon icon={faEllipsisH} />
        </NavbarLink>
      </Tooltip>
    </NavbarContainer>
  );
};

export default Navbar;
