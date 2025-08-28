import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartScreen from "./screen/startScreen";
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
    );
}

export default App;
