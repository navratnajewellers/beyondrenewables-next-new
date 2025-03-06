"use client";

import { Breadcrumb } from "rsuite";
import ScrollPage from "../components/ScrollPage";
import WbHeader from "../components/WbHeader";
import WbFooter from "../components/WbFooter";
// import { useServerLink } from "../context/server.context";
import { useEffect } from "react";

export default function TermConditionPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []); // Runs only once when the component mounts

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
          <h1>Term & Condition</h1>
        </div>
        <Breadcrumb className="bc-content">
          <Breadcrumb.Item href="/" className="bc-non-active">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="bc-active">
            Term & Condition
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <WbFooter />
      </div>
    </div>
  );
}
