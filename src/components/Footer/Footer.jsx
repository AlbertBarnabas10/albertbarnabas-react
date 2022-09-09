import React from "react";
// import Logo from "../../assets/img/Albert..png";
import { AiFillHeart } from "react-icons/ai";
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from "react-icons/io";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <a href="#" className="footer-logo">
        Albert<span style={{ color: "#d0051de7" }}>.</span>
      </a>
      <div className="footer-text">
        <p><span style={{ color: "#d0051de7" }}>A</span>lbert <span style={{ color: "#d0051de7" }}>B</span>arnabas &copy; All Rights Reserved.</p>
      </div>
      <div className="footer-social">
        <a href="https://github.com/AlbertBarnabas10">
          <IoLogoGithub />
        </a>
        <a href="https://www.linkedin.com/in/albert-barnabas/">
          <IoLogoLinkedin />
        </a>
        <a href="https://www.instagram.com/albertbarnabas_/">
          <IoLogoInstagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
