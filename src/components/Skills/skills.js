import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import webDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

function Skills() {
  return (
   
    <section id="skills">
      <span className="skillTittle">What I Do </span>
      <span className="skillDesc">
        I am skilled and passionate Mern stack developer  with 2 year of experience.. and a competative
         Programmer and currently expolring  more on backend for full stack roles. 
         currently i am working on nextjs and typescript..
       
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign " className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p> This is a demo text, you can write your own here</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webDesign} alt="webDesign " className="skillBarImg" />
          <div className="skillBarText">
            <h2>Frontend developer</h2>
            <p>Create websites using Html ,css, javascript</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign}alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>backend developer</h2>
            <p> use Api to fetch data and create real time project</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;