import React from "react";
import "../style/data-for-me.scss";
import pic from "../pic.jpg";
import Details from "./details";
import Skills from "./skills";

var detailsArr = [
  "Rummaneh",
  "Jenin",
  "Palesine",
  "0595774519",
  "aseel1234500000@gmail.com",
];
var skillsArr = [
  { name: "c++", stage: 3 },
  { name: "java", stage: 3 },
  { name: "HTml &CSS", stage: 3 },
  { name: "Javascript", stage: 2 },
  { name: "React", stage: 2 },
  { name: "SQL", stage: 3 },
  { name: "Git", stage: 1 },
  { name: "Design Patterns", stage: 2 },
  { name: "Data Struchtures", stage: 3 },
];
const DataForMe = () => {
  return (
    <div className="data-part">
      <div className="pic-name-jop">
        <img src={pic} alt="my pic" />
        <h1>Assel Khalid Alali</h1>
        <p className="jop">SOFTWARE ENGINEER</p>
      </div>
      <div className="skills-information">
        <h2>Details</h2>
        <Details data={detailsArr} />
        <p className="date-of-birth">Date / Place of Birth</p>
        <span>
          Jan 8, 2001 <br />
        </span>
        <span>Rammalah</span>

        <Skills data={skillsArr} />
      </div>
    </div>
  );
};
export default DataForMe;
