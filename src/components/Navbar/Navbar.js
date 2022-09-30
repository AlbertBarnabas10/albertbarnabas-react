import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";
import { FiMoon, FiSun } from "react-icons/fi";
import { NavbarData } from "./NavbarData";
import { IconContext } from "react-icons";
import { themeContext } from "../../App";
import "./navbar.css";

function Navbar(props) {
  const [sideBar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sideBar);

  return (
    <>
      <IconContext.Provider value={{ color: "var(--white)" }}>
        <div className="navbar">
          <div className="navbar-wrapper">
            <div className="navbar-container">
              <a className="nav-toggle">
                <BiMenu onClick={showSidebar} />
              </a>
              <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items">
                  <li className="navbar-list">
                    <a className="nav-toggle">
                      <IoClose onClick={showSidebar} />
                    </a>
                  </li>
                  {NavbarData.map((item, index) => {
                    return (
                      <li key={index} className={item.className}>
                        <a href={item.href} onClick={showSidebar}>
                          <span>{item.title}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <a className="nav-logo" href="#">
              Albert<span style={{ color: "#d0051b" }}>.</span>
            </a>
            <div className="nav-darkmode">
              <FiMoon onClick={() => props.toggleTheme()} />
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
