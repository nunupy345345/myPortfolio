// import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react';
import './header.css'; // Headerコンポーネントに対応するCSSファイルをインポート

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        portfolio
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
          <li>
            <Link to="/skills">skills</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;