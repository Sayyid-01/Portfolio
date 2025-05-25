import services from '../Data/services.js';

const Services = () => (
  <section className="service">
    <div className="section__container service__container">
      <p className="section__subtitle">What I Offer!</p>
      <h2 className="section__title"><span>My</span> Services</h2>
      <div className="service__grid">
        {services.map((service, index) => (
          <div className="service__card" key={index}>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <a href="#" className="read__more">Read more...</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;