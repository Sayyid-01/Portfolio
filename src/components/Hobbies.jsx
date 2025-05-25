import React from 'react';
import '../index.css';

const hobbies = [
  { name: "Traveling", icon: "/assets//hobbies/travelling.jpg" },
  { name: "Photography", icon: "/assets//hobbies/photography.jpeg" },
  { name: "Biking", icon: "/assets//hobbies/biking.avif" },
  { name: "Music", icon: "/assets//hobbies/music.jpg" },
  { name: "Reading", icon: "/assets//hobbies/reading.jpeg" },
  { name: "Coding", icon: "/assets//hobbies/coding.jpg" },
];

const Hobbies = () => {
  return (
    <section className="hobbies">
      <h2 className="hobbies__title">My <span>Hobbies</span></h2>
      <div className="hobbies__grid">
        {hobbies.map((hobby, index) => (
          <div className="hobby__card" key={index}>
            <img src={hobby.icon} alt={hobby.name} className="hobby__icon" />
            <p className="hobby__name">{hobby.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
