"use client";
import CardsScreen from "./CardsScreen";
import ElementsScreen from "./ElementsScreen";
import { useState, useEffect } from "react"; // ←ここ
import type { CSSProperties } from 'react';
import "./style.css";
import { useStageStore } from "../lib/stageStore"; // ←ここ

interface Block {
  id: number;
  content: string;
}
interface BlockGroup {
  id: string;
  blockIds: number[];
  styles: CSSProperties;
}

export default function GameScreenHome() {
    // Zustandから取得
    const { currentStage, stages } = useStageStore();
    const stageData = stages[currentStage];

    // useStateで初期値
    const [blocks, setBlocks] = useState(stageData.blocks);
    const [selectedBlockIds, setSelectedBlockIds] = useState<number[]>([]);
    const [blockGroups, setBlockGroups] = useState([]);

    // ステージ切り替え時に初期化
    useEffect(() => {
        setBlocks(stageData.blocks);
        setSelectedBlockIds([]);
        setBlockGroups([]);
    }, [stageData]);

    // --- ロジック（関数）エリア ---
    const handleBlockClick = (blockId: number) => {
        setSelectedBlockIds(prevSelectedIds =>
            prevSelectedIds.includes(blockId)
                ? prevSelectedIds.filter(id => id !== blockId)
                : [...prevSelectedIds, blockId]
        );
    };

    const handleCardApply = (css: CSSProperties) => {
        if (selectedBlockIds.length > 0) {
            // ブロックIDをソートしてグループ判定（順序の違いによる重複を防ぐ）
            const sortedIds = [...selectedBlockIds].sort((a, b) => a - b);
    
            setBlockGroups(prevGroups => {
                // 既存グループに同じIDセットがあるか判定
                const idx = prevGroups.findIndex(
                    group => 
                        group.blockIds.length === sortedIds.length &&
                        group.blockIds.every((id, i) => sortedIds[i] === id)
                );
    
                if (idx !== -1) {
                    // 既存グループがあれば、そのCSSだけ書き換える
                    const newGroups = [...prevGroups];
                    newGroups[idx] = {
                        ...newGroups[idx],
                        styles: css,
                    };
                    return newGroups;
                } else {
                    // そうでない場合は新規追加
                    return [
                        ...prevGroups,
                        {
                            id: `group-${Date.now()}`,
                            blockIds: sortedIds,
                            styles: css,
                        },
                    ];
                }
            });
        }
    };

    const handleReset = () => {
        setSelectedBlockIds([]);
        setBlockGroups([]);
    };

    const handleUndo = () => {
        if (blockGroups.length > 0) {
            setBlockGroups(prevGroups => prevGroups.slice(0, -1));
        }
    };

    // --- JSX（画面の見た目）エリア ---
    return (
        <div className="main">
            <div className="left_menue">
                <div className="action-buttons-container">
                    <button onClick={handleUndo} className="action-button undo-button">一手戻る</button>
                    <button onClick={handleReset} className="action-button reset-button">リセット</button>
                </div>
                <ElementsScreen
                    blocks={blocks}
                    groups={blockGroups}
                    selectedBlockIds={selectedBlockIds}
                    onBlockClick={handleBlockClick}
                />
            </div>
            <div className="right_menue">
                <div className="cardSelecterh1">所持カード</div>
                <CardsScreen
                    onCardApply={handleCardApply}
                    cards={stageData.cards}
                    // 以下のPropsはCardsScreenが要求するが、今の機能では使わないためダミー値
                    isCard={false} setIsCard={()=>{}} setChCSS={()=>{}} collision={false}
                />
            </div>
        </div>
    );
}