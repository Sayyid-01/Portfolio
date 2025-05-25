const Footer = () => (
  <footer>
    <div className="section__container footer__container">
      <div className="footer__content">
        <h2 className="section__title">Contact <span>Me!</span></h2>
        <p className="section__subtitle">If you have any project in your mind</p>
        <div className="footer__details">
          <p>Jasidih, Deoghar (Jharkhand)</p>
          <p>India</p>
        </div>
        <div className="social__icons">
          <a href="https://www.facebook.com/sahilkhan.sahilkhan.336717/" className="icon">Facebook</a>
          <a href="https://www.linkedin.com/in/sahil-ansari-8b98b0364" className="icon">LinkedIn</a>
          <a href="https://github.com/Sayyid-01" className="icon">GitHub</a>
        </div>
      </div>
      <form
        action="https://formsubmit.co/sahilksahil6205515277@gmail.com"
        method="POST"
        className="footer__form"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email Address" required />
        <input type="text" name="phone" placeholder="Your Phone Number" />
        <textarea name="idea" cols="30" rows="10" placeholder="Your Idea"></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  </footer>
);

export default Footer;
