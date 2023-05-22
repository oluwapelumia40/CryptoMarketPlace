import React from 'react'
import './success.css'
import { Link} from 'react-router-dom'

export default function Success () {
  return (
    <main>
       <div className="success">
            <h1> Thanks for the email.{Link.query.username}</h1>
       </div>
    </main>
  )
}
