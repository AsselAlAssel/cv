import React from 'react';
const Projects=(props)=>{
    return(
        <div className='projects'>
            <h2>Projects</h2>
            {props.data.map(item=>{
                return(
                    <div className='project-item' key={Math.random()}>
                        <div>
                        <span className='project-name'>{item.name}</span>
                        <a className='project-url' href={item.url} >{item.url}</a>
                        </div>
                        <p className='project-desc'>{item.desc}</p>

                    </div>

                )
            })}
        </div>
    )
}
export default Projects;