import React, { useRef } from "react";
import "./Testimonials.css";
import nextIcon from "../../assets/next-icon.png";
import backIcon from "../../assets/back-icon.png";

import user01 from "../../assets/user-1.png";
import user02 from "../../assets/user-2.png";
import user03 from "../../assets/user-3.png";
import user04 from "../../assets/user-4.png";

const Testimonials = () => {
  const sliderRef = useRef();
  let translateX = 0;

  const slideForward = () => {
    if (translateX > -50) {
      translateX -= 25;
    }
    sliderRef.current.style.transform = `translateX(${translateX}%)`;
  };

  const slideBackward = () => {
    if (translateX < 0) {
      translateX += 25;
    }
    sliderRef.current.style.transform = `translateX(${translateX}%)`;
  };

  return (
    <div className="testimonials">
      <img src={nextIcon} alt="" className="nextBtn" onClick={slideForward} />
      <img src={backIcon} alt="" className="backBtn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={sliderRef}>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user01} alt="" className="user" />
                <div>
                  <h3>John Doe</h3>
                  <span>CEO, Edusity,USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user04} alt="" className="user" />
                <div>
                  <h3>John Doe</h3>
                  <span>CEO, Edusity,USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user02} alt="" className="user" />
                <div>
                  <h3>John Doe</h3>
                  <span>CEO, Edusity,USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user03} alt="" className="user" />
                <div>
                  <h3>John Doe</h3>
                  <span>CEO, Edusity,USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
