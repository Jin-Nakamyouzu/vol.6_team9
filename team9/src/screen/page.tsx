"use client";
import CardsScreen from "./CardsScreen";
import ElementsScreen from "./ElementsScreen";
import { useState } from "react" ;
import "./style.css"
import type { CSSProperties } from 'react';

// Block, BlockGroup の型定義
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

    // ★★★ ロジックを修正した handleCardApply 関数 ★★★
    const handleCardApply = (css: CSSProperties) => {
        // ブロックが何も選択されていなければ何もしない
        if (selectedBlockIds.length === 0) return;

        // 選択されたブロックの中に、すでにグループ化されているものが含まれるかチェック
        const groupToUpdate = blockGroups.find(g => 
            g.blockIds.some(id => selectedBlockIds.includes(id))
        );

        if (groupToUpdate) {
            // --- ケース1: 既存グループのスタイルを「更新」する ---
            setBlockGroups(prevGroups => 
                prevGroups.map(group => {
                    // 更新対象のグループを見つけたら、スタイルを新しいものに置き換える
                    if (group.id === groupToUpdate.id) {
                        return { ...group, styles: css };
                    }
                    return group;
                })
            );
        } else {
            // --- ケース2: 新しいグループを「作成」する ---
            const newGroup: BlockGroup = {
                id: `group-${Date.now()}`,
                blockIds: selectedBlockIds.sort(),
                styles: css,
            };
            setBlockGroups(prevGroups => [...prevGroups, newGroup]);
        }
        
        // 最後に選択状態をリセット
        setSelectedBlockIds([]);
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
