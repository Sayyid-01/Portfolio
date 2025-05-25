const About = () => (
  <section className="about">
    <div className="section__container about__container">
      <div className="about__image">
        <img src="../../src/assets/about-bg.jpeg" alt="about" />
      </div>
      <div className="about__content">
        <h2 className="section__title">About <span>Me</span></h2>
        <p className="section__subtitle">Full Stack Web Developer</p>
        <p className="about__details">
          As a Web Developer, I specialize in creating user interfaces and experiences for digital products. I have extensive experience working with developers, and other stakeholders to gather requirements, create wireframes and prototypes, and conduct user testing to ensure that the final product meets the needs of the users. Throughout my career, I have achieved several milestones, including designing successful digital products that have received positive feedback from users and stakeholders.
        </p>
        <button className="btn">More About</button>
      </div>
    </div>
  </section>
);

export default About;