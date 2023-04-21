import React, { useState } from 'react'
import './Project.css'
import { Link } from 'react-scroll'


export default function Project({img,title,des,link}) {
    
    const [show,setShow]=useState(false)
  return (
    

    <a href={link}>
        <div className='projects' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
          {
            show?(
                <div className='projects_content'>
                    <h4>{title}</h4>
                    <p>{des}</p>

                </div>
            ):(
                <img src={img} alt=''/>
            )
          }
      </div>
    </a>
  )
}
