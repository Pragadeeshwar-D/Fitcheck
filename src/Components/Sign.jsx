import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sign.css';

const Sign = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleUserState = () => {
    setIsNewUser(!isNewUser);
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNewUser && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match. Please enter the correct password.');
      return;
    }
    // Add your form submission logic here
    console.log('Form submitted', formData);
    navigate('/home'); // Navigate to home page after form submission
  };

  const imageUrl = '/src/Assests/gymOverlayBg.jpg'; // Replace with your background image URL

  return (
    <div className="auth-container" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
      <div className="auth-form">
        <h2 className='hel'>{isNewUser ? 'Sign Up' : 'Sign In'}</h2>
        <form onSubmit={handleSubmit}>
          {isNewUser && (
            <div className="form-group">
              <label htmlFor="username" className='us'>Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className='hi'
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email" className='em'>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className='hi1'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className='ps'>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className='hi2'
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          {isNewUser && (
            <div className="form-group">
              <label htmlFor="confirm-password" className='cp'>Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                className='hi3'
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          <button type="submit" className="ggg">
            {isNewUser ? 'Begin your journey' : 'Restart your journey'}
          </button>
        </form>
        <button className="toggle-button" onClick={toggleUserState}>
          {isNewUser ? 'Already have an account? Sign In' : 'New user? Sign Up'}
        </button>
      </div>
    </div>
  );
}

export default Sign;
