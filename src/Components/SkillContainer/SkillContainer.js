import React from 'react'
import{Element} from 'react-scroll'
import './SkillContainer.css'
import { LinearProgress } from '@mui/material';
// import LinerProgress from '@material-ui/core/LinearProgress'

export default function SkillContainer() {
  return (
   <Element className='skillContainer' id='skills'>
    <div className='skillContainer_image'>
        <img src='https://cdn-cllme.nitrocdn.com/fsJtPHuAIrjqkSrOmOGUpPSluVVKYWgR/assets/images/optimized/rev-1ea34ca/courses/layouts/68cc81c2-e434-4d69-9db5-c8bfd98448c9.svg' alt=''/>

    </div>
    <div className='skillContainer_text'>
      <h2>SKILLSET</h2>
      <div className='skillContainer_skillset'>
      <h5>HTML</h5>
      <div className='skillContainer_slider skillContainer_slider1'>
      <LinearProgress variant="determinate" value={90} />
      </div>
     
      
      </div>
      <div className='skillContainer_skillset'>
      <h5>CSS</h5>
      <div  className='skillContainer_slider skillContainer_slider2'>
      <LinearProgress variant="determinate" value={90} />
      </div>
     
      
      </div>
      <div className='skillContainer_skillset'>
      <h5>JavaScript</h5>
      <div className='skillContainer_slider skillContainer_slider3'>
      <LinearProgress variant="determinate" value={80} />
      </div>
     
     
      </div>
      <div className='skillContainer_skillset'>
      <h5>Reactjs</h5>
      <div className='skillContainer_slider skillContainer_slider4'>
      <LinearProgress variant="determinate" value={80} />
      </div>
     
     
      </div>
      <div className='skillContainer_skillset'>
      <h5>MongoDB</h5>
      <div className='skillContainer_slider skillContainer_slider5'>
      <LinearProgress variant="determinate" value={70} />
      </div>
     
      
      </div>
    </div>
   </Element>
  )
}
