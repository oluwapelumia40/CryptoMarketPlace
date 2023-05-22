import React from 'react';
import './explore.css';
import { Helmet } from 'react-helmet-async';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Footer from './Components/Footer';
import Header from './Components/Header';
import iphone_12 from './images/iphone_12_PNG22.png';

export default function Explore() {
  return (
    <main>

        <Helmet>
            <title> Explore More With Your Coin! </title>
            <meta name="Crypto Market Place" content="Trade With Crypto"/>
        </Helmet>

        <Header/>
        <div className='slide-container'>
            <LazyLoadImage className='slide' src={iphone_12}/>
        </div>

        <Footer/>
    </main>
  )
}
