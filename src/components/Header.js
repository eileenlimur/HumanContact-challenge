import React, { useState, useEffect } from 'react';
import './Header.css'

export default function() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(()=>{
    const updateWindow = () => {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWindow);
    return function cleanup () {
       window.removeEventListener("resize", updateWindow)
    }
  },[])

  const handleRedirect = (e) => {
    e.preventDefault();
  }

  return (
    <header>
    <a href='#' className='logo' onClick={handleRedirect}><img alt='sneaker-head logo' src='assets/logo/sn-logo-h.png'/></a>
    {(windowWidth > 768) ?
      (<nav className='widescreen-nav'>
        <button onClick={handleRedirect}>Top 10</button>
        <button onClick={handleRedirect}>Blog</button>
        <button onClick={handleRedirect}>About</button>
        <button onClick={handleRedirect}>Connect</button>
      </nav>) :
      (<>
        <div className='hamburger'>
          <div className='hamburger-stripe'></div>
          <div className='hamburger-stripe'></div>
          <div className='hamburger-stripe'></div>
        </div>
      </>)
    }
  </header>
  )
}