import './Hero.css';
import hero from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Revolutionizing Eye Health with AI-Powered Diagnostic</h1>
        <p>Unleash the power of deep learning technology to detect diabetic retinopathy and optimize ophthalmology research.</p>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div className="hero-image">
        <img src={hero} alt="Eye health illustration" />
      </div>
    </section>
  );
};

export default Hero;
