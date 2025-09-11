"use client";

/* eslint-disable @next/next/no-img-element */
import { Col, Container, Divider, Row } from "rsuite";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import "../styles/footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import AnimatedText from "./AnimatedText";
// import companyLogo from "/images/logo-33.webp";
// import { useServerLink } from "../context/server.context";

const WbFooter = () => {
  return (
    <div>
      <Container className="wb-footer">
        <Row className="footer-section1">
          <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            className=" flex sec1-content-container "
          >
            <div className="footer-row1-icon-container">
              <BiSolidPhoneCall />
            </div>
            <div>
              <h5>Customer Support</h5>
              <a href="tel:8340325075">8340-325075</a>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            className=" flex sec1-content-container "
          >
            <div className="footer-row1-icon-container">
              <IoIosMail />
            </div>
            <div>
              <h5>Support & Email</h5>
              <a href="mailto:info@beyondrenewables.in">
                info@beyondrenewables.in
              </a>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            className=" flex sec1-content-container "
          >
            <div className="footer-row1-icon-container">
              <IoLocation />
            </div>
            <div>
              <h5>Our Location</h5>
              <a href="https://google.com/maps">
                WeWork Eldeco Centre, Block A, Shivalik Colony, Malviya Nagar,
                Delhi, New Delhi, Delhi 110017
              </a>
            </div>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col xs={24} sm={24} md={8} lg={8} className="sec2-content-container">
            <div>
              <a href={`/`} className="imageWrapper footer-sec2-logo ">
                <img src="/images/logo-33.webp" alt="companyLogo" />
              </a>
              <div className=" flex m-4 ft-sec2-social-icon-container ">
                <a href="https://linkedin.com/company/beyond-renewables">
                  <FaLinkedinIn />
                </a>

                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={5} lg={5} className="sec2-content-container">
            <div>
              <h4>Services</h4>
              <ul className="sec2-ul">
                <li>
                  <a href={`/solar-recycling`}>Solar Recycling</a>
                </li>
                <li>
                  <a href={`/decommissioning`}>
                    Decommissioning of solar panels
                  </a>
                </li>
                <li>
                  <a href={`/digitization`}>Digitization of solar panels</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={24} sm={24} md={4} lg={4} className="sec2-content-container">
            <div>
              <h4>Quick Links</h4>
              <ul className="sec2-ul">
                <li>
                  <a href={`/contact`}>Contact</a>
                </li>
                <li>
                  <a href={`/about`}>About</a>
                </li>
                <li>
                  <a href={`/blog`}>Blog</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={24} sm={24} md={7} lg={7} className="sec2-content-container">
            <div>
              <h4>Get In Touch</h4>
              <ul className="sec2-ul">
                <li>
                  <a href="tel:+919319088139">Manhar Dixit: 9319088139</a>
                </li>
                <li>
                  <a href="tel:+918340325075"> Vedant Taneja: 8340325075 </a>
                </li>
                <li>
                  <a href="mailto:info@beyondrenewables.in">
                    info@beyondrenewables.in
                  </a>
                </li>
                <li>
                  <a href="#">
                    Shop no. 04, Gayatri Aura, Gh-11, Sector 1, I.A, Surajpur,
                    Noida, Bisrakh Jalalpur, Uttar Pradesh 201306
                  </a>
                </li>
                <li>
                  <a href="#">CIN Number: U38210UP2025PTC227329</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="footer-copyright-container">
          <Col xs={24} sm={24} md={14} lg={14}>
            <section className="ft-cp-sec1">
              Copyright {new Date().getFullYear()} - All Rights Reserved By
              <a href="#">
                <AnimatedText text={`Beyond Renewables`} />
              </a>
            </section>
          </Col>
          <Col xs={24} sm={24} md={10} lg={10}>
            <section className="ft-cp-sec2">
              <a href={`/privacy-policy`}>Privacy & Policy</a>
              <a href={`/term-condition`}>Terms and Conditions</a>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WbFooter;
