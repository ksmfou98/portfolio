import React from "react"
import "./Project.css";
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io"

const Project = () => {
    return (
        <div id="Project">
            <div className="project-intro">
                <div className="project-title">
                    <h2>쇼핑몰</h2>
                </div>
                <div className="project-img">
                    <button className="move-left move">
                     <IoIosArrowBack size="23" />
                    </button>
                    
                    <ul>
                        <li>
                            이미지1
                        </li>
                        <li>
                            이미지2
                        </li>
                        
                    </ul>
                    <button className="move-right move">
                        <IoIosArrowForward size="23" />
                    </button>
                </div>
                <div className="project-description">
                    <span>아르바이트 직원관리, 매장관리 웹앱</span>
                </div>
                <div className="project-tectstack">
                    <span>#react #nodejs #express #mongoDB</span>
                </div>
            </div>

            <div className="project-intro">
                <div className="project-title">
                    <h2>쇼핑몰</h2>
                </div>
                <div className="project-img">
                    <button className="move-left move">
                     <IoIosArrowBack size="23" />
                    </button>
                    
                    <ul>
                        <li>
                            이미지1
                        </li>
                        <li>
                            이미지2
                        </li>
                        
                    </ul>
                    <button className="move-right move">
                        <IoIosArrowForward size="23" />
                    </button>
                </div>
                <div className="project-description">
                    <span>아르바이트 직원관리, 매장관리 웹앱</span>
                </div>
                <div className="project-tectstack">
                    <span>#react #nodejs #express #mongoDB</span>
                </div>
            </div>

            <div className="project-intro">
                <div className="project-title">
                    <h2>쇼핑몰</h2>
                </div>
                <div className="project-img">
                    <button className="move-left move">
                     <IoIosArrowBack size="23" />
                    </button>
                    
                    <ul>
                        <li>
                            이미지1
                        </li>
                        <li>
                            이미지2
                        </li>
                        
                    </ul>
                    <button className="move-right move">
                        <IoIosArrowForward size="23" />
                    </button>
                </div>
                <div className="project-description">
                    <span>아르바이트 직원관리, 매장관리 웹앱</span>
                </div>
                <div className="project-tectstack">
                    <span>#react #nodejs #express #mongoDB</span>
                </div>
            </div>

            
        </div>
    )
}

export default Project;