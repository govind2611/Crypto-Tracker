import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <h1 className="logo">
          CryptoTrackers<span style={{ color: "var(--blue)" }}>.</span>
        </h1>
      </div>
      <div className="contact-info">
        <p className="name">Govind Chavan</p>
        <p className="phone">Contact: 9673957874</p>
        <p className="email">Email: agovindchavanb@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
