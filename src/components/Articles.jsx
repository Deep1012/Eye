
import { motion } from 'framer-motion';
import './Articles.css';
import article1 from '/src/assets/article1.png'; 
import article2 from '/src/assets/article2.png';
import article3 from '/src/assets/article3.png';

const Articles = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100 
      }
    }
  };

  const articleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };

  return (
    <motion.section 
      id="articles" 
      className="articles"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2 variants={titleVariants}>Research Articles</motion.h2>
      <motion.p className="articles-description" variants={titleVariants}>
        Some research articles focused on the cutting-edge advancements in diabetic retinopathy detection and related fields.
      </motion.p>
      <div className="article-list">
        <motion.div 
          className="article"
          variants={articleVariants}
          whileHover={{ 
            y: -10, 
            boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          <img src={article1} alt="Article 1" className="article-image" />
          <div className="article-tags">
            <span className="tag">Research</span>
            <span className="read-time">5 min read</span>
          </div>
          <h3>Understanding AI in Eye Care</h3>
          <p>How AI is transforming patient management in eye clinics.</p>
          <a href="#" className="read-more-link">Read more &gt;</a>
        </motion.div>
        <motion.div 
          className="article"
          variants={articleVariants}
          whileHover={{ 
            y: -10, 
            boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          <img src={article2} alt="Article 2" className="article-image" />
          <div className="article-tags">
            <span className="tag">Innovation</span>
            <span className="read-time">5 min read</span>
          </div>
          <h3>The Future of Eye Health</h3>
          <p>Exploring advancements in technology for eye health management.</p>
          <a href="#" className="read-more-link">Read more &gt;</a>
        </motion.div>
        <motion.div 
          className="article"
          variants={articleVariants}
          whileHover={{ 
            y: -10, 
            boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          <img src={article3} alt="Article 3" className="article-image" />
          <div className="article-tags">
            <span className="tag">Trends</span>
            <span className="read-time">5 min read</span>
          </div>
          <h3>AI and Patient Care</h3>
          <p>Integrating AI solutions for improved patient outcomes in eye care.</p>
          <a href="#" className="read-more-link">Read more &gt;</a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Articles;
