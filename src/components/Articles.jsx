import './Articles.css';
import article1 from '/src/assets/article1.png'; 
import article2 from '/src/assets/article2.png';
import article3 from '/src/assets/article3.png';

const Articles = () => {
  return (
    <section id="articles" className="articles">
      <h2>Research Articles</h2>
      <p className="articles-description">
        Some research articles focused on the cutting-edge advancements in diabetic retinopathy detection and related fields.
      </p>
      <div className="article-list">
        <div className="article">
          <img src={article1} alt="Article 1" className="article-image" />
          <div className="article-tags">
            <span className="tag">Research</span>
            <span className="read-time">5 min read</span>
          </div>
          <h3>Understanding AI in Eye Care</h3>
          <p>How AI is transforming patient management in eye clinics.</p>
          <a href="#" className="read-more-link">Read more &gt;</a>
        </div>
        <div className="article">
          <img src={article2} alt="Article 2" className="article-image" />
          <div className="article-tags">
            <span className="tag">Innovation</span>
            <span className="read-time">5 min read</span>
          </div>
          <h3>The Future of Eye Health</h3>
          <p>Exploring advancements in technology for eye health management.</p>
          <a href="#" className="read-more-link">Read more &gt;</a>
        </div>
        <div className="article">
          <img src={article3} alt="Article 3" className="article-image" />
          <div className="article-tags">
            <span className="tag">Trends</span>
            <span className="read-time">5 min read</span>
          </div>
          <h3>AI and Patient Care</h3>
          <p>Integrating AI solutions for improved patient outcomes in eye care.</p>
          <a href="#" className="read-more-link">Read more &gt;</a>
        </div>
      </div>
    </section>
  );
};

export default Articles;
