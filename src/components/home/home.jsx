import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav style={styles.navbar}>
        {/* Left block - Logo */}
        <div style={styles.logo}>
          <h2>Logo</h2>
        </div>

        {/* Center block - Navigation buttons */}
        <div style={styles.centerBlock}>
          <button style={styles.navButton}>About</button>
          <button style={styles.navButton}>Contact</button>
          <button style={styles.navButton}>Help</button>
        </div>

        {/* Right block - Login button */}
        <div style={styles.rightBlock}>
          <button 
            style={styles.loginButton} 
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

// Inline styles
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    flex: '1',
    textAlign: 'left',
  },
  centerBlock: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  navButton: {
    padding: '8px 12px',
    backgroundColor: '#444',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  rightBlock: {
    flex: '1',
    textAlign: 'right',
  },
  loginButton: {
    padding: '8px 16px',
    backgroundColor: '#ff5722',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Home;
