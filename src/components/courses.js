import React from 'react';
 const Courser=(props)=>{
     return(
         <div className='courses'>
             <h2>Courses</h2>
             {props.data.map(item=>{
                 return(
                     <div className='course-item' key={Math.random()}>
                         <span className='course-name'>{item.name} <br /></span>
                         <span className='course-date'>{item.date}</span>
                         <p className='course-desc'>{item.desc}</p>
                     </div>
                 )
             })}
         </div>
     )
 }
 export default Courser;