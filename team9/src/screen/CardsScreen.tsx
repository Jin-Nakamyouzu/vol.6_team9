"use client";
import "./CardsScreen.css"
import TextCard from "../card/test";
import { useState } from "react"
type tco = {
  explain : string ;
  code : object ;
  isSelect : boolean ;
  bew : string ;
}
type cards = {
    cards: tco[] ,
    isCard: boolean ,
    setIsCard: (value:boolean) => void ;
    setChCSS: (value:object) => void ;
    collision :boolean ;
    
}
export default function CardsScreen({cards,isCard,setIsCard,setChCSS,collision}:cards){
    const stateChild2 = [] ;
    
    return (
        <>
            {
                cards.map((elm,index)=>{
                    const [isDragging, setIsDragging] = useState(false);
                    stateChild2.push({
                        isDragging:isDragging ,
                        setIsDragging:setIsDragging
                    })
                    return (<TextCard
                        key = {index}
                        explain = {elm.explain}
                        code = {elm.code}
                        bew = {elm.bew}
                        isSelect = {true}
                        isDragging = {isDragging}
                        setIsDragging= {setIsDragging}
                        isCard = {isCard}
                        setIsCard= {setIsCard}
                        setChCSS ={setChCSS}
                        collision = {collision}
                    />)
                })
            }
        </>
    )
}