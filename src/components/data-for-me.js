import React from "react";
import "../style/data-for-me.scss";
import pic from "../pic.jpg";
import Details from "./details";
import Skills from "./skills";
import { detailsArr , skillsArr , ClickExit } from "./dataAndFuncions";
import exit  from "../exit.png"

const DataForMe = () => {
  return (
    <div className="data-part">
      <img className="exit" src={exit} alt="exit" onClick={ClickExit} />
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
