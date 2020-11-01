import React from 'react';
import HeroNav from './HeroNav';
import './Hero.css';

export default function () {
  return (
    <div className='hero'>
      <img alt='red sneaker' src='/assets/backgrounds/red-shoe.png'/>
      <div className='hero-text'>
        <h1>We <span>Really</span> love shoes</h1>
        <h2>Sneakerhead wears, reviews and rates all the latest and greatest kicks on the market.</h2>
      </div>
      <HeroNav />
    </div>
  )
}