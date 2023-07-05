import React from 'react';
import './bio.css';

function Bio() {
  return (
    <section className='bio'>
      <section className='bio-body'>
        <h1 className='display-title'>Little Lemon</h1>
        <h2 className='sub-title'>Chicago</h2>
        <p className='bio-text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
      </section>
      <section className='bio-image'>
        <img src="../../assets/restaurant.jpg" alt="A shot of the outdoor seating at Little Lemon" />
      </section>
    </section>
  )
}

export default Bio;