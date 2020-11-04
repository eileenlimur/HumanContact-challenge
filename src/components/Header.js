import React, { useState, useEffect } from 'react';
import './Header.css'

export default function() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(()=>{
    const updateWindow = () => {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWindow);
    return function cleanup () {
       window.removeEventListener("resize", updateWindow)
    }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const toggleDropdown = () => {
    showDropdown === true ? setShowDropdown(false) : setShowDropdown(true);
  }

  return (
    <header>
    <a href='#' className='logo' onClick={handleSubmit}><img alt='sneaker-head logo' src='assets/logo/sn-logo-h.png'/></a>
    {(windowWidth > 768) ?
      (<nav className='widescreen-nav'>
        <button onClick={handleSubmit}>Top 10</button>
        <button onClick={handleSubmit}>Blog</button>
        <button onClick={handleSubmit}>About</button>
        <button onClick={handleSubmit}>Connect</button>
      </nav>) :
      (<>
        <div className='hamburger' onClick={toggleDropdown}>
          <div className='hamburger-stripe'></div>
          <div className='hamburger-stripe'></div>
          <div className='hamburger-stripe'></div>
        </div>
        {showDropdown && <nav className='narrowscreen-nav'>
          <button onClick={handleSubmit}>Top 10</button>
          <button onClick={handleSubmit}>Blog</button>
          <button onClick={handleSubmit}>About</button>
          <button onClick={handleSubmit}>Connect</button>
        </nav>}
      </>)
    }
  </header>
  )
}