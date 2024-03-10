import {NavLink} from "react-router-dom";
import Header from "./header";
export const History = () => {
  return (
    <div className="pnf">
       
      <h1>ページが見つかりません</h1>
      <NavLink to="/">ホームに戻る</NavLink>

    </div>
  );
};