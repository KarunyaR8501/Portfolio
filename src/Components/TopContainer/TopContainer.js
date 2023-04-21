import React from 'react'
import {Element} from 'react-scroll'
import TopContent from '../TopContent/TopContent'
import './TopContainer.css'

export default function TopContainer() {
  return (
    <div>
      <Element name='about' className='topContainer'>
          <TopContent></TopContent>
      </Element>
    </div>
  )
}
