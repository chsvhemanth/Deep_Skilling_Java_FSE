import React from 'react';

function CourseDetails({ courses }) {
  return (
    <div className="section">
      <h1>Course Details</h1>
      {courses.map((course, idx) => (
        <div key={idx}>
          <h1>{course.cname}</h1>
          <h4>{course.cdate}</h4>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;