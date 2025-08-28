import React from "react";
import { Link } from "react-router-dom";
import "./cssByScreen/startScreen.css";
import "../App.css";

const StartScreen: React.FC = () => {
    return (
        <>
            <h1 className="title">Style Bender</h1>
            <div className="operation">
<<<<<<< HEAD
                <Link to="/CardView" className="content">
=======
                <Link to="/card-view" className="content">
>>>>>>> c0b139cb50e422796e88275b2ba42566475cbea5
                    <button className="card">カード</button>
                    <p className="card-hover-text">
                        カード一覧を見ることができます
                    </p>
                </Link>
                <Link to="/StageSelect" className="content">
                    <button className="card">ステージ</button>
                    <p className="card-hover-text">
                        ステージ一覧を見ることができます
                    </p>
                </Link>
<<<<<<< HEAD
=======
                <Link to="/endless_game" className="content">
                    <button className="card">クソゲー</button>
                    <p className="card-hover-text">
                        クソゲーに移行します。
                    </p>
                </Link>
>>>>>>> c0b139cb50e422796e88275b2ba42566475cbea5
            </div>
        </>
    );
};

export default StartScreen;
