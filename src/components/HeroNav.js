import React from 'react';
import './HeroNav.css';

export default function HeroNav({ displayShoe, selectShoe }) {
  
  return (
    <nav>
      <button className='hero-nav-thumbnail' selected={displayShoe='red'} onClick={()=>selectShoe('red')}>
        <img className='hero-nav-thumbnail-image' alt='red shoe thumbnail' src='/assets/backgrounds/thumbnails/red-shoe-thumbnail.png' />
      </button>
      <button className='hero-nav-thumbnail' selected={displayShoe='green'} onClick={()=>selectShoe('green')}>
        <img className='hero-nav-thumbnail-image' alt='green shoe thumbnail' src='/assets/backgrounds/thumbnails/green-shoe-thumbnail.png' />
      </button>
      <button className='hero-nav-thumbnail' selected={displayShoe='peach'} onClick={()=>selectShoe('peach')}>
        <img className='hero-nav-thumbnail-image higher' alt='peach shoe thumbnail' src='/assets/backgrounds/thumbnails/peach-shoe-thumbnail.png' />
      </button>
      <button className='hero-nav-thumbnail' selected={displayShoe='blue'} onClick={()=>selectShoe('blue')}>
        <img className='hero-nav-thumbnail-image higher' alt='blue shoe thumbnail' src='/assets/backgrounds/thumbnails/blue-shoe-thumbnail.png' />
      </button>
    </nav>
  )
}