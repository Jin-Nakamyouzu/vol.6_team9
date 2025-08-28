import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartScreen from "./screen/startScreen";
<<<<<<< HEAD
import CardView from "./screen/viewCards";
import StageSelect from "./screen/selectStage";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* スタート画面をルートパスに設定 */}
                <Route path="/" element={<StartScreen />} />
                {/* カード選択画面のルートを設定 */}
                <Route path="/CardView" element={<CardView />} />
                {/* ステージ選択画面のルートを設定 */}
                <Route path="/StageSelect" element={<StageSelect />} />
            </Routes>
        </BrowserRouter>
=======
import CardView from './screen/cardView';
import StageSelect from "./screen/selectStage";
import GameScreenHome from './screen/page';
import './App.css';
import Game from "./endless/page";
import Background from "./background";
import BgImg from "/public/background.png";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* スタート画面をルートパスに設定 */}
                    <Route path="/" element={<StartScreen />} />
                    {/* カード選択画面のルートを設定 */}
                    <Route path="/card-view" element={<CardView />} />
                    {/* ステージ選択画面のルートを設定 */}
                    <Route path="/StageSelect" element={<StageSelect />} />
                    
                    {/* ↓↓↓ ここを追記 ↓↓↓ */}
                    {/* URLが "/game" の時は page.tsx (GameScreenHome) を表示 */}
                    <Route path="/game" element={<GameScreenHome />} />

                    <Route path="/endless_game" element={<Game />} />
                </Routes>
            </BrowserRouter>
            <Background/>
            <img src={
                BgImg
            }/>
        </>
>>>>>>> c0b139cb50e422796e88275b2ba42566475cbea5
    );
}

export default App;
