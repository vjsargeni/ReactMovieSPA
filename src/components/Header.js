import React from "react";
import {Link} from 'react-router-dom';
import logo from "../logo.svg";
import "../App.css";

export default function Header() {
  return (
    <header className='App-header'>
      <img src={logo} className="App-logo" alt="logo" />
      <Link className='header-link'to='/'>Home</Link> | <Link className='header-link' to='/about'>About</Link>
      <h1>React OMDB Search Tool!</h1>
    </header>
  );
}


