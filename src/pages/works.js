import {NavLink} from "react-router-dom";
import Header from "./header";
import img100pro from "../images/100pro.png";
import imgkaminari from "../images/kaminari.png";
import openapi from "../images/openapi.png";
import yotiyoti from "../images/yotiyoti.png";
import unibirth from "../images/unibirth.png";
import car from "../images/car.jpg";
import slack from "../images/slack.png";
import dorokei from "../images/dorokei.jpg";
import koikoi from "../images/koikoi.png";
import putone from "../images/putone.png";
import ekikuguru from "../images/ekikuguru.png";
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
            <h2>うにばーす</h2>
            <p>初めて作ったプロダクトです。Reactを使いました。CSSの奥深さを学びました</p>
            <a href="https://unibirth-mattsunkun.vercel.app">うにばーす</a>
        </div>
      </div>
      <div class="box">
        <div class="box_image">
            <img src={img100pro} alt="100proタイピングゲーム"/>
        </div>
        <div class="box_text">
            <h2>100proタイピングゲーム</h2>
            <p>100programというハッカソンで作りました。Reactを使いました。<br></br>文字を動的に色を変化させるときにReactのuseStateの便利さがわかりました。</p>
            <a href="https://yamaguchi780.github.io/100program/">100proタイピングゲーム</a>
        </div>
      </div>
      <div class="box">
        <div class="box_image">
            <img src={yotiyoti} alt="よちよちハッカソンJCT集め"/>
        </div>
        <div class="box_text">
            <h2>よちよちハッカソンJCT集め</h2>
            <p>React,GoogleMapのAPIを使いました。APIの使い方を学びました。<br></br>今はAPIの無料化が終わったため廃止しています。</p>
           
        </div>
      </div>
      <div class="box">
        <div class="box_image">
            <img src={imgkaminari} alt="轟け！かみなりくん"/>
        </div>
        <div class="box_text">
            <h2>轟け！かみなりくん</h2><p>初めてUnityを触りました。画像の取り扱いに苦労しました。</p>
            <a href="https://unityroom.com/games/kaminarikun">轟け！かみなりくん</a>
        </div>
      </div>
      <div class="box">
        <div class="box_image">
            <img src={slack} alt="JPHacksSlackbots"/>
        </div>
        <div class="box_text">
            <h2>JPHacksSlackbots</h2>
            <p>JPHacks2023に出場した際に作りました。<br></br>slack_bolt,vercel,Glitch,Node.jsに触れました。</p>
            
        </div>
      </div> 
      <div class="box">
        <div class="box_image">
            <img src={car} alt="fabo Donkey Car"/>
        </div>
        <div class="box_text">
            <h2>fabo Donkey Car</h2>
            <p>トヨタ自動運転ミニカーコンテストにおいて<br></br>制限部門で三位を受賞しました。<br></br>fabo Donkey Carを使い、機械学習をさせてモデルを作りました。<br></br>環境の変化への適応に苦戦しました。</p>
        </div>
      </div>
      <div class="box">
           <div class="box_image">
               <img src={openapi} alt="AzureOpenApiSlackBot"/>
           </div>
           <div class="box_text">
               <h2>AzureOpenApiSlackBot</h2>
               <p>Sun*_Hackathon for StudentというハッカソンでAzure openapiのAPIを使ったslackbotを作りました。<br></br>stampを自動でつけるところ、APIの適応に苦労しました。</p>

           </div>
      </div> 
      <div class="box">
           <div class="box_image">
               <img src={dorokei} alt="cyber-dorokei"/>
           </div>
           <div class="box_text">
               <h2>cyber-dorokei</h2>
               <p>flutter,fastAPI,firebaseで開発したのドロケイアプリです。<br></br>firebaseの便利さに驚きました。<br></br>android版はリリースの基準が厳しくなったためリリースは出来なかったですが、ios版のリリースが出来ました。</p>

           </div>
      </div> 
      <div class="box">
           <div class="box_image">
               <img src={koikoi} alt="koikoi"/>
           </div>
           <div class="box_text">
               <h2>KoiKoi Ai Competition</h2>
               <p>KoiKoi Ai CompetitionというカードゲームのこいこいをAIで対戦する大会をサークルで開催しました。<br></br>いつも使っているデータサイエンスコンペのありがたみがわかりました。</p>

           </div>
      </div>
      <div class="box">
           <div class="box_image">
               <img src={putone} alt="putone"/>
           </div>
           <div class="box_text">
               <h2>putone</h2>
               <p>100programというハッカソンで作りました。flutter,firebaseを用いたSNSです。<br></br>データ構造の効率化やfollow/followerの概念などに苦労しました。</p>

           </div>
      </div>
      <div class="box">
           <div class="box_image">
               <img src={ekikuguru} alt="ekikuguru"/>
           </div>
           <div class="box_text">
               <h2>駅くぐる</h2>
               <p>flutterを用いて、駅構内/駅構外にある施設を可視化、検索するアプリを作成しました。<br></br>データの量や構造の勉強のきっかけとなりました。</p>

           </div>
      </div>
    </div> 
  );
}; 
