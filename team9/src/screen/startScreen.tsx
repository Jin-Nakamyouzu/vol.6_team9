import React from 'react';
import { Link } from 'react-router-dom';
// ファイル構造に合わせてCSSのインポートパスを修正
import './startScreen.css';

const StartScreen: React.FC = () => {
  return (
    <div className="start-screen-container">
      <h1 className="title">StyleBender</h1>
      <div className="button-container">
        <Link to="/card-view" className="nav-button">
          カード選択へ
        </Link>
        <Link to="/stage-select" className="nav-button">
          ステージ選択へ
        </Link>
        {/* ↓↓↓ ここを追記 ↓↓↓ */}
        <Link to="/game" className="nav-button">
          ゲーム開始
        </Link>
      </div>
    </div>
  );
};

export default StartScreen;
