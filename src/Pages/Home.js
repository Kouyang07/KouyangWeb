import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import './Resources/Home.css';

const Home = () => {
    return (
      <div className="container SITE_CONTAINER">
        <div className="row BIO_CONTAINER">
          <div className="col-lg-6 BIO d-flex flex-column justify-content-center align-items-center">
            <div className="COLUMNS text-center">
              <div className="BIO_TEXT">
                <h1 className="BIO_TITLE">Hi, I'm Kaicheng</h1>
                <h2 className="BIO_SUBTITLE">Software Engineer</h2>
                <p className="BIO_CONTENT">
                  I'm a software engineer with a passion for learning new things. I have a background in computer science and have worked on a variety of projects ranging from backend development to robotics.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 BIO_IMAGE_CONTAINER text-center mt-4">
            <img className="BIO_IMAGE img-fluid rounded-circle" src="https://imgur.com/barkSSd.jpg" alt="Kaicheng" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;