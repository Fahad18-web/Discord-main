import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Content.css'
const Content = () => {
  return (
    <>
      <div className="bg-black text-white p-3 sm:flex">
        <Row className="sm:flex items-center justify-center ml-10">
          <Col md={6} className="sm:flex items-center flex-col p-3 max-sm:ml-10 ">
            <h1 className="fade-in display-6 fw-bold text-uppercase mb-4 fs-1 w-[280px]">
              Group chat that’s all fun & games
            </h1>
            <p className="slide-in lead text-align-justify w-[280px]">
              Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/664daa37ea162cadf9603500_Art.webp"
              alt="Background Art"
              className="img-fluid"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Content;
