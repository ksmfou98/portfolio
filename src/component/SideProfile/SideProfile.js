import React from "react";
import "./SideProfile.css";

const SideProfile = () => {
  return (
    <div className="side-profile">
      <div className="profile-box">
        <div className="profile-img">
          <div className="img-tag"></div>
        </div>

        <div className="profile-dicp">
          <div className="profile-name">
            <span className="profile-tit">Name</span>
            <div className="profile-detail">
              <span>이도현</span>
            </div>
          </div>
          <div className="profile-email">
            <span className="profile-tit">Email</span>
            <div className="profile-detail">
              <span>ksmfou98@naver.com</span>
            </div>
          </div>
          <div className="profile-github">
            <span className="profile-tit">Github</span>
            <div className="profile-detail">
              <span>ksmfou98</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideProfile;
