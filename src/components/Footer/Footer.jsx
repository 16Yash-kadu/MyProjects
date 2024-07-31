import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter F-container">
        {/* Left Side */}

        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />

          <span className="secondaryText">
            Our Vision is to Make all people <br /> the best place to live for
            them{" "}
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText"> Information </span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
