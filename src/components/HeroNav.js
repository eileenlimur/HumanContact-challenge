import React from 'react';
import './HeroNav.css';

export default function HeroNav({ displayShoe, selectShoe }) {
  
  return (
    <nav>
      <button className='hero-nav-thumbnail' onClick={()=>selectShoe('red')}>
        <img className={'hero-nav-thumbnail-image ' + (displayShoe === 'red' ? 'selected' : '')} alt='red shoe thumbnail' src='/assets/backgrounds/thumbnails/red-shoe-thumbnail.png' />
      </button>
      <button className='hero-nav-thumbnail' onClick={()=>selectShoe('green')}>
        <img className={'hero-nav-thumbnail-image ' + (displayShoe === 'green' ? 'selected' : '')} alt='green shoe thumbnail' src='/assets/backgrounds/thumbnails/green-shoe-thumbnail.png' />
      </button>
      <button className='hero-nav-thumbnail' onClick={()=>selectShoe('peach')}>
        <img className={'hero-nav-thumbnail-image peach ' + (displayShoe === 'peach' ? 'selected' : '')} alt='peach shoe thumbnail' src='/assets/backgrounds/thumbnails/peach-shoe-thumbnail.png' />
      </button>
      <button className='hero-nav-thumbnail' onClick={()=>selectShoe('blue')}>
        <img className={'hero-nav-thumbnail-image blue ' + (displayShoe === 'blue' ? 'selected' : '')} alt='blue shoe thumbnail' src='/assets/backgrounds/thumbnails/blue-shoe-thumbnail.png' />
      </button>
    </nav>
  )
}