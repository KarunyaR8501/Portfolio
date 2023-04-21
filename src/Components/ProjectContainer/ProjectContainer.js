import React from 'react'
import {Element} from 'react-scroll'
import Project from '../Project/Project'
import './ProjectContainer.css'


export default function ProjectContainer() {
const clientProjects= [
    {
    img:"https://dz2cdn1.dzone.com/storage/temp/13937171-pokemon1.png",
    title:" Pokemon API using async/await with fetch.",
    des:"I will be making a small application that shows the original 151 Pokemon on a single page.Every Pokemon will have a card like styling. Every Pokemon card will have the name, picture, their number, and their type.",
    link:"https://rainbow-centaur-7c266d.netlify.app/",
},
// {
//     img:"https://dz2cdn1.dzone.com/storage/temp/13937171-pokemon1.png",
//     title:" Pokemon API using async/await with fetch.",
//     des:"I will be making a small application that shows the original 151 Pokemon on a single page.Every Pokemon will have a card like styling. Every Pokemon card will have the name, picture, their number, and their type.",
//     link:"https://rainbow-centaur-7c266d.netlify.app/",
// },
]
  return (
    
      <Element className="projectContainer" id="projects">
        <h1>Projects</h1>
        <p>Here are some projects which I done for making lives of people easy</p>
        <div className='projectContainer_container'>
            {
                clientProjects.map((project,index)=>{
                    return(
                        <Project key={index} img={project.img}  title={project.title} des={project.des} link={project.link}/>
                    )
                })
                    
                    
                
            }

        </div>
      </Element>
    
  )
}
