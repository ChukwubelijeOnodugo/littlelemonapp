import React from 'react';
import delivery from '../../assets/delivery.svg';

function Special(props) {
  return (
    <article className='special-card rounded-corner'>
      <img src={props.data.src} alt={`A serving of ${props.data.name}`} className='special-image' loading='lazy' />
      <section className='special-card-body'>
        <section className='special-headline'><span className='special-title'>{props.data.name}</span><span className='highlight-strong-text special-price'>${props.data.price}</span></section>
        <section> <p className='paragraph-text'>{props.data.description}</p> </section>
        <section><button className='secondary-button-link'>Order a delivery <img src={delivery} alt="delivery scooter icon" /></button></section>
      </section>
    </article>
  )
}

export default Special