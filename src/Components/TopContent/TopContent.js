import React from 'react'
import {Link} from 'react-scroll'
import './TopContent.css'

export default function TopContent() {
  return (
    <div className='topContent'>
        <div className='topContent_container'>
         <h1>Hi,
          I am Karunya R</h1>
         <p>Full Stack Developer-MERN</p>
         <Link to='projects' smooth={true} duration={500}>
            <button className='topContent_button'>My Work</button>
         </Link>
        </div>
      
    </div>
  )
}
