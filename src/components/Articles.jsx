
import { motion } from 'framer-motion';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from './ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './ui/hover-card';
import { ArrowRight } from 'lucide-react';
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

  const articles = [
    {
      image: article1,
      tag: "Research",
      readTime: "5 min read",
      title: "Understanding AI in Eye Care",
      description: "How AI is transforming patient management in eye clinics."
    },
    {
      image: article2,
      tag: "Innovation",
      readTime: "5 min read",
      title: "The Future of Eye Health",
      description: "Exploring advancements in technology for eye health management."
    },
    {
      image: article3,
      tag: "Trends",
      readTime: "5 min read",
      title: "AI and Patient Care",
      description: "Integrating AI solutions for improved patient outcomes in eye care."
    }
  ];

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
        {articles.map((article, index) => (
          <motion.div 
            key={index}
            className="article-wrapper"
            variants={articleVariants}
            whileHover={{ 
              y: -10, 
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <HoverCard>
              <HoverCardTrigger asChild>
                <Card className="article-card glass-card">
                  <CardHeader className="article-header p-0">
                    <img src={article.image} alt={article.title} className="article-image" />
                    <div className="article-tags">
                      <span className="tag">{article.tag}</span>
                      <span className="read-time">{article.readTime}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="article-content">
                    <CardTitle className="article-title">{article.title}</CardTitle>
                    <CardDescription className="article-description">
                      {article.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="article-footer">
                    <a href="#" className="read-more-link">
                      Read more <ArrowRight size={14} className="ml-1" />
                    </a>
                  </CardFooter>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="article-hover-content">
                <h4>{article.title}</h4>
                <p>{article.description}</p>
                <p className="hover-card-tag">Topic: {article.tag}</p>
              </HoverCardContent>
            </HoverCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Articles;
