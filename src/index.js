import React from 'react';
import ReactDOM from 'react-dom';
import DataForMe from './components/data-for-me';
import EducationPart from './components/education-part';
import "./style/cv-page.scss"
import "./style/phone.scss"

 const App =()=>{
     return(
         <div className='cv-page'>
             <DataForMe/>
             <EducationPart/>
        
         </div>
     )
 }

 ReactDOM.render(<App/>, document.getElementById("root"));