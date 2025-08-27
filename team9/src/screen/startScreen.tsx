import React from 'react';
import { Link } from 'react-router-dom';
// startScreen.css をインポート
import '../screen/startScreen.css'; // stylesディレクトリにcssを移動した場合

const StartScreen: React.FC = () => {
  return (
    <div className="start-screen-container"> {/* クラス名を固有のものに変更 */}
      <h1 className="title">StyleBender</h1>
      <div className="button-container">
        <Link to="/card-view" className="nav-button"> {/* classNameをnav-buttonに統一 */}
          カード選択へ
        </Link>
        <Link to="/stage-select" className="nav-button"> {/* classNameをnav-buttonに統一 */}
          ステージ選択へ
        </Link>
      </div>
    </div>
  );
};

export default StartScreen;