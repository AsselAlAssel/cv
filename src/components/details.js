import React from 'react';
const Details=(props)=>{
   

    return(
        <div className='data'>{
            props.data.map(item=>{
                return(
                    <span key={Math.random()}>{item} <br /></span>
                   
                )
            })}
        
        </div>
    )
}
export default Details;