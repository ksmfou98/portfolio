import React from "react";
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
                    <li className="active">
                        <a href={() => false} className="list-name">프로젝트</a>
                    </li>
                    <li className="">
                        <a href={() => false} className="list-name">공부방향</a>
                    </li>
                    <li className="">
                        <a href={() => false} className="list-name">기술스택</a>
                    </li>
                </ul>
            </div>

        </div>

        
    </div>
  );
};

export default SideMenu;
