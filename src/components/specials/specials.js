import React from 'react';
import './specials.css';
import Special from './special';

let specials = [
    { src: '../../assets/greeksalad.jpg', name: 'Greek Salad', price: '12.99', description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons' },
    { src: '../../assets/bruchetta.svg', name: 'Bruchetta', price: '5.99', description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil' },
    { src: '../../assets/lemondessert.jpg', name: 'Lemon Dessert', price: '5.00', description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined' }
]

function Specials() {
    return (
        <section className='specials-section'>
            <section className='specials-title'>
                <h2 className='sub-title'>Specials</h2>
                <button className='button-link'>Online Menu</button>
            </section>
            <section className='specials-cards'>
                {specials.map(special => <Special key={special.name} data={special} />)}
            </section>
        </section>
    )
}

export default Specials