"use client";
import TextCard from "../card/test"; // この import 文が1つだけであることを確認してください
import type { CSSProperties } from "react";

// カード1枚のデータの型
type CardData = {
  explain: string ;
  code: CSSProperties ;
  isSelect: boolean ;
  bew: string ;
}

// CardsScreenが受け取るpropsの型
type CardsScreenProps = {
    cards: CardData[];
    onCardApply: (css: CSSProperties) => void;
}

export default function CardsScreen({ cards, onCardApply }: CardsScreenProps){
    return (
        <>
            {
                // cardの配列をmapで展開して、1枚ずつTextCardコンポーネントとして表示
                cards.map((card, index) => {
                    return (
                        <TextCard
                            key={index}
                            explain={card.explain}
                            code={card.code}
                            bew={card.bew}
                            onCardApply={onCardApply} // クリック処理を子コンポーネントに渡す
                        />
                    );
                })
            }
        </>
    );
}