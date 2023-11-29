import React from 'react';

function Testimonial(props) {
  return (
    <article className='testimonial-card rounded-corner'>
      <h3 className='special-title'>Rating</h3>
      <section className='testimonial-id'>
        <img src={props.data.src} width={50} height={50} alt="A picture of the reviewing customer" loading='lazy' />
        <span className='highlight-strong-text'>Name</span>
      </section>
      <p className='paragraph-text'>Review text</p>
    </article>
  )
}

export default Testimonial