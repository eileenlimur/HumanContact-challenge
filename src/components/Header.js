import React from 'react';
import './Header.css'

export default function() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <header>
    <a href='#' className='logo' onClick={handleSubmit}><img alt='sneaker-head logo' src='assets/logo/sn-logo-h.png'/></a>
    {window.innerWidth > 768 ?
      (<nav>
        <button onClick={handleSubmit}>Top 10</button>
        <button onClick={handleSubmit}>Blog</button>
        <button onClick={handleSubmit}>About</button>
        <button onClick={handleSubmit}>Connect</button>
      </nav>) :
      (<div className='hamburger'>
        <div className='hamburger-stripe'></div>
        <div className='hamburger-stripe'></div>
        <div className='hamburger-stripe'></div>
      </div>)
    }
  </header>
  )
}