"use client";
import "./ElementsScreen.css";
import GameOfElement from "../card/Element";
import type { CSSProperties } from 'react';

// propsの型定義
interface Block {
  id: number;
  content: string;
}
interface BlockGroup {
  id: string;
  blockIds: number[];
  styles: CSSProperties;
}
interface ElementsScreenProps {
    blocks: Block[];
    groups: BlockGroup[];
    selectedBlockIds: number[];
    onBlockClick: (id: number) => void;
}

export default function ElementsScreen({ blocks, groups, selectedBlockIds, onBlockClick }: ElementsScreenProps) {
    // グループ化されたブロックのIDを全てリストアップ
    const groupedBlockIds = groups.flatMap(group => group.blockIds);
    // グループに属していないブロックを抽出
    const ungroupedBlocks = blocks.filter(block => !groupedBlockIds.includes(block.id));

    return (
        <div className="puzzle-container">
            {/* まず、作成されたグループを描画します */}
            {groups.map(group => (
                <div key={group.id} style={group.styles} className="block-group">
                    {group.blockIds.map(blockId => {
                        const block = blocks.find(b => b.id === blockId);
                        if (!block) return null;
                        return (
                            <GameOfElement
                                key={block.id}
                                content={block.content}
                                isSelected={selectedBlockIds.includes(block.id)}
                                onClick={() => onBlockClick(block.id)}
                            />
                        );
                    })}
                </div>
            ))}

            {/* 次に、まだグループ化されていないブロックを初期位置に描画します */}
            {ungroupedBlocks.map((block) => {
                let initialPositionClass = '';
                if (block.id === 1) initialPositionClass = 'item-top-left';
                if (block.id === 2) initialPositionClass = 'item-bottom-right';

                return (
                    <GameOfElement
                        key={block.id}
                        content={block.content}
                        isSelected={selectedBlockIds.includes(block.id)}
                        onClick={() => onBlockClick(block.id)}
                        initialPositionClass={initialPositionClass}
                    />
                );
            })}
        </div>
    );
}