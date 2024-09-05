// components/CourseCard.js
import React from 'react';
import Link from 'next/link';

const CourseCard = ({ course }) => {
  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold">{course.title}</h2>
      <p>{course.description}</p>
      <p>Instructor: {course.instructor}</p>
      <p>Enrolled: {course.studentsEnrolled}</p>
      <p>Rating: {course.rating}</p>
      <Link className="text-blue-500" href={`/courses/${course.id}`}>
        View Details
      </Link>
    </div>
  );
};

export default CourseCard;
