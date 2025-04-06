import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profileImg from '../assets/images/bw_Rajesh.jpg'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImg} alt="Avatar" style={{
              borderRadius: '50%', 
              width: '150px', 
              height: '150px', 
              objectFit: 'cover',
              objectPosition: 'top center'
            }}  />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/gargrajesh009" target="_blank" rel="noreferrer" ><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rajesh-garg-86b469189/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Rajesh Garg</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/gargrajesh009" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rajesh-garg-86b469189/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;