import {NavLink,Rocation,useParams,useLocation} from "react-router-dom";
import React, { useState, useEffect} from 'react' ;
import './start.css';
import Header from './header'; 

export const Start = () => {

  //ページを変えても値を受け渡すやつ
  const search = useLocation().search;

  const query2 = new URLSearchParams(search);
  
  //クリックして別の場所に移るためのもの
  const handleClick1 = () => {
    window.location.href = "/play";
  }

  const handleClick2 = () => {
    window.location.href = "/company";
  }

  const handleClick3 = () => {
    window.location.href = "/explain";
  }

  return(
    <div>
      <Header />
      <h1>太田愛理</h1>
      <h2>About</h2>
      <p>
        名古屋大学情報学部自然情報学科<br />
        色んなことに興味があります！
      </p>
      <h3>Skills</h3>
      <table>
        <tbody>
          <tr>
            <th>OS</th>
            <td>Windows, Ubuntu など</td>
          </tr>
          <tr>
            <th>Engine, Frameworks</th>
            <td>Node.js, Express など</td>
          </tr>
          <tr>
            <th>Tool, MiddleWare</th>
            <td>Git, PostgreSQL など</td>
          </tr>
          <tr>
            <th>資格・免許</th>
            <td>情報処理技術者、LPIC など</td>
          </tr>
        </tbody>
      </table>
      <h3>Works</h3>
      <p>アピールできる活動内容を書きましょう。</p>
      <ul>
        <li>
          <a href="https://github.com/">GitHub</a>
        </li>
        <li>
          <a href="https://qiita.com/">Qiita</a>
        </li>
        <li>
          <a href="https://zenn.dev/">Zenn</a>
        </li>
        <li>
          作った作品
          <ul>
            <li>
              <a href="https://example.com/">作品 1</a>
            </li>
            <li>
              <a href="https://example.com/">作品 2</a>
            </li>
          </ul>
        </li>
      </ul>
      <h3>Contact</h3>
      <p>連絡先や SNS のアカウントを書きましょう。</p>
      <ul>
        <li>
          <a href="mailto:name@example.com">Mail</a>
        </li>
        <li>
          <a href="https://twitter.com/n_yobikou">Twitter</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/">LinkedIn</a>
        </li>
      </ul>
      <h3>History</h3>
      <p>学歴、職歴、アルバイト、インターン経験など。</p>
      <table>
        <tbody>
          <tr>
            <th>2019 年</th>
            <td>
              <a href="https://dwango.co.jp/">株式会社ドワンゴ</a> 入社
            </td>
          </tr>
          <tr>
            <th>2018 年</th>
            <td>
              学校法人角川ドワンゴ学園{' '}
              <a href="https://nnn.ed.jp/">N高等学校</a> 卒業
            </td>
          </tr>
          <tr>
            <th>20XX 年</th>
            <td>表彰、受賞歴、メディア掲載記事などあれば</td>
          </tr>
        </tbody>
      </table>
      {/* <header className='header'><img src={norenImage}/></header> */}
      {/* <div className='body'><img src={titleImage}/><br/></div>
      <div className='title2'><img src={title2Image}/><br/></div>  
      <div className='startButton'><img src={startImage} onClick={() => {handleClick1()}}/></div>  
      <div className='scroll'><img src={scrollImage}/><br/></div>
      <div className='explain'>
        <div>
          <img className='explainTitleImg' src={explainTitleImage}/>
          <p><img className="explainImg" src={explainImage}/></p>
        </div>
        <div><img className='typingImg' src={typingImage}/></div>
      </div> 
      <div className="companytitleImg"><img src={companyTitle}/></div>
      <div className="companyExplainImg"><img src={companyExplain}/></div> */}

    </div>
  );
}