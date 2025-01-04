import React from 'react';

interface BlogPostCardProps {
  title: string;
  summary: string;
  date: string;
  author: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ title, summary, date, author }) => {
  return (
    <div style={styles.card}>
      <h2>{title}</h2>
      <p>{summary}</p>
      <div style={styles.footer}>
        <span>{author}</span> | <span>{date}</span>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    fontSize: '0.9rem',
    color: '#555',
    marginTop: '10px',
  },
};

export default BlogPostCard;
