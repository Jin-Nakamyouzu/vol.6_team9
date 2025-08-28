"use client";
import "./style.css"; // カード用のCSSをインポート
import type { CSSProperties } from "react";

// TextCardが受け取るpropsの型
type TextCardProps = {
    explain: string;
    code: CSSProperties;
    bew: string;
    onCardApply: (css: CSSProperties) => void;
};

export default function TextCard({ explain, code, bew, onCardApply }: TextCardProps) {
    // カード全体がクリックされたら、onCardApply関数を実行する
    return (
        <div className="card" onClick={() => onCardApply(code)}>
            <div className="code-box">
                <code>{bew}</code>
            </div>
            <p className="explain-text">{explain}</p>
        </div>
    );
}