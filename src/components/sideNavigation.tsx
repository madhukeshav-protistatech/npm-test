import React from "react";
import { FC } from "../FC.type";
import "../assets/css/custom.css";
import { Link } from "react-router-dom";

interface SideComponentsProps {}
export const SideComponents: FC<SideComponentsProps> = (props) => {
  return (
    <>
      <div className="mainBlock_outer">
        <div className="mainBlock_sidenav">
          <ul className="sidenav_ul">
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
              <li>Paragraph</li>
            </Link>
            <Link to="/label" className="sidebtn">
              <li>label</li>
            </Link>
            <Link to="/progress-bar" className="sidebtn">
              <li>Progress Bar</li>
            </Link>
            <Link to="/tooltip" className="sidebtn">
              <li>Tooltip</li>
            </Link>

            <Link to="/start-screen" className="sidebtn">
              <li>Start screen</li>
            </Link>
            <Link to="help" className="sidebtn">
              <li>Help</li>
            </Link>
            {/* <Link to="/Screen2" className="sidebtn">
              <li>Id Capture</li>
            </Link> */}
            <Link to="/conformation" className="sidebtn">
              <li>Conformation</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideComponents;
