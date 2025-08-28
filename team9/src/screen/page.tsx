"use client";
// 各コンポーネントをインポート
import CardsScreen from "./CardsScreen";
import ElementsScreen from "./ElementsScreen";
// ReactのuseStateフック（State管理）とCSSProperties型（CSSの型定義）をインポート
import { useState } from "react" ;
import type { CSSProperties } from 'react';
// このコンポーネント用のCSSをインポート
import "./style.css"

// TypeScript用の型定義: ブロック1つの情報
interface Block {
  id: number;
  content: string;
}
// TypeScript用の型定義: グループ1つの情報
interface BlockGroup {
  id: string; // グループを識別するための一意なID
  blockIds: number[]; // グループに属するブロックのIDリスト
  styles: CSSProperties; // このグループに適用されるCSSスタイル
}

// メイン画面のコンポーネント本体
export default function GameScreenHome(){
    // --- State管理エリア ---
    // State: ゲームに登場する全ブロックのリスト
    const [blocks, setBlocks] = useState<Block[]>([
        { id: 1, content: 'あ' },
        { id: 2, content: 'い' },
    ]);
    // State: 現在ユーザーが選択しているブロックのIDリスト
    const [selectedBlockIds, setSelectedBlockIds] = useState<number[]>([]);
    // State: スタイルが適用され、作成されたグループのリスト
    const [blockGroups, setBlockGroups] = useState<BlockGroup[]>([]);


    // --- ロジック（関数）エリア ---
    // ブロックがクリックされたときに実行される関数
    const handleBlockClick = (blockId: number) => {
        setSelectedBlockIds(prevSelectedIds => {
            // すでに選択リストにIDがあれば、リストから削除（選択解除）
            if (prevSelectedIds.includes(blockId)) {
                return prevSelectedIds.filter(id => id !== blockId);
            // 選択リストになければ、リストに追加（選択）
            } else {
                return [...prevSelectedIds, blockId];
            }
        });
    };

    const handleCardApply = (css: CSSProperties) => {
        if (selectedBlockIds.length > 0) {
            const newGroup: BlockGroup = {
                id: `group-${Date.now()}`,
                blockIds: selectedBlockIds.sort(), // IDをソートして順序を固定
                styles: css,
            };
            // グループリストの末尾に新しいグループを追加
            setBlockGroups(prevGroups => [...prevGroups, newGroup]);
        }
    };

    // ★ 1. リセット機能を追加
    const handleReset = () => {
        setSelectedBlockIds([]);
        setBlockGroups([]);
    };

    // ★ 2. 一手戻る機能を追加
    const handleUndo = () => {
        // グループが存在する場合、最後のグループを削除する
        if (blockGroups.length > 0) {
            // リストの最後の要素（一番最近作ったグループ）を取り除いた新しいリストをセット
            setBlockGroups(prevGroups => prevGroups.slice(0, -1));
        }
    };


    // --- JSX（画面の見た目）エリア ---
    return (
        // 画面全体の親要素
        <div className="main">
            {/* 左側のプレイエリア */}
            <div className="left_menue">
                {/* ★ 3. 操作ボタン用のコンテナを追加 */}
                <div className="action-buttons-container">
                    <button onClick={handleUndo} className="action-button undo-button">一手戻る</button>
                    <button onClick={handleReset} className="action-button reset-button">リセット</button>
                </div>

                {/* パズル表示エリアのコンポーネント */}
                {/* 必要なデータ(State)と関数をPropsとして渡す */}
                <ElementsScreen
                    blocks={blocks}
                    groups={blockGroups}
                    selectedBlockIds={selectedBlockIds}
                    onBlockClick={handleBlockClick}
                />
            </div>
            {/* 右側のカードエリア */}
            <div className="right_menue">
                <div className="cardSelecterh1">
                    所持カード
                </div>
                {/* カード表示エリアのコンポーネント */}
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
                    // 以下のPropsはCardsScreenが要求するが、今の機能では使わないためダミーの値を渡している
                    isCard={false} setIsCard={()=>{}} setChCSS={()=>{}} collision={false}
                />
            </div>
        </div>
    );
}
