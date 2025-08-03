import React from 'react';
import './App.css';
import { books, blogs, courses } from './data';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';

function App() {
  return (
    <div className="container">
      <div className="section">
        <CourseDetails courses={courses} />
      </div>

      <div className="vline" />

      <div className="section">
        <BookDetails books={books} />
      </div>

      <div className="vline" />

      <div className="section">
        <BlogDetails blogs={blogs} />
      </div>
    </div>
  );
}

export default App;