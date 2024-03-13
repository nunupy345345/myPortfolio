import {NavLink,Rocation,useParams,useLocation} from "react-router-dom";
import React, { useState, useEffect} from 'react' ;
import './start.css';
import Header from './header'; 
import History from './history'; 
import { Chrono } from "react-chrono";
import { data } from "./data";
import "./history.css";
import github from "../images/github.png";

export const Start = () => {

  //ページを変えても値を受け渡すやつ
  const search = useLocation().search;

  const query2 = new URLSearchParams(search);


  return(
    <div>
      <Header />
      <h1>太田愛理</h1>
      <div className="About">
      <h2>About</h2>
      <p>
        名古屋大学情報学部自然情報学科<br />
        色んなことに興味があります！<br/>幅広く学んでいきたいです！
      </p>
      </div>

      <div className="history">
        <Chrono items={data} slideShow mode="VERTICAL_ALTERNATING" disableNavOnKey theme={{
    title: 'black',
    primary: 'black',
    secondary: 'black',
    cardBgColor: 'lightgray',
    titleColor: 'black',
    cardTitleColor: 'black',
    titleColorActive: 'white',
  }}/>
      </div>
    </div>
  );
}