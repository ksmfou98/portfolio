import React from "react";
import "./SideMenu.css";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  const activeStyle = {
    background: "#f3f3fb",
  };
  return (
    <div className="side-left">
      <div className="side-menu">
        <div className="side-title">
          <span className="title">
            <a href="/">portfolio</a>
          </span>
        </div>

        <div className="side-list">
          <ul>
            <li>
              <NavLink
                exact
                to="/"
                activeStyle={activeStyle}
                className="list-name"
              >
                홈
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/project"
                activeStyle={activeStyle}
                className="list-name"
              >
                프로젝트
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/study"
                activeStyle={activeStyle}
                className="list-name"
              >
                공부기록
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
