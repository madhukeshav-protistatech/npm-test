import React from "react";
import "../assets/css/header.css";
import { FC } from "../FC.type";
import logo from "../assets/media/logo.png";
import { Link } from "react-router-dom";

interface HeaderProps {}
const Header: FC<HeaderProps> = (props) => {
  return (
    <div className="topHeader">
      <div className="innter-topHeader">
        <div className="topaHeader-icon">
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <Link to="/" className="sidebtn">
                  <li>Get Started</li>
                </Link>
                <Link to="/button" className="sidebtn">
                  <li>Button</li>
                </Link>
                <Link to="/icon-button" className="sidebtn">
                  <li>Icon Button</li>
                </Link>
                <Link to="/input-field" className="sidebtn">
                  <li>Input Field</li>
                </Link>
                <Link to="/textarea" className="sidebtn">
                  <li>Textarea</li>
                </Link>
                <Link to="/dropdown" className="sidebtn">
                  <li>Dropdown</li>
                </Link>
                <Link to="/paragraph" className="sidebtn">
                  <li>paragraph</li>
                </Link>
                <Link to="/label" className="sidebtn">
                  <li>label</li>
                </Link>
                <Link to="/progress-bar" className="sidebtn">
                  <li>Progress Bar</li>
                </Link>

                <Link to="/start-screen" className="sidebtn">
                  <li>Start screen</li>
                </Link>
                <Link to="help" className="sidebtn">
                  <li>Help</li>
                </Link>
                <Link to="/Screen2" className="sidebtn">
                  <li>Id Capture</li>
                </Link>
                <Link to="/conformation" className="sidebtn">
                  <li>Conformation</li>
                </Link>
              </ul>
            </div>
          </nav>

          <img src={logo} alt="Vouched" className="topaHeader-logo" />
        </div>
        <div className="topaHeader-links">
          <ul className="topHeader-ul">
            <Link to="/" className="headerbtn">
              <li>Home</li>
            </Link>
            <Link to="/button" className="headerbtn">
              <li>Components</li>
            </Link>
            <Link to="/" className="headerbtn">
              <li>Blog</li>
            </Link>
            <li>
              <div className="search-container">
                <form action="/action_page.php">
                  <input className="search_input" type="text" placeholder="Search.." name="search" />
                  {/* <button type="submit">
                    <i className="fa fa-search"></i>
                  </button> */}
                </form>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

// type FC<Props extends {}> = (props: Props, context?: any) => FC<any> | null | JSX.Element;
