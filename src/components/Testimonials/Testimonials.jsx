import React from "react";
import Slider from "react-slick";
import "./Testimonials.css";

import user01 from "../../assets/user-1.png";
import user02 from "../../assets/user-2.png";
import user03 from "../../assets/user-3.png";
import user04 from "../../assets/user-4.png";

const data = [
  {
    id: 1,
    img: user01,
    name: "John Doe",
    title: "CEO, Edusity, USA",
    text: `Choosing to pursue my degree at Edusity was one of the best decisions I've ever made...`,
  },
  {
    id: 2,
    img: user02,
    name: "Jane Smith",
    title: "Founder, LearnTech",
    text: `Choosing to pursue my degree at Edusity was one of the best decisions I've ever made...`,
  },
  {
    id: 3,
    img: user03,
    name: "Alex Johnson",
    title: "Engineer, Google",
    text: `Choosing to pursue my degree at Edusity was one of the best decisions I've ever made...`,
  },
  {
    id: 4,
    img: user04,
    name: "Sara Wilson",
    title: "Product Designer, Adobe",
    text: `Choosing to pursue my degree at Edusity was one of the best decisions I've ever made...`,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // default desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // tablets and below
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // mobile landscape
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials">
      <Slider {...settings}>
        {data.map((item) => (
          <div className="testimonial-card" key={item.id}>
            <div className="slide">
              <div className="userInfo">
                <img src={item.img} alt={item.name} className="user" />
                <div>
                  <h3>{item.name}</h3>
                  <span>{item.title}</span>
                </div>
              </div>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
