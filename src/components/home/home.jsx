import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SecondPage from '../secondPage/secondPage';


// Navbar styles
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  color: black;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const CenterBlock = styled.div`
  display: flex;
  gap: 15px;
  color: black;
`;

const NavButton = styled.button`
  padding: 10px;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  color: black;
  font-size: 1.1rem;
  padding-right: 50px;
  text-align: center;

  &:hover {
    background-color: #a30000;
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
  margin-top: 10px;
  margin-left: 100px;
  font-size: 2rem;

`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-top: 90px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 400px;  /* Adjust the max-height to control the size of the image */
  object-fit: contain;  /* Ensures the image maintains its aspect ratio */
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
            <h1>Automatic License</h1>
            <h1>Plate Recognition</h1>
            <h1>Made Easy</h1>
            <p>
              Explore our services and learn more about what we offer. We are
              committed to providing the best experience for our users.
            </p>
          </LeftSection>
  
          {/* Right section with image */}
          <RightSection>
            <Image src="/photo1.jpg" alt="Example Image" />
          </RightSection>
        </MainContainer>
  
        {/* Include SecondPage component here */}
        <SecondPage />
      </>
    );
  };

export default HomePage
