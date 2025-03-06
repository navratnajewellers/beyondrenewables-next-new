"use client";

/* eslint-disable @next/next/no-img-element */
import { Col, Row } from "rsuite";
// import { useServerLink } from "../context/server.context";
import "../styles/solarBlog.css";

const SolarBlog = () => {
  return (
    <Row>
      <Col xs={24} sm={24} md={12} lg={12} className="blog1">
        <div className="blog1-cont">
          <div className="imageWrapper blog-cover-img ">
            <img src={`/images/blog-1.jpg`} alt="blog-1" />
          </div>
          <a href={`/blog/solar-panel-waste`}>
            <h4 className="blog-heading">
              Solar Panel Waste: Numbers and Nuisance
            </h4>
            <div className="blog-logo-content">
              <div className="imageWrapper blog-logo ">
                <img src={`/images/logo-33_1.png`} alt="logo-33" />
              </div>
              <span>Beyond Renewables</span>
            </div>
            <h4 className="blog1-read-more">Read More</h4>
          </a>
        </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} className="blog2">
        <div className="blog1-cont">
          <div className="imageWrapper blog-cover-img ">
            <img src={`/images/blog-2.jpg`} alt="blog-2" />
          </div>
          <a href={`/blog/solar-panel-recyling`} className="blog2-content">
            <h4 className="blog-heading">
              Solar Panel Recyling: Perfecting the Path to a Circular Future
            </h4>
            <div className="blog-logo-content">
              <div className="imageWrapper blog-logo ">
                <img src={`/images/logo-33_1.png`} alt="logo-33" />
              </div>
              <span>Beyond Renewables</span>
            </div>
            <h4 className="blog1-read-more">Read More</h4>
          </a>
        </div>
      </Col>
    </Row>
  );
};

export default SolarBlog;
