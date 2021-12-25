import React from 'react';
const Projects=(props)=>{
    return(
        <div className='projects'>
            <h2>Projects</h2>
            {props.data.map(item=>{
                return(
                    <div className='project-item' key={Math.random()}>
                        <div>
                        <p className='project-name'>{item.name}</p>
                        <p className='project-url'><a  href={item.url} >{item.url}</a></p>
                        
                        </div>
                        <p className='project-desc'>{item.desc}</p>

                    </div>

                )
            })}
        </div>
    )
}
export default Projects;