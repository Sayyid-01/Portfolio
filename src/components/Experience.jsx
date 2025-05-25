import React from 'react';
import '../index.css';
import experiences from '../Data/experience';
const Experience = () => {
  return (
    <section className="experience">
      <h2 className="experience__title">My <span>Education</span></h2>
      <div className="experience__grid">
        {experiences.map((exp, index) => (
          <div className="experience__card" key={index}>
            <h3>{exp.title}</h3>
            <p><strong>Board/University:</strong> {exp.board}</p>
            <p><strong>Percentage:</strong> {exp.percentage}</p>
            <p><strong>Status:</strong> {exp.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;