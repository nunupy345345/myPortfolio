import {NavLink} from "react-router-dom";
import Header from "./header";
import img100pro from "../images/100pro.png";
import imgkaminari from "../images/kaminari.png";
import openapi from "../images/openapi.png";
import yotiyoti from "../images/yotiyoti.png";
import unibirth from "../images/unibirth.png";
import './works.css';

export const Works = () => {
  return (
    <div className="pnf">
       <Header/>
      <h1>Works</h1>
      <div class="box">
        <div class="box_image">
            <img src={unibirth} alt="うにばーす"/>
        </div>
        <div class="box_text">
            <h2>見上げる猫</h2>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <a href="">かわいい</a>
        </div>
      </div>
      <div class="box">
        <div class="box_image">
            <img src={img100pro} alt="100proタイピングゲーム"/>
        </div>
        <div class="box_text">
            <h2>見上げる猫</h2>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <a href="">かわいい</a>
        </div>
      </div>
      <div class="box">
        <div class="box_image">
            <img src={yotiyoti} alt="よちよちハッカソンJCT集め"/>
        </div>
        <div class="box_text">
            <h2>見上げる猫</h2>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <a href="">かわいい</a>
        </div>
      </div>
      <div class="box">
        <div class="box_image">
            <img src={imgkaminari} alt="轟け！かみなりくん"/>
        </div>
        <div class="box_text">
            <h2>見上げる猫</h2>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <a href="">かわいい</a>
        </div>
      </div>
      <div class="box">
        <div class="box_image">
            <img src={openapi} alt="JPHacksSlackbots"/>
        </div>
        <div class="box_text">
            <h2>見上げる猫</h2>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <a href="">かわいい</a>
        </div>
      </div>
      <div class="box">
        <div class="box_image">
            <img src={openapi} alt="AzureOpenApiSlackBot"/>
        </div>
        <div class="box_text">
            <h2>見上げる猫</h2>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <a href="">かわいい</a>
        </div>
      </div>
      {/* <ul> */}
      {/* https://unibirth-mattsunkun.vercel.app/ */}
      {/* https://unityroom.com/games/kaminarikun */}
          {/* <li><img src="img/works1.jpg" alt="うにばーす"/></li>
          <li><img src="img/works2.jpg" alt="100proタイピングゲーム"/></li>
          <li><img src="img/works3.jpg" alt="よちよちハッカソンJCT集め"/></li>
          <li><img src="img/works6.jpg" alt="轟け！かみなりくん"/></li>
          <li><img src="img/works4.jpg" alt="JPHacksSlackbot"/></li>
          <li><img src="img/works5.jpg" alt="AzureOpenApiSlackBot"/></li>
          <li><img src="img/works6.jpg" alt="cyber dorokei"/></li>
        </ul> */}
      <NavLink to="/">ホームに戻る</NavLink>

    </div>
  );
};