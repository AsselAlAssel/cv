import React from "react";
import Education from "./education";
import Courser from "./courses";
import "../style/education.scss";
import Projects from "./projects";
import { projectArr,coursesArr , ClickMenu } from "./dataAndFuncions";
import menu from "../menu.png"



const EducationPart = () => {
  return (
    <div className="education-part">
    <img src={menu} alt="menu" onClick={ClickMenu} />
     
      <Education />
      <Courser data={coursesArr} />
      <Projects data={projectArr}/>
    </div>
  );
};

export default EducationPart;
