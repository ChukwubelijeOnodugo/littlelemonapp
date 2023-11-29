import React from 'react';
import './testimonials.css';
import Testimonial from './tesimonial';


let testimonials = [
  { src: './assets/ayo-ogunseinde-sibVwORYqs0-unsplash.jpg' },
  { src: './assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg' },
  { src: './assets/edward-cisneros-H6wpor9mjs-unsplash.jpg' },
  { src: './assets/vince-veras-AJIqZDAUD7A-unsplash.jpg' }
]

function Testimonials() {
  return (
    <section className='testimonial-section'>
      <h2 className='sub-title'>Testimonials</h2>
      <section className='testimonial-cards'>
        {testimonials.map((testimonial, key) => <Testimonial key={key} data={testimonial} />)}
      </section>
    </section>
  )
}

export default Testimonials;