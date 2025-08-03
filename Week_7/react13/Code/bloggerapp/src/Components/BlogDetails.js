import React from 'react';

function BlogDetails({ blogs }) {
  return (
    <div className="section">
      <h1>Blog Details</h1>
      {blogs.map((blog, idx) => (
        <div key={idx}>
          <h1>{blog.title}</h1>
          <p><strong>{blog.author}</strong></p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;