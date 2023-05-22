import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

export default function Footer() {
  return (
    <div className='container-footer'>
      <div className='footer'>
        <div className="col-1">
          <ul>
            ABOUT US
            <li> Ugiat nulla pariatur. Edeserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natu </li>
            <li>  Uttara, Dhaka, Bangladesh </li>
            <li> <Link href="#"> education@email.com</Link></li>
            <li> +98 558 547 589 </li>
          </ul>
        </div>

        <div className='col-2'>
          <ul> 
            QUICK LINK
            <li> Home </li>
            <li> About Us </li>
            <li> Course </li>
            <li> Admission </li>
            <li> Terms & Condition </li>
          </ul>
        </div>

        <div className='col-3'>
          <ul>
            COURSES
            <li> Under Graduate Programmes </li>
            <li> Graduate Programmes </li>
            <li> Diploma Courses </li>
            <li> Others Programmes </li>
            <li> Short Courses </li>
          </ul>
        </div>

        <div className='col-4'>
          <ul>
            GALLERY
            <li> Image Gallery </li>
          </ul>
        </div>

       <div className='col-5'>
          <ul>
            NEWS LATTER 
            <li> Dugiat nulla pariatur. Edeserunt mollit anim id est laborum. Sed ut perspiciatis unde </li>
          </ul>
       </div>
      </div>
      <div className='copyright'>
        <p> Copyright © 2022 CRYPTO MARKET PLACE. &nbsp; All Right Reserved. </p>
        <p className='privacy'> Privacy & Policy &nbsp; Terms & Conditions of Use </p>
      </div>
    </div>
  )
}
