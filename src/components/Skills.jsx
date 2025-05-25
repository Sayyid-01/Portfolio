import React from 'react';
import '../index.css';
<<<<<<< HEAD
import htmlLogo from '../../src/assets/html-logo.webp';
import cssLogo from '../../src/assets/css-logo.png';
import jsLogo from '../../src/assets/js-logo.png';
import reactLogo from '../../src/assets/react-logo.png';
import reduxLogo from '../../src/assets/redux-logo.png';
import tailwindLogo from '../../src/assets/talwind-logo.avif';
import nodeLogo from '../../src/assets/node.png';
import bootstrapLogo from '../../src/assets/bootstrap.jpeg';
=======
import htmlLogo from '/assets/html-logo.webp';
import cssLogo from '/assets/css-logo.png';
import jsLogo from '/assets/js-logo.png';
import reactLogo from '/assets/react-logo.png';
import reduxLogo from '/assets/redux-logo.png';
import tailwindLogo from '/assets/talwind-logo.avif';
import nodeLogo from '/assets/node.png';
import bootstrapLogo from '/assets/bootstrap.jpeg';
>>>>>>> f5b72b6ae4fc81142b6c40f08993be82ff420fae

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
