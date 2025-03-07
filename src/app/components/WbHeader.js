"use client";

/* eslint-disable @next/next/no-img-element */
import { Affix, Drawer, useMediaQuery } from "rsuite";
import "../styles/header.css";
// import companyLogo from "/images/logo-33_2.png";
// import mobileCompanyLogo from "/images/logo-1.png";
import MenuIcon from "@rsuite/icons/Menu";
import { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import AnimatedText4 from "./AnimatedText4";

// const WbHeader = () => {
export default function WbHeader() {
  const [isMobile] = useMediaQuery("(max-width: 900px)");

  const [isOpen, setIsOpen] = useState(false);
  // for the nav in drawer, opening options
  const [open, setOpen] = useState(false);

  // console.log("is on Mobile device", isMobile);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    return () => {};
  }, []);

  //Desktop Header
  const DesktopHeader = () => {
    return (
      <Affix className="header-fixed-container">
        <header className="header-container flex">
          <a href={`/`} className="logo imageWrapper">
            <img
              src="/images/logo-1.png"
              alt="Transparent"
              className={`bg-transparent header-logo`}
              id="headerLogo"
            />
          </a>
          <nav className="header-main flex flex-row">
            <a href={`/`} className="header-main-item ">
              <AnimatedText4 text={`Home`} />
            </a>
            {/* <a href="#" className="header-main-item">
                <AnimatedText2 text={`Our Solutions`} />
              </a> */}
            <div className="header-main-item header-menu-container ">
              <a href="#">
                <AnimatedText4 text={`Our Solutions`} />
              </a>
              <ul className="header-sub-menu">
                <li>
                  <a href={`/solar-recycling`}>Solar Recycling</a>
                </li>
                <li>
                  <a href={`/decommissioning`}>
                    Decommissioning of Solar Assets
                  </a>
                </li>
                <li>
                  <a href={`/digitization`}>Digitization of Solar Assets</a>
                </li>
              </ul>
            </div>
            <a href={`/product`} className="header-main-item">
              <AnimatedText4 text={`Our Products`} />
            </a>
            <a href={`/about`} className="header-main-item">
              <AnimatedText4 text={`About`} />
            </a>
            <a href={`/blog`} className="header-main-item">
              <AnimatedText4 text={`Blog`} />
            </a>
            <a href={`/contact`} className="header-main-item">
              <AnimatedText4 text={`Contact`} />
            </a>
          </nav>
          <nav className="header-started">
            <a href={`/contact`} className="started-text">
              Sell Your Panels
            </a>
          </nav>
        </header>
      </Affix>
    );
  };

  // Mobile Header
  const MobileHeader = () => {
    return (
      <>
        <header className="m-header-container shadow-md ">
          <div className="m-header">
            <nav className="m-h-logo-container">
              <a href={`/`} className="m-h-logo imageWrapper">
                <img
                  src="/images/logo-1.png"
                  alt="Transparent"
                  className="bg-transparent"
                />
              </a>
            </nav>
            <nav className="m-header-section2-container">
              <nav>
                <MenuIcon
                  style={{ fontSize: "2em" }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="main-color"
                />
              </nav>
              <nav className="m-header-started">
                <a href={`/contact`} className="m-started-text">
                  Sell Your Panels
                </a>
              </nav>
            </nav>
          </div>
        </header>
      </>
    );
  };

  return isClient ? (
    <div>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
      <div>
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          placement="left"
          className="m-header-drawer-container"
        >
          <Drawer.Header>
            <Drawer.Title className=" text-center main-color-imp ">
              BEYOND RENEWABLES
            </Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <div className="vertical_menu">
              <ul>
                <li className="menu-item">
                  <a href={`/`}>Home</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#" onClick={() => setOpen(!open)}>
                    Our Solutions
                  </a>
                  <span
                    className="mobile-arrows"
                    onClick={() => setOpen(!open)}
                  >
                    {!open ? <FaPlus /> : <FaMinus />}
                  </span>
                  <ul className={`sub-menu ${open ? "open" : ""}`}>
                    <li>
                      <a href={`/solar-recycling`}>Solar Recycling</a>
                    </li>
                    <li>
                      <a href={`/decommissioning`}>
                        Decommissioning of Solar Assets
                      </a>
                    </li>
                    <li>
                      <a href={`/digitization`}>Digitization of Solar Assets</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href={`/product`}>Our Products</a>
                </li>
                <li className="menu-item">
                  <a href={`/about`}>About</a>
                </li>
                <li className="menu-item">
                  <a href={`/blog`}>Blog</a>
                </li>
                <li className="menu-item">
                  <a href={`/contact`}>Contact</a>
                </li>
              </ul>
            </div>
          </Drawer.Body>
        </Drawer>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
