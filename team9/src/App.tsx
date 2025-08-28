import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartScreen from "./screen/startScreen";
import ViewCard from "./screen/viewCards";
import SelectStage from "./screen/selectStage";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* URLが "/" の時は StartScreen を表示 */}
                <Route path="/" element={<StartScreen />} />

                {/* URLが "/card-view" の時は ViewCard を表示 */}
                <Route path="/viewCards" element={<ViewCard />} />

                {/* URLが "/stage-select" の時は SelectStage を表示 */}
                <Route path="/selectStage" element={<SelectStage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
