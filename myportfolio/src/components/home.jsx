import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="container">
          <h1 className="navbar-brand">Shruthi Shashidhar</h1>
          <div className="intro-image">
            <img src="shruthi.jpeg" alt="Your Photo" />
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                About Me
              </Link>
            </li>
            </ul>
        </div>
      </nav>
      <section className="intro-section">
        <div className="container">
          <div className="intro-text">
            <h2>Hello! I'm Shruthi Shashidhar</h2>
            <p>
              A passionate software developer with a focus on
              front-end/full-stack development. With 3 years of experience in
              the field, I've had the opportunity to work on a variety of
              projects, from building visually appealing and responsive web
              applications to developing robust and efficient software
              solutions. My journey in software development began during my
              undergraduate studies, where I discovered my love for crafting
              elegant and user-friendly interfaces. Since then, I've honed my
              skills in HTML, CSS, TypeScript, JavaScript, Node.js and various
              front-end frameworks like Angular and React. In addition to my
              technical skills, I'm a strong advocate for clean code practices,
              continuous learning, and teamwork. I believe in the power of
              collaboration and enjoy working in dynamic environments where
              ideas are valued and creativity is encouraged.
            </p>
            <p>
              Previously worked as an Application Development Senior Analyst and
              currently seeking new job opportunities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
