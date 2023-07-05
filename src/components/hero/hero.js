import React from 'react';
import './hero.css';
import { Link } from "react-router-dom";
import { useMediaQuery } from '../../hooks/usemediaquery';

function Hero() {
  const isMobile = useMediaQuery("600px");

  return (
    <section className='hero-section'>
      <article className='hero-article'>
        <h1 className='display-title'>Little Lemon</h1>
        <h2 className='sub-title'>Chicago</h2>
        <p className='lead-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Link to={'/book'}><button className={isMobile ? 'secondary-button-link' : 'button-link'}>Reserve a table</button></Link>
      </article>
      <img src={require("../../assets/hero.jpg")} className="hero-image rounded-corner" alt="A chef adding final touches to a plate" />
    </section>
  )
}

export default Hero;