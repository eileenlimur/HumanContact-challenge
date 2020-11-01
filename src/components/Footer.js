import React from 'react';
import './Footer.css';

export default function() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <footer>
      <div className='social-buttons'>
        <button className='social-button' onClick={handleSubmit}>
          <i class="fab fa-instagram"></i>
        </button >
        <button className='social-button' onClick={handleSubmit}>
          <i class="fab fa-twitter"></i>
        </button>
        <button className='social-button' onClick={handleSubmit}>
          <i class="fab fa-facebook-f"></i>
        </button>
      </div>
      <form>
        <input placeholder='Enter Email. Stay up-to-date.'/>
        <button onClick={handleSubmit}>
          Signup
        </button>
      </form>
    </footer>
  )
}