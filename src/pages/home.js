import React from 'react';
import Button from '../components/Button';
import './home.css';
const home=()=>{
    return(
        <>
        <div className='container pattern-checks-xl'>
            <img className='logo' src='/images/diwali.png' alt='diwali'/>
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
                <img className='book-image' src='/images/potter.jpg' alt='Harry Potter and the cursed child' />
                <img className='book-image' src='/images/da vinci.jpg' alt='Dan Brown The Da Vinci code' />
                <img className='book-image' src='/images/symbols.jpg' alt='Dan Brown The Lost Symbol' />
                <img className='book-image' src='/images/chamber.jpg' alt='Harry Potter and the chamber of secrets' />
            </div>
        </div>
        </>
    )
}

export default home;