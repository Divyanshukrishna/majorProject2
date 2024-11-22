import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Navbar container
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
`;

// Logo on the left
const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

// Center block with buttons
const CenterBlock = styled.div`
  display: flex;
  gap: 15px;
`;

const NavButton = styled.button`
  padding: 10px;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

// Login button on the right
const LoginButton = styled.button`
  padding: 10px 20px;
  background-color: #ff5722;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e64a19;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Navbar>
      {/* Logo on the left */}
      <Logo>
        <img src="/vite.svg" alt="" />
      </Logo>

      {/* Center block with navigation buttons */}
      <CenterBlock>
        <NavButton>About</NavButton>
        <NavButton>Contact</NavButton>
        <NavButton>Help</NavButton>
      </CenterBlock>

      {/* Login button on the right */}
      <LoginButton onClick={() => navigate('/login')}>Login</LoginButton>
    </Navbar>
  );
};

export default HomePage;
