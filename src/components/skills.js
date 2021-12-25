import React from "react";
import SatgeForSkills from "./stageForSkills";

const Skills = (props) => {
  return (
    <div className="skills-part">
      <h2>Skills</h2>
      
        {props.data.map((item) => {
           
          return (
            <div key={Math.random()} className="skill-itme">
              <SatgeForSkills stage={item.stage}/>
              
              <div className="name-of-skill">
                  {item.name}
              </div>
            </div>
          );
        })}
     
    </div>
  );
};
export default Skills;
