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

// Main container for left and right sections
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 100vh; 
  background-image: url('/backgroundImage.jpg');  
  background-size: cover;  
  background-position: center;  
  background-attachment: fixed;  
`;

// Left section styling
const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  margin-top:5px;
  margin-left: 100px;
  font-size: 2rem;
  color: black;  
  p{
    margin-top :40px ;
  }
`;

// Right section for the image
const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-top: 90px;
`;

// Image inside right section
const Image = styled.img`
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
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

      <MainContainer>
        <LeftSection>
          <h1>Automatic License</h1>
          <h1>Plate Recognition</h1>
          <h1>Made Easy</h1>
          <p>
            Explore our services and learn more about what we offer. We are
            committed to providing the best experience for our users.
          </p>
        </LeftSection>

        <RightSection>
          <Image src="/photo1.jpg" alt="Example Image" />
        </RightSection>
      </MainContainer>

      <SecondPage />
    </>
  );
};

export default HomePage;
