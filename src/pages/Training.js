import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Training.css";
import AI_training from "../pages/assets/AI_training.jpg";
import IOT_training from "../pages/assets/IOT_training.jpg";
import IOT_adv from "../pages/assets/IOT_adv.jpg";
import AI_ML from "../pages/assets/AI_ML.jpg";
import business from "../pages/assets/Bussiness_ana.jpg";
import dm from "../pages/assets/Digital_Mark.jpg";
import sanchit from "../pages/assets/founder-sanchit.jpg";
import arpit from "../pages/assets/founder-arpit.jpg";
import mamatha from "../pages/assets/advisor-mamatha.jpg";

const courses = [
  {
    title: "Introduction to AI & Machine Learning",
    image: AI_ML,
    description:
      "Embark on your journey into the fascinating world of artificial intelligence and machine learning. Explore the foundational concepts, algorithms, and applications that are revolutionizing industries and shaping the future.",
    duration: "2 Months",
    price: "Rs 800",
  },
  {
    title: "Advanced AI & Machine Learning",
    image: AI_training,
    description:
      "Take your AI and machine learning skills to the next level with advanced techniques and real-world applications. Dive deep into deep learning, reinforcement learning, and more, and unleash the full potential of intelligent systems.",
    duration: "2.5 Months",
    price: "Rs 1500",
  },
  {
    title: "Fundamentals of IoT",
    image: IOT_training,
    description:
      "Discover the fundamentals of the Internet of Things and learn how connected devices are transforming our world. From sensors to cloud computing, gain the knowledge and skills to build innovative IoT solutions.",
    duration: "2 Months",
    price: "Rs 800",
  },
  {
    title: "Advanced IoT Solutions",
    image: IOT_adv,
    description:
      "Master the design and implementation of advanced IoT solutions that drive innovation and efficiency. Explore topics such as edge computing, IoT security, and data analytics, and lead the way in the IoT revolution.",
    duration: "3 Months",
    price: "Rs 1200",
  },
  {
    title: "Business Intelligence & Analytics",
    image: business,
    description:
      "Gain the insights and skills needed to drive strategic decisions and business growth through data-driven analysis. From predictive analytics to data visualization, master the tools and techniques used by top business analysts to unlock the full potential of data.",
    duration: "2.5 Months",
    price: "Rs 1200",
  },
  {
    title: "Digital Marketing Mastery",
    image: dm,
    description:
      "Become a digital marketing expert and elevate your online presence with cutting-edge strategies and techniques. From SEO to social media marketing, learn how to reach your audience effectively, optimize campaigns, and drive business success in the digital age.",
    duration: "2 Months",
    price: "Rs 1000",
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
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // Auto play every 5 seconds
        className="mySwiper"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <div className="course-card">
              <img
                src={course.image}
                alt={course.title}
                className="course-image"
              />
              <div className="course-details">
                <h2 className="course-title">{course.title}</h2>
                <p className="course-description">{course.description}</p>
                {/* <p className="course-duration">
                  <strong>Duration:</strong> {course.duration}
                </p>
                <p className="course-price">
                  <strong>Price:</strong> {course.price}
                </p> */}
                <button className="enroll-button">Enroll Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
