import React from "react";
import SideProfile from "../SideProfile/SideProfile";
import "./SideMenu.css";

const SideMenu = () => {
  return (
    <div className="side-left">      
        <div className="side-menu">
            <div className="side-title">
                <span className="title">portfolio</span>
            </div>

            <div className="side-list">
                <ul>
                    <li>
                        <a href={() => false} className="list-name">자기소개</a>
                    </li>
                    <li>
                        <a href={() => false} className="list-name">프로젝트</a>
                    </li>
                    <li>
                        <a href={() => false} className="list-name">기술스택</a>
                    </li>
                </ul>
            </div>

            <div className="side-user"></div>
        </div>

        <SideProfile />
    </div>
  );
};

export default SideMenu;
