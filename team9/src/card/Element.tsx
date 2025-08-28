"use client";
import "./styleE.css"

type setting = {
    content: string;
    isSelected: boolean;
    onClick: () => void;
    initialPositionClass?: string; // 初期位置用のクラスはあってもなくても良い
}

export default function GameOfElement({ content, isSelected, onClick, initialPositionClass = '' }: setting) {
    // 選択状態(isSelected)に応じて 'selected' クラスを追加/削除
    const className = `obj ${initialPositionClass} ${isSelected ? 'selected' : ''}`.trim();

    return (
        <div className={className} onClick={onClick}>
            {content}
        </div>
    );
}