// components/CourseDetails.js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCourseById } from '@/firebase';

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  // const router = useRouter();

  // const { courseId } = router.query;
  const courseId = window.location.pathname.split('/').pop();


  useEffect(() => {
    if (courseId) {
      const fetchCourse = async () => {
        const data = await getCourseById(courseId);
        setCourse(data);
      };
      fetchCourse();
    }
  }, [courseId]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <br />
      <p>{course.description}</p>
      <br />
      <p>Instructor: {course.instructor}</p>
      <br />
      <p>Duration: {course.duration}</p>
      <br />
      <p>Rating: {course.rating}</p>
      <br />
      <p>Enrolled Students: {course.studentsEnrolled}</p>
      <br />
      <div>
        <h2 className="text-2xl font-bold mt-4">Course Content</h2>
        <br />
        <ul>
          {console.log("Course : "+course,"content: ", course.content)}
          {course?.content?.map((item, index) => (
            (<><li key={index}>{item}</li>
            <br /></>)
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
