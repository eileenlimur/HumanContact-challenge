import React from 'react';
import './Header.module.css'

export default function() {
  return (
    <header>
    <img alt='sneaker-head logo' src='assets/logo/sn-logo-h.png'/>
    <nav>
      <button>Top 10</button>
      <button>Blog</button>
      <button>About</button>
      <button>Connect</button>
    </nav>
  </header>
  )
}