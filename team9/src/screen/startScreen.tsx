import React from "react";
import { BrowserRouter, Routers, Route } from "react-router-dom";
import "../App.css";

const StartScreen: React.FC = () => {
    return (
        <div className="screen-container">
            <h1 className="title">Style Bender</h1>
            <BrowserRouter className="operation">
                <Routers>
                    {/* <div class="content">
                    <button class="start" Link to="/">スタート</button>
                    <p class="start-hover-text">
                        スタートボタンを押すとゲームが始まります
                    </p>
                </div> */}
                    <Route className="content" path="/" element="{viewCards /}">
                        <button className="card">カード</button>
                        <p className="card-hover-text">
                            カード一覧を見ることができます
                        </p>
                    </Route>
                    <Route
                        className="content"
                        path="/"
                        element="{selectStages /}">
                        <button className="stage">ステージ</button>
                        <p className="stage-hover-text">
                            ステージ一覧を見ることができます
                        </p>
                    </Route>
                </Routers>
            </BrowserRouter>
        </div>
    );
};

export default StartScreen;
