import React from 'react';
import Skill from './skill'; 


function Skills() {
  return <>
    <section className="skills py-5 bg-dark text-white">
      <div className="container" style={{display: 'flex'}}>

      <div className="para" style={{flex: '1', maxWidth: '40%'}}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Voluptatum fuga ducimus, error nisi quas dolorem iusto doloribus praesentium officiis ipsam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Voluptatum fuga ducimus, error nisi quas dolorem iusto doloribus praesentium officiis ipsam.
        </div>


        <div className="skl" style={{flex: '2'}}>
        <h2>Skills</h2>
        <div className="skills-list">
          <Skill name="HTML/CSS" percentage={90} />
          <Skill name="Web Design" percentage={85} />
          <Skill name="Responsive Design" percentage={80} />
          <Skill name="Web Development" percentage={75} />
          <Skill name="Mobile App Design" percentage={70} />
        </div>

        </div>
       
      </div>
    </section>
 </>
}

export default Skills;