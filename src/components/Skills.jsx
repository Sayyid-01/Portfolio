import React from 'react';
import '../index.css';
import htmlLogo from '/assets/html-logo.webp';
import cssLogo from '/assets/css-logo.png';
import jsLogo from '/assets/js-logo.png';
import reactLogo from '/assets/react-logo.png';
import reduxLogo from '/assets/redux-logo.png';
import tailwindLogo from '/assets/talwind-logo.avif';
import nodeLogo from '/assets/node.png';
import bootstrapLogo from '/assets/bootstrap.jpeg';

const skills = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "Redux", logo: reduxLogo },
  { name: "Tailwind CSS", logo: tailwindLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "Bootstrap", logo: bootstrapLogo }
];



const Skills = () => {
      const scrollingSkills = skills.concat(skills);

  return (
    <section className="skills">
      <h2 className="skills__title">My <span>Skills</span></h2>
      <div className="skills__marquee">
         <div className="skills__track">
          {scrollingSkills.map((skill, i) => (
            <div className="skill__item" key={i}>
              <img src={skill.logo} alt={skill.name} className="skill__logo" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
