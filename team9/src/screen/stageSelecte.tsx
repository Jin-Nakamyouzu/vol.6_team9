import React from 'react';
import { Link } from 'react-router-dom';
import { useStageStore } from '../lib/stageStore';

const StageSelect: React.FC = () => {
  const setStage = useStageStore((state) => state.setStage);
  const stages = useStageStore((state) => state.stages);

  return (
    <div className="screen-container">
      <h1>Stage Select</h1>
      <p>ステージを選択してください。</p>
      <div>
        {stages.map((stage, idx) => (
          <Link
            key={idx}
            to="/game"
            className="button-link"
            onClick={() => setStage(idx)}
          >
            ステージ{idx + 1}
          </Link>
        ))}
      </div>
      <Link to="/" className="button-link">スタート画面に戻る</Link>
    </div>
  );
};
export default StageSelect;