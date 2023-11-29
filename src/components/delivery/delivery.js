import './delivery.css';
import { useState } from 'react';

let meals = [
    { src: './assets/greeksalad.jpg', name: 'Greek Salad', description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.', price: '12.99' },
    { src: './assets/bruchetta.svg', name: 'Brushetta', description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.', price: '7.99' },
    { src: './assets/grilledfish.jpg', name: 'Grilled Fish', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.', price: '20.00' },
    { src: './assets/pasta.jpg', name: 'Pasta', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.', price: '18.99' },
    { src: './assets/lemondessert.jpg', name: 'Lemon Dessert', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.', price: '6.99' }
]

let categories = ['Lunch', 'Mains', 'Desserts', 'A La Carte', 'Specials']

function Meal(props) {
    return (
        <article className='meal-selection'>
            <section>
                <h4 className='card-title'>{props.data.name}</h4>
                <p className='paragraph-text'>{props.data.description}</p>
                <span className='highlight-text'>${props.data.price}</span>
            </section>
            <img src={props.data.src} alt={`A serving of ${props.data.name}`} width={100} height={100} loading='lazy' />
        </article>
    )
}

// function SpecialTab(props) {
//     console.log(props.key);
//     return (
//         <span onClick={props.onClick} className={props.selectedKey === props.key ? 'special-category active' : 'special-category'}>{props.children}</span>
//     )
// }

function Meals() {
    const [selectedKey, setSelectedKey] = useState(null);

    return (
        <>
            <section className='specials-tabs'>{categories.map((category, key) => <span onClick={() => setSelectedKey(key)} className={selectedKey === key ? 'special-category active' : 'special-category'}>{category}</span>)}</section>
            <section className='meals'>{meals.map(meal => <Meal data={meal} />)}</section>
        </>

    )
}

function Delivery() {
    return (
        <section className='delivery-section'>
            <h3 className='section-title'>ORDER FOR DELIVERY</h3>
            <Meals />
        </section>
    )
}

export default Delivery