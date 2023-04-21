import React from 'react'
import {Element} from 'react-scroll'
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

import './Contact.css'


export default function Contact() {
  return (
    <div>
      <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact_container'>
            <p>
                Email : <span>karunya.purasaloor@gmail.com</span>
            </p>
            <p>
                Github Username : <span>KarunyaR8501</span>
            </p>
        
        <div className='contact_icons'>
          <a href='https://www.linkedin.com/in/karunya-r-19a857224/'>
            <IconButton>
                <LinkedInIcon/>
            </IconButton>
          </a>
          <a href='https://github.com/KarunyaR8501'>
            <IconButton>
                <GitHubIcon/>
            </IconButton>
          </a>
          <a href='https://www.instagram.com/_karunyar_/?igshid=ZDdkNTZiNTM%3'>
            <IconButton>
                <InstagramIcon/>
            </IconButton>
          </a>
          
        </div>
        </div>
      </Element>
    </div>
  )
}
