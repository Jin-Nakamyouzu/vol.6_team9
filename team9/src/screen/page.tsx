"use client";
import CardsScreen from "./CardsScreen";
import ElementsScreen from "./ElementsScreen";
import { useState } from "react" ;
import "./style.css"
import type { CSSProperties } from 'react';

// (Block, BlockGroup の型定義は変更なし)
interface Block {
  id: number;
  content: string;
}
interface BlockGroup {
  id: string;
  blockIds: number[];
  styles: CSSProperties;
}

export default function GameScreenHome(){
    const [blocks, setBlocks] = useState<Block[]>([
        { id: 1, content: 'あ' },
        { id: 2, content: 'い' },
    ]);
    const [selectedBlockIds, setSelectedBlockIds] = useState<number[]>([]);
    const [blockGroups, setBlockGroups] = useState<BlockGroup[]>([]);

    const handleBlockClick = (blockId: number) => {
        setSelectedBlockIds(prevSelectedIds => {
            if (prevSelectedIds.includes(blockId)) {
                return prevSelectedIds.filter(id => id !== blockId);
            } else {
                return [...prevSelectedIds, blockId];
            }
        });
    };

    const handleCardApply = (css: CSSProperties) => {
        if (selectedBlockIds.length > 0) {
            const newGroup: BlockGroup = {
                id: `group-${Date.now()}`,
                blockIds: selectedBlockIds.sort(),
                styles: css,
            };
            setBlockGroups(prevGroups => [...prevGroups, newGroup]);
            setSelectedBlockIds([]);
        }
    };

    // ★ 1. リセット機能を追加
    const handleReset = () => {
        setSelectedBlockIds([]); // 選択状態をリセット
        setBlockGroups([]);      // グループを全てリセット
    };

    // ★ 2. 一手戻る機能を追加
    const handleUndo = () => {
        // グループが存在する場合、最後のグループを削除する
        if (blockGroups.length > 0) {
            setBlockGroups(prevGroups => prevGroups.slice(0, -1));
        }
    };

    return (
        <div className="main">
            <div className="left_menue">
                {/* ★ 3. 操作ボタン用のコンテナを追加 */}
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
                {/* (変更なし) */}
                <div className="cardSelecterh1">
                    所持カード
                </div>
                <CardsScreen
                    onCardApply={handleCardApply}
                    cards={
                        [{
                            explain : "ブロックを水平に並べる",
                            code : { display: 'flex', flexDirection: 'row', gap: '10px' },
                            bew : "flex-direction: row;",
                            isSelect : true ,
                        }]
                    }
                    isCard={false} setIsCard={()=>{}} setChCSS={()=>{}} collision={false}
                />
            </div>
        </div>
    );
}