import './AboutUs.css';
import aboutus from '../assets/aboutus.png';

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <div className="about-us-image">
        <img src={aboutus} alt="Eye illustration" />
      </div>
      <div className="about-us-content">
        <h2>About Us</h2>
        <p>
          From comprehensive research analysis to cutting-edge diagnostic tools, our team of experts is dedicated to
          providing tailored solutions that address the unique needs of ophthalmologists and their patients.
        </p>
        <button className="explore-btn">Explore</button>
      </div>
    </section>
  );
};

export default AboutUs;
