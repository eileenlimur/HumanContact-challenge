import React, { useState } from 'react';
import './Footer.css';

export default function() {
  const [email, setEmail] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    setEmail('');
  }

  const handleRedirect = (e) => {
    e.preventDefault(); 
  }

  return (
    <footer>
      <div className='social-buttons'>
        <button className='social-button' onClick={handleRedirect}>
          <i className="fab fa-instagram"></i>
        </button >
        <button className='social-button' onClick={handleRedirect}>
          <i className="fab fa-twitter"></i>
        </button>
        <button className='social-button' onClick={handleRedirect}>
          <i className="fab fa-facebook-f"></i>
        </button>
      </div>
      <form>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder='Enter Email. Stay up-to-date.'/>
        <button onClick={handleClick} type='submit'>
          Signup
        </button>
      </form>
    </footer>
  )
}