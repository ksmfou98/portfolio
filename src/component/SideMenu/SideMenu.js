import React from "react";
import "./SideMenu.css";
import {Link} from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="side-left">      
        <div className="side-menu">
            <div className="side-title">
                <span className="title">portfolio</span>
            </div>

            <div className="side-list">
                <ul>
                    <li className="active">
                        <Link to="/" className="list-name">홈</Link>
                    </li>
                    <li className="">
                        <Link to="/project" className="list-name">프로젝트</Link>
                    </li>
                    <li className="">
                        <a href={() => false} className="list-name">공부기록</a>
                    </li>
                </ul>
            </div>

        </div>

        
    </div>
  );
};

export default SideMenu;
