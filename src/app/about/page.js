"use client";

/* eslint-disable @next/next/no-img-element */
import { Breadcrumb } from "rsuite";
import ScrollPage from "../components/ScrollPage";
import WbHeader from "../components/WbHeader";
import "../styles/about.css";
import { PiLinkSimpleBold } from "react-icons/pi";
import WbFooter from "../components/WbFooter";
// import profileImage1 from "/images/founder1.jpg";
// import profileImage2 from "/images/founder2.png";
import { motion } from "motion/react";
// import { useServerLink } from "../context/server.context";

export default function About() {
  return (
    <div>
      <div>
        <ScrollPage />
      </div>
      <div className=" absolute w-full z-10 ">
        <WbHeader />
      </div>
      <div className="breadcumb-container ">
        <div className=" bc-header ">
          <h1>About Us</h1>
        </div>
        <Breadcrumb className="bc-content">
          <Breadcrumb.Item href="/" className="bc-non-active">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="bc-active">
            About Us
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="about-section1-container">
        <div className="about-sec1-bg-img"></div>
        <motion.div
          className="about-sec1-header"
          initial={{ opacity: 0, translateY: 25 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="main-color">Solar Energy</h4>
          <h2>Beyond Renewables: Pioneering a Cleaner Future</h2>
        </motion.div>
        <motion.div
          className="about-sec1-content"
          initial={{ opacity: 0, translateY: 25 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>
            In an era where the environment&apos;s health is paramount, three
            visionaries-Manhar and Vedant-embarked on a journey to make a
            difference. Driven by a shared passion for sustainability and
            innovation, they founded Beyond Renewables, a company dedicated to
            creating a cleaner future and fostering a circular economy.
          </p>
          <p>
            Beyond Renewables is more than a startup; it&apos;s a movement
            toward a sustainable world. Our mission is to revolutionize
            recycling and waste management, transforming how industries and
            individuals perceive and handle waste. We believe in the power of a
            circular economy, where resources are reused, repurposed, and
            regenerated to their fullest potential.
          </p>
          <p>
            Our approach integrates advanced technologies and innovative
            practices, ensuring that every step we take is aligned with our
            commitment to environmental stewardship. From solar PV panel
            recycling to developing comprehensive waste management solutions,
            Beyond Renewables is at the forefront of change.
          </p>
          <p>
            Manhar and Vedant bring diverse expertise and a shared vision to the
            table. Together, they are dedicated to pushing boundaries and
            setting new standards in the recycling industry. Their leadership
            and dedication drive Beyond Renewables to continuously seek new
            opportunities to expand and impact various sectors, contributing to
            a sustainable future for generations to come.
          </p>
        </motion.div>
      </div>
      <div className="about-section2-container">
        <div className="about-sec1-bg-img"></div>
        <motion.div
          className="about-sec1-header"
          initial={{ opacity: 0, translateY: 25 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="main-color">Our Team</h4>
          <h2>Our Best Experts</h2>
        </motion.div>
        <div className="about-sec2-content">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ amount: 0.5 }}
            className="about-profile-container"
          >
            <div className="imageWrapper">
              <img src="/images/founder1.jpg" alt="profileImage1" />
            </div>
            <div className="about-profile-content">
              <div>
                <h5>Vedant</h5>
                <p className=" text-gray-900 ">Founder</p>
              </div>
              <div className="profile-link-logo">
                <a href="#">
                  <PiLinkSimpleBold />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ amount: 0.5 }}
            className="about-profile-container"
          >
            <div className="imageWrapper">
              <img src="/images/founder2.png" alt="profileImage2" />
            </div>
            <div className="about-profile-content">
              <div>
                <h5>Manhar</h5>
                <p className=" text-gray-900 ">Founder</p>
              </div>
              <div className="profile-link-logo">
                <a href="#">
                  <PiLinkSimpleBold />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div>
        <WbFooter />
      </div>
    </div>
  );
}
