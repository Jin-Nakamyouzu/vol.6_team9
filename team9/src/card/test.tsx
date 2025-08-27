import './style.css'
import { useState, useRef, MouseEvent, useEffect } from 'react';

type textCardOption = {
  explain : string ;
  code : object ;
  isSelect : boolean ;
  isDragging : boolean ;
  setIsDragging : (value:boolean) => void ;
  isCard : boolean ;
  setIsCard : (value:boolean) => void ;
  setChCSS : (value:object) => void ;
  collision : boolean ;
  bew : string ;
}
export default function TextCard({explain,code,isSelect,setIsDragging,isDragging,setIsCard,isCard,setChCSS,collision,bew}:textCardOption) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const dragOffset = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        // ドラッグ開始
        setIsDragging(true);
        setIsCard(true);

        // マウスのクリック位置と要素の現在位置からオフセットを計算
        dragOffset.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        // ドラッグ中でなければ何もしない
        if (!isDragging) return;

        // マウスの現在位置からオフセットを引いて、要素の新しい位置を計算
        const newPosition = {
            x: e.clientX - dragOffset.current.x,
            y: e.clientY - dragOffset.current.y,
        };
        
        // stateを更新して要素を動かす
        setPosition(newPosition);
    };
    useEffect(()=>{
        if(isDragging)if(collision){
            console.log("a")
            setChCSS(code)
        }
    });
    const handleMouseUp = () => {
        // ドラッグ終了
        
        setTimeout(function(){
            
            setIsDragging(false);
            setIsCard(false);
        },20);
        setPosition(
            {
                x:0,
                y:0,
            }
        )
    };
  function card_title(){
    if(isSelect){
      return (
        <div className="text2" id="card">
          {bew}
        </div>
      ) ;
    }else{
      return (
        <div className="text1" id="card">
          {bew}
        </div>
      ) ;
    }
    
  }
  
  return (
    <div 
        className = "card1"
        style={{
            // stateを使って要素の位置を動的に変更
            // transformを使う方がパフォーマンスが良い
            transform: `translate(${position.x}px, ${position.y}px)`,
            zIndex:isDragging ? 9999 : 1,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        >
      <div className="card">
        {
          card_title()
        } 
        {explain}
      </div>
    </div>
  );
}