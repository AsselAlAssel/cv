import React from "react";
var arr = [0, 0, 0, 0];
const SatgeForSkills = (props) => {

  let x = props.stage;
 
   return (
    <div className="stage-spane">
        {/* {console.log(arr)} */}
      {arr.map((i) => {
         
        
        return <span key={Math.random()} className={x-->0? "active" : "no-active"}></span>;
        
      })}
    </div>
  );
};

export default SatgeForSkills;
