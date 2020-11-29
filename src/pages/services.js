import React from 'react';
import joe from '../images/joe rogan.jpg'
import conan from '../images/conan.jpg'
import psycho from '../images/psycho.jpg'
import mtbm from '../images/mtbm.jpeg'
import folklore from '../images/folklore.jpg'
import bts from '../images/bts.jpg'
import shiva from '../images/shiva.png'
import san from '../images/san.jpg'
import girl from '../images/girl.jpg'
import onepunch from '../images/one-punch.jpg'
import dragon from '../images/dragon.jpg'
import deathnote from '../images/death-note.jpg'
import './services.css';

const services=()=>{
    return(
        <>
        <div className='wrap-start'>
            <h1 className='head-start'>Explore wide range of services from children's books to amazing podcasts!</h1>
            <div className='start'>
                <h3 className='trending'>Trending <i class="fas fa-fire"></i></h3>
                <div className='trend-images'>
                    <img src={joe} alt="Joe Rogan's Podcast" className='trending-images'/>
                    <img src={conan} alt="Conan O'briens CONAN" className='trending-images'/>
                    <img src={psycho} alt="Psycho-Pass 3" className='trending-images'/>
                </div>
            </div>
            <h1 className='head-start'>Make your holidays great again!</h1>
        </div>
        <div className='music'>
            <h3 className='head-start'>Music <i class="fas fa-music"></i></h3>
                <div className='music-images'>
                    <img src={mtbm} alt="" className='m-image'/>
                    <img src={folklore} alt="" className='m-image'/>
                    <img src={bts} alt="" className='m-image'/>
                </div>
        </div>
        <div className='art'>
            <h3 className='head-start'>Art <i class="fas fa-paint-brush"></i></h3>
                <div className='art-images'>
                    <img src={shiva} alt="" className='a-image'/>
                    <img src={san} alt="" className='a-image'/>
                    <img src={girl} alt="" className='a-image'/>
                </div>
        </div>
        <div className='anime'>
            <h3 className='head-start'>Anime <i class="fas fa-tv"></i></h3>
                <div className='anime-images'>
                    <img src={onepunch} alt="" className='an-image'/>
                    <img src={dragon} alt="" className='an-image'/>
                    <img src={deathnote} alt="" className='an-image'/>
                </div>
        </div>
        </>
    )
}

export default services;