import projects from '../Data/projects.js';

const Projects = () => (
  <section className="project">
    <div className="section__container project__container">
      <h2 className="section__title">My<span> Project</span> </h2>
      <div className="project__grid">
        {projects.map((project, index) => (
          <div className="project__card" key={index}>

            <a href={project.link}>

              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <h2>{project.title}</h2>
                <p className="text">{project.description}</p>
              </div>

              <h2 className='text'>{project.title}</h2>


            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);


export default Projects;

