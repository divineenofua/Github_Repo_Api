import React from "react";
 import {FaGithub, FaMedium, FaTwitter} from "react-icons/fa"


function Profile()
  {
  return (
    <>
    <div id="profile">
      <div id="profile-section">
      <div id="avatar">
      <img className="avatar" src="https://i.ibb.co/tHyDXFN/Snapchat-2027773780-fotor-bg-remover-202310191251.png"alt="Untitled-design"  />      </div>
      <h1 className="profile_name">Enofua Etue Divine</h1>
      </div>
      <div id="profile-details">
         
        <div className="btns">
        <a href="https://github.com/divineenofua">
          <button className="buttons"><FaGithub/> GitHub<i className="fa-brands fa-github"></i></button>
        </a>
        </div>
        <div className="btns">
        <a href=" https://medium.com/@divineenofua">
        
        <button className="buttons"><FaMedium/> Medium<i className="fa-brands fa-medium"></i></button>
      </a>
        
        </div>
         
         <div className="btns">
        <a href="https://twitter.com/etue_divine/">
          <button className="buttons"><FaTwitter/> Twitter<i className="fa-brands fa-twitter"></i></button>
        </a>
        </div>

         
      </div>
       
    </div>
     </>
  );
}

export default Profile;
