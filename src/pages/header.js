// import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react';
import './header.css'; // Headerコンポーネントに対応するCSSファイルをインポート
import github from "../images/github.png";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        portfolio
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            {/* GitHubのリンク */}
            <a href="https://github.com/nunupy345345" target="_blank" rel="noopener noreferrer" className="github-link">
              <img src={github} alt="GitHub" className="github-logo" />
            </a>
          </li>
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