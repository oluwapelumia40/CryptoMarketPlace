import React from 'react'
import "./header.css";

export default function () {
  return (
    <div>
        <nav>
            <ul> 
                <li><a href='#'> Crypto Market</a></li>
                    <div className='menu-right'>
                    <li> <a href='#'> Home </a></li>
                    <li> <a href='#'> Explore </a></li>
                    <li> <a href='#'> Resource </a></li>
                    <li> <a href='#'> Create </a></li>
                    </div>
            </ul>
        </nav>
    </div>
  )
}
