import projects from '../Data/projects.js';

const Projects = () => (
  <section className="project">
    <div className="section__container project__container">
      <p className="section__subtitle">Portfolio</p>
      <h2 className="section__title"><span>Latest</span> Project</h2>
      <div className="project__grid">
        {projects.map((project, index) => (
          <div className="project__card" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <h2>{project.title}</h2>
                <p className="text">{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;