import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartScreen from './screen/startScreen';
import CardView from './screen/cardView';
import StageSelect from './screen/stageSelecte';
// page.tsx から GameScreenHome コンポーネントをインポート
import GameScreenHome from './screen/page';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* URLが "/" の時は StartScreen を表示 */}
        <Route path="/" element={<StartScreen />} />

        {/* URLが "/card-view" の時は CardView を表示 */}
        <Route path="/card-view" element={<CardView />} />

        {/* URLが "/stage-select" の時は StageSelect を表示 */}
        <Route path="/stage-select" element={<StageSelect />} />

        {/* ↓↓↓ ここを追記 ↓↓↓ */}
        {/* URLが "/game" の時は page.tsx (GameScreenHome) を表示 */}
        <Route path="/game" element={<GameScreenHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
