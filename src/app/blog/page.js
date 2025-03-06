"use client";

import { Breadcrumb } from "rsuite";
import ScrollPage from "../components/ScrollPage";
import WbHeader from "../components/WbHeader";
import SolarBlog from "../components/SolarBlog";
import { motion } from "motion/react";
import WbFooter from "../components/WbFooter";
// import { useServerLink } from "../context/server.context";

export default function BlogPage() {
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
          <h1>Blog</h1>
        </div>
        <Breadcrumb className="bc-content">
          <Breadcrumb.Item href="/" className="bc-non-active">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="bc-active">
            Blog
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="home-section7 ">
        <motion.div
          className="sec5-content text-center "
          initial={{ opacity: 0, translateY: 25 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="main-color">Blog</h4>
          <h2>Latest News & Blog</h2>
        </motion.div>
        <motion.div
          className="blog-container"
          initial={{ opacity: 0, translateY: 25 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <SolarBlog />
        </motion.div>
      </div>
      <div>
        <WbFooter />
      </div>
    </div>
  );
}
