import React from "react";
import { Link } from "react-router-dom";
import "./cssByScreen/selectStage.css";
import "../App.css";

const StageSelect: React.FC = () => {
    return (
        <div className="select-stage-container">
            {/* 左上のスタート画面に戻るボタン */}
            <Link to="/" className="back-button" title="スタート画面に戻る">
                ←
            </Link>

            {/* 中央のステージ選択カードコンテナ */}
            <div className="stage-cards-wrapper">
                <div className="stage-card">
                    <h2>ステージ 1</h2>
                    <p>最初のステージです。基本的な操作を学びましょう。</p>
                    <button className="start-stage-button">開始</button>
                </div>
                <div className="stage-card">
                    <h2>ステージ 2</h2>
                    <p>少し難しくなります。新しい要素が登場します。</p>
                    <button className="start-stage-button">開始</button>
                </div>
                {/* 必要に応じてステージカードを追加 */}
            </div>

            {/* 下部中央の「スタート」ボタン */}
            <div className="bottom-button-container">
                <button className="button-primary">ゲームスタート</button>
            </div>
        </div>
    );
};

export default StageSelect;
