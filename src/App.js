import React from 'react';
// import ReactDOM from 'react-dom';
import './style.css';
import Navbar from './Navbar';
import Profile from './profile';


export default function App() {
  return (
    <div>
      <Navbar/>
      <Profile />
      {/* <Navbar/>
      <Home/> */}
    </div>
  );
}
