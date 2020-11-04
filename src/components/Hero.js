import React, { useEffect, useState } from 'react';
import HeroNav from './HeroNav';
import './Hero.css';

export default function () {
  const [heroShoe, setHeroShoe] = useState('red')
  const [imageSource, setImageSource] = useState('/assets/backgrounds/red-shoe.png')

  useEffect(()=>{
    const interval = setInterval(()=>{
      switch(heroShoe) {
        case 'red':
          setHeroShoe('green')
          setImageSource('/assets/backgrounds/green-shoe.png');
          break;
        case 'green':
          setHeroShoe('peach')
          setImageSource('/assets/backgrounds/peach-shoe.png');
          break;
        case 'peach':
          setHeroShoe('blue')
          setImageSource('/assets/backgrounds/blue-shoe.png');
          break;
        case 'blue':
          setHeroShoe('red')
          setImageSource('/assets/backgrounds/red-shoe.png');
          break;
        default:
           setHeroShoe('red');
      }
    }, 3000)
    return () => clearInterval(interval);
  },[heroShoe])

  return (
    <div className='hero'>
      <img className='hero-image' alt='red sneaker' src={imageSource}/>
      <div className='hero-text'>
        <h1>We <strong>Really</strong> love shoes</h1>
        <h2>Sneakerhead wears, reviews and rates all the latest and greatest kicks on the market.</h2>
      </div>
      <HeroNav displayShoe={heroShoe} selectShoe={setHeroShoe}/>
    </div>
  )
}