import React from 'react';
import Diwali from '../images/diwali.png'
import Potter from '../images/potter.jpg'
import Vinci from '../images/da vinci.jpg'
import Symbols from '../images/symbols.jpg'
import Potter2 from '../images/chamber.jpg'
import Button from '../components/Button';
import './home.css';
const home=()=>{
    return(
        <>
        <div className='container pattern-checks-xl'>
            <img className='logo' src={Diwali} alt='diwali'/>
            <div>
            <h1 className='heading'>Enjoy this Diwali by reading amazing stories that make you go wow!</h1>
            <Button/>
            </div>
        </div>
        <hr/>
        <div className='info-wrap'>
        <div className='info'>
            <h2>About Us</h2>
            <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Morbi sed turpis congue, condimentum dui vel, ornare felis. 
                 Nam pharetra aliquet placerat. Nunc sapien ipsum, porttitor 
                 ut arcu at, venenatis blandit dui. Donec blandit nisl vel 
                 lectus placerat, id pretium ante tincidunt. Fusce ac quam tellus. 
                 Vivamus et imperdiet lorem. Vestibulum luctus tristique rutrum. 
                 Cras maximus neque id magna mollis, vitae viverra diam euismod.
            </p>
        </div>
        </div>
        <hr/>
        <div className='main-content'>
            <h1 className='main-heading'>Explore a wide variety of books</h1>
            <div className='books pattern-grid-md'>
                <img className='book-image' src={Potter} alt='Harry Potter and the cursed child' />
                <img className='book-image' src={Vinci} alt='Dan Brown The Da Vinci code' />
                <img className='book-image' src={Symbols} alt='Dan Brown The Lost Symbol' />
                <img className='book-image' src={Potter2} alt='Harry Potter and the chamber of secrets' />
            </div>
        </div>
        </>
    )
}

export default home;