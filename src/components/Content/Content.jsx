import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Content = () => {
  return (
    <>
      <div className="bg-black text-white">
        <Row className="sm:flex items-center justify-center">
          <Col md={6} className="sm:flex items-center text-center flex-col p-3 max-sm:p-2">
            <h1 className="sm:text-5xl font-bold p-4 max-sm:text-5xl">
              Group chat that’s all fun & games
            </h1>
            <p className="sm:text-center text-3xl font-semibold max-sm:text-2xl p-2 ">
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
