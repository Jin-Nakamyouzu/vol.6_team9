import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
import { Link, useNavigate } from "react-router-dom";
import { useStageStore } from "../lib/stageStore";
>>>>>>> c0b139cb50e422796e88275b2ba42566475cbea5
=======
>>>>>>> 189cee9b6864bf6b5546e415a6ddf3d3a50499ab
import "./cssByScreen/selectStage.css";
import "../App.css";

const StageSelect: React.FC = () => {
<<<<<<< HEAD
    return (
        <div className="select-stage-container">
            {/* 左上のスタート画面に戻るボタン */}
            <Link to="/" className="back-button" title="スタート画面に戻る">
                ←
            </Link>
=======
    const setStage = useStageStore((state) => state.setStage);
    const navigate = useNavigate();

    return (
        <div className="select-stage-container">
            {/* 左上のスタート画面に戻るボタン */}
            {/* <Link to="/" className="back-button" title="スタート画面に戻る">
                ←
            </Link> */}
>>>>>>> c0b139cb50e422796e88275b2ba42566475cbea5

            {/* 中央のステージ選択カードコンテナ */}
            <div className="stage-cards-wrapper">
                <div className="stage-card">
<<<<<<< HEAD
                    <button className="start-stage-button">
=======
                    <button
                        className="start-stage-button"
                        onClick={() => {
                            setStage(0); // ステージ1
                            navigate("/game");
                        }}
                    >
>>>>>>> c0b139cb50e422796e88275b2ba42566475cbea5
                        <h2>Very Easy</h2>
                        <p>最初のステージです。基本的な操作を学びましょう。</p>
                    </button>
                </div>
                <div className="stage-card">
<<<<<<< HEAD
                    <button className="start-stage-button">
=======
                    <button
                        className="start-stage-button"
                        onClick={() => {
                            setStage(1); // ステージ2
                            navigate("/game");
                        }}
                    >
>>>>>>> c0b139cb50e422796e88275b2ba42566475cbea5
                        <h2>Monster</h2>
                        <p>少し難しくなります。新しい要素が登場します。</p>
                    </button>
                </div>
                {/* 必要に応じてステージカードを追加 */}
            </div>

<<<<<<< HEAD
            {/* 下部中央の「スタート」ボタン */}
            <div className="bottom-button-container">
                <button className="button-primary">ゲームスタート</button>
=======
            {/* 下部中央の「スタート」ボタン（任意のステージを選択しない限り非活性等） */}
            <div className="bottom-button-container">
                <Link to="/" className="button-primary">スタート画面へ戻る</Link>
>>>>>>> c0b139cb50e422796e88275b2ba42566475cbea5
            </div>
        </div>
    );
};

<<<<<<< HEAD
export default StageSelect;
=======
export default StageSelect;
>>>>>>> c0b139cb50e422796e88275b2ba42566475cbea5
