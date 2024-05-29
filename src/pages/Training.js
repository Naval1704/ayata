import React from "react";
import "./Training.css";
import AI_training from "../pages/assets/AI_training.jpg";
import ML_training from "../pages/assets/Machine_Learning_training.jpg";
import IOT_training from "../pages/assets/IOT_training.jpg";
import sanchit from "../pages/assets/founder-sanchit.jpg";
import arpit from "../pages/assets/founder-arpit.jpg";
import mamatha from "../pages/assets/advisor-mamatha.jpg";

const courses = [
  {
    title: "Artificial Intelligence",
    image: AI_training,
    description:
      "Learn the fundamentals and advanced concepts of AI, transforming the way we interact with technology.",
    duration: "1 Months",
    price: "Rs 500",
  },
  {
    title: "Internet of Things",
    image: IOT_training,
    description:
      "Explore the interconnected world of IoT and understand how devices communicate and work together.",
    duration: "3 Months",
    price: "Rs 500",
  },
  {
    title: "Machine Learning",
    image: ML_training,
    description:
      "Master the skills of Machine Learning to create intelligent systems and predictive models.",
    duration: "2 Months",
    price: "Rs 500",
  },
];

const instructors = [
  {
    name: "Sanchit Aggarwal",
    course: "Artificial Intelligence",
    image: sanchit,
  },
  {
    name: "Arpit Jain",
    course: "Internet of Things",
    image: arpit,
  },
  {
    name: "Dr. Mamatha Raghu",
    course: "Machine Learning",
    image: mamatha,
  },
];

function Training() {
  return (
    <div id="training" className="training-page">
      <h1 className="training-heading">
        Enhance Your Skills with Our Expert Training Courses
      </h1>
      <div className="courses">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
            />
            <h2 className="course-title">{course.title}</h2>
            <p className="course-description">{course.description}</p>
            <p className="course-duration">
              <strong>Duration:</strong> {course.duration}
            </p>
            <p className="course-price">
              <strong>Price:</strong> {course.price}
            </p>
            <button className="enroll-button">Enroll Now</button>
          </div>
        ))}
      </div>
      <h2 className="instructors-heading">Meet Our Expert Instructors</h2>
      <div className="instructors">
        {instructors.map((instructor, index) => (
          <div className="instructor-card" key={index}>
            <img
              src={instructor.image}
              alt={instructor.name}
              className="instructor-image"
            />
            <h3 className="instructor-name">{instructor.name}</h3>
            <p className="instructor-course">
              <strong>Course:</strong> {instructor.course}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Training;
