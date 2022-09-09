import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import photo from "../../assets/img/Group 3.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { portfolioData } from "./portfolioData";
import { useFormik } from "formik";
import * as Yup from "yup";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const Home = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 Characters or less")
        .required("Required !"),
      email: Yup.string().email("Invalid Email").required("Required !"),
    }),
    onSubmit: (values, {resetForm})=> {
      const users = collection(db, 'contactinfo');

      addDoc(users,{
        username : formik.values.name,
        useremail : formik.values.email,
        usermessage : formik.values.message,
      })
      alert('Form Submitted!')
      resetForm();
    },
  });

  return (
    <main>
      <div className="home" id="home">
        <div className="home-content">
          <h5>Hello, It's Me</h5>
          <h6 className="typewriter-effect">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("IS Student")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("UI/UX Designer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Front End Developer")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </h6>
          <h1>Albert Barnabas</h1>
          <p>
            Currently a 5th Semester Student Majoring Information Systems in
            Bina Nusantara University. Taking Business Intelligence as Elective.
          </p>
          <a className="home-btn" href="#about">
            Know Me More
            <span style={{ display: "flex", marginLeft: "10px" }}>
              <BsFillArrowRightCircleFill />
            </span>
          </a>
        </div>
        <div className="home-img">
          <img src={photo} alt="" />
        </div>
      </div>

      <div className="about" id="about">
        <h1>About</h1>
        <p>
          Full Time Student in Binus University. Currently learning React
          <span style={{ color: "#d0051de7", margin: "0 5px" }}>.</span>js as my
          tech stack. Also focusing in making UI Mock Up Design for Website.
          Enjoy doing works in a group, can be the leader or member. Not going
          to stop learning until all goals achieved. Feel free to download my CV
          in the link below.
        </p>
        <a href="../../assets/Cv/Resume.pdf" download>
          Download CV
        </a>
      </div>

      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <p className="port-header-text">Here are some of my works</p>
        <div className="portfolioContainer">
          {portfolioData.map((item, index) => {
            return (
              <div key={index} className="port-wrapper">
                <div className="port-img">
                  <img
                    src={require("../../assets/img/PortfolioImage/" +
                      item.image +
                      ".png")}
                  />
                </div>
                <div className="port-text">
                  <h4>{item.title}</h4>
                  <h6>{item.type}</h6>
                  <p>{item.description}</p>
                  <span>{item.role}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="contact" id="contact">
        <h1>Contact Me</h1>
        <p>Don't Be Shy, Let's Talk !!</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="contact-input-container">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <span>{formik.errors.name}</span>
            ) : null}
          </div>
          <div className="contact-input-container">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <span>{formik.errors.email}</span>
            ) : null}
          </div>
          <div className="contact-input-text">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="4"
              onChange={formik.handleChange}
              value={formik.values.message}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="contact-btn">Send Message</button>
        </form>
      </div>
    </main>
  );
};

export default Home;