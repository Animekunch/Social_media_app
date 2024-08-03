import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import More from "./pages/More";
import Register from "./pages/Register"; // Import the Register component
import Navbar from "./components/Navbar";
import styled from 'styled-components';

const MainContent = styled.div`
  margin-left: 200px; /* Ensure it matches the Navbar width */
  padding: 1rem;
`;

function App() {
  return (
    <Router>
      <Navbar />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Register />} /> {/* Add the Register route */}
          <Route path="/more" element={<More />} />
        </Routes>
      </MainContent>
    </Router>
  );
}

export default App;
