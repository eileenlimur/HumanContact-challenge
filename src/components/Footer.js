import React, { useState } from 'react';
import './Footer.css';

export default function() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  }

  return (
    <footer>
      <div className='social-buttons'>
        <button className='social-button' onClick={handleSubmit}>
          <i className="fab fa-instagram"></i>
        </button >
        <button className='social-button' onClick={handleSubmit}>
          <i className="fab fa-twitter"></i>
        </button>
        <button className='social-button' onClick={handleSubmit}>
          <i className="fab fa-facebook-f"></i>
        </button>
      </div>
      <form>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder='Enter Email. Stay up-to-date.'/>
        <button onClick={handleSubmit} type='submit'>
          Signup
        </button>
      </form>
    </footer>
  )
}