import React from 'react'
import { Link } from 'react-router-dom';
import poundCart from '../icon/pound-cart.png';
import coin from '../icon/coin.png';
import { Icon } from '@iconify/react';
import "./header.css";

export default function () {
  return (
    <div className='container_header'>
      <nav>
        <div>
          <Link href="#" className="headerIcon"> 
            <img src={poundCart}/>  
            <h3 className='iconText'> Crypto Market </h3>
          </Link>
          </div>
            <div className='menu-right'>
            <ul> 
                  <li> <Link to="/"> Home </Link></li>
                  <li> <Link to="/explore"> Explore </Link> </li>
                  <li> <Link to="#"> Resource </Link></li>
                  <li> <Link to="/support"> Support </Link></li> 
            </ul>
            </div>
            <div>
              <Link href='#' className='right-menu'> Sign Up </Link>
              
            </div>
            <div className='hidden'>
            <Icon icon="cil:hamburger-menu" className='hidden-style'/>
            </div>
        </nav>
          <div className='header-text'>
              <p> Explore, Collect and Buy with Coins. </p> <img src={coin} className="coin-header"/>  
          </div>
    </div>
  )
}
