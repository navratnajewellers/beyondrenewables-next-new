"use client";

/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useServerLink } from "../context/server.context";
import HoverOverlay from "./HoverOverlay";
import { useMediaQuery } from "rsuite";

const HomeCarousel = () => {
  const [isMobile] = useMediaQuery("(max-width: 640px)");

  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: isMobile ? 1 : 3, // Show 3 images at a time
    slidesToScroll: 1, // Move only 1 slide at a time
    autoplay: true,
    // autoplaySpeed: 3000,
    autoplaySpeed: 1200,
    arrows: true,
  };

  const products = [
    {
      id: 1,
      img: `/images/1.jpg`,
      text: "Glass Cutllets",
      link: "/product",
    },
    {
      id: 2,
      img: `/images/2.jpg`,
      text: "Aluminium",
      link: "/product",
    },
    {
      id: 3,
      img: `/images/3.jpg`,
      text: "Copper",
      link: "/product",
    },
    {
      id: 4,
      img: `/images/4.jpg`,
      text: "Silicon",
      link: "/product",
    },
    {
      id: 5,
      img: `/images/5.jpg`,
      text: "Silver",
      link: "/product",
    },
    {
      id: 6,
      img: `/images/6.jpg`,
      text: "Plastic Pyrolysis Oil",
      link: "/product",
    },
  ];

  return (
    <div style={{ width: "90%", margin: "auto", paddingTop: "55px" }}>
      <Slider {...settings}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{ padding: "10px" }}
            className="carousel-img-container"
          >
            <a
              href={product.link}
              className={`carousel-link${product.id} relative overflow-hidden group `}
            >
              <img
                src={product.img}
                alt={`Product ${product.id}`}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                }}
              />
              <HoverOverlay text={product.text} buttonText="Discover" />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
