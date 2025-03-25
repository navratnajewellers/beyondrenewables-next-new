"use client";

/* eslint-disable @next/next/no-img-element */
import Marquee from "react-fast-marquee";
// import { useServerLink } from "../context/server.context";

const PartnerLogoCarousel = () => {
  const images = [
    `/images/logo1.png`,
    `/images/logo3.png`,
    `/images/Reslink.png`,
    `/images/companyLogo2.png`,
    `/images/companyLogo4.png`,
    `/images/logo1.png`,
    `/images/logo3.png`,
    `/images/Reslink.png`,
    `/images/companyLogo2.png`,
    `/images/companyLogo4.png`,
  ];

  return (
    <Marquee speed={100} pauseOnHover={true} gradient={false}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Logo ${index}`}
          style={{
            // marginRight: "40px",
            // marginLeft: "40px",
            // height: "150px",
            // width: "250px",
            marginRight: "60px",
            marginLeft: "60px",
            height: "90px",
            width: "210px",
          }}
        />
      ))}
    </Marquee>
  );
};

export default PartnerLogoCarousel;
