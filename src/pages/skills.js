import {NavLink} from "react-router-dom";
import Header from "./header";
import python from "../images/python.png";
import flutter from "../images/flutter.png";
import firebase from "../images/firebase.png";
import react from "../images/react.png";
import unity from "../images/unity.png";
import HTML from "../images/HTML.png";
import CSS from "../images/CSS.png";
import JavaScript from "../images/js.png";
import bolt from "../images/bolt.png";
import docker from "../images/docker.png";
import mysql from "../images/mySQL.png";
import fabo from "../images/fabo.png";
import './skills.css'

export const Skills = () => {
  return (
    <div className="pnf">
       <Header/>
      <h1>Skill</h1>
      <div class="wrap">
        <div class="item">
          <img src={python}/>
          <h2>python</h2>
          <p>機械学習,django,fastAPIなど様々なところで活用しています。</p>
        </div>
        <div class="item">
          <img src={flutter}/>
          <h2>Flutter</h2>
          <p>cyber-dorokeiを開発する際に使っています。AndroidにもiOSにも対応しているところが気に入っています</p>
        </div>
        <div class="item">
          <img src={firebase}/>
          <h2>Firebase</h2>
          <p>cyber-dorokeiを開発する際に使っています。Stream機能が便利でchat部分に使いました。</p>
        </div>
        <div class="item">
          <img src={fabo}/>
          <h2>Fabo DonkeyCar</h2>
          <p>トヨタ自動運転ミニカーコンテストにおいて使用しました。元々のプログラムがよく書かれているので助かりました。</p>
        </div>
        <div class="item">
          <img src={react}/>
          <h2>React</h2>
          <p>Webサイトを作るときは大抵使うフレームワークです。</p>
        </div>
        <div class="item">
          <img src={bolt}/>
          <h2>slack_bolt</h2>
          <p>slackAPIを作る際に使っています。pythonで書いています。</p>
        </div>
        <div class="item">
          <img src={unity}/>
          <h2>Unity</h2>
          <p>轟け！かみなりくんを開発する際に使用しました。微調整に苦労しました。</p>
        </div>
        <div class="item">
          <img src={docker}/>
          <h2>Docker</h2>
          <p>バイト先や自分の環境を汚したくないときに使っています。</p>
        </div>
        <div class="item">
          <img src={mysql}/>
          <h2>mySQL</h2>
          <p>DBはここを使うことが多いです。</p>
        </div>
        <div class="item">
          <img src={JavaScript}/>
          <h2>JavaScript</h2>
          <p>最近はTSを学ぼうと思っています。</p>
        </div>
        <div class="item">
          <img src={HTML}/>
          <h2>HTML</h2>
        </div>
        <div class="item">
          <img src={CSS}/>
          <h2>CSS</h2>
        </div>
      </div>
      
      {/* <NavLink to="/">ホームに戻る</NavLink> */}
      
    </div>
  );
};