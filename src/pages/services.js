import React from 'react';
import './services.css';

const services=()=>{
    return(
        <>
        <div className='wrap-start'>
            <h1 className='head-start'>Explore wide range of services from children's books to amazing podcasts!</h1>
            <div className='start'>
                <h3 className='trending'>Trending <i class="fas fa-fire"></i></h3>
                <div className='trend-images'>
                    <img src='/images/joe rogan.jpg' alt="Joe Rogan's Podcast" className='trending-images'/>
                    <img src='/images/conan.jpg' alt="Conan O'briens CONAN" className='trending-images'/>
                    <img src='/images/psycho.jpg' alt="Psycho-Pass 3" className='trending-images'/>
                </div>
            </div>
            <h1 className='head-start'>Make your holidays great again!</h1>
        </div>
        <div className='music'>
            <h3 className='head-start'>Music <i class="fas fa-music"></i></h3>
                <div className='music-images'>
                    <img src='/images/mtbm.jpeg' alt="" className='m-image'/>
                    <img src='/images/folklore.jpg' alt="" className='m-image'/>
                    <img src='/images/bts.jpg' alt="" className='m-image'/>
                </div>
        </div>
        <div className='art'>
            <h3 className='head-start'>Art <i class="fas fa-paint-brush"></i></h3>
                <div className='art-images'>
                    <img src='/images/shiva.png' alt="" className='a-image'/>
                    <img src='/images/san.jpg' alt="" className='a-image'/>
                    <img src='/images/girl.jpg' alt="" className='a-image'/>
                </div>
        </div>
        <div className='anime'>
            <h3 className='head-start'>Anime <i class="fas fa-tv"></i></h3>
                <div className='anime-images'>
                    <img src='/images/one-punch.jpg' alt="" className='an-image'/>
                    <img src='/images/dragon.jpg' alt="" className='an-image'/>
                    <img src='/images/death-note.jpg' alt="" className='an-image'/>
                </div>
        </div>
        </>
    )
}

export default services;