import React from 'react';
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
 import { FaArrowLeft } from "react-icons/fa";

function AppOutlet() {
  return (
    <div>
      <Outlet />
      <p className="home-btn">  <Link className="linked"  to="/"><FaArrowLeft /> <b>Home Page</b></Link></p>
      </div>

  )
}
export default AppOutlet