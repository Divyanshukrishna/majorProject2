import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Navbar styles
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #39bdee;
  color: #fff;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

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

// Main container for the content below the navbar
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

// Left section (text content)
const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;

// Right section (images)
const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar>
        <Logo>
          <img src="/vite.svg" alt="Logo" />
        </Logo>

        <CenterBlock>
          <NavButton>About</NavButton>
          <NavButton>Contact</NavButton>
          <NavButton>Help</NavButton>
        </CenterBlock>

        <LoginButton onClick={() => navigate('/login')}>Login</LoginButton>
      </Navbar>

      {/* Main content layout */}
      <MainContainer>
        {/* Left section with text */}
        <LeftSection>
          <h2>Welcome to Our Website</h2>
          <p>
            Explore our services and learn more about what we offer. We are
            committed to providing the best experience for our users.
          </p>
        </LeftSection>

        {/* Right section with image */}
        <RightSection>
          <img src="https://via.placeholder.com/400" alt="Placeholder" />
        </RightSection>
      </MainContainer>
    </>
  );
};

export default HomePage;
