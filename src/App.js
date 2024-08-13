import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import More from "./pages/More";
import Register from "./pages/Register";
import Events from "./pages/Events";
import Groups from "./pages/Groups";
import JobBoard from "./pages/JobBoard";
import QA from "./pages/QA";
import Navbar from "./components/Navbar";
import styled from 'styled-components';

const MainContent = styled.div`
  margin-left: ${props => (props.isNavbarExtended ? '200px' : '60px')}; /* Adjust margin based on navbar state */
  padding: 1rem;
  transition: margin-left 0.3s ease; /* Smooth transition */
`;

function App() {
  const [isNavbarExtended, setIsNavbarExtended] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarExtended(!isNavbarExtended);
  };

  return (
    <Router>
      <Navbar isExtended={isNavbarExtended} toggleNavbar={toggleNavbar} />
      <MainContent isNavbarExtended={isNavbarExtended}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events" element={<Events />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/job-board" element={<JobBoard />} />
          <Route path="/qa" element={<QA />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </MainContent>
    </Router>
  );
}

export default App;
