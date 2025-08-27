"use client";
import { useState } from "react"
import "./styleE.css"
type setting = {
    size : number ,
    posX : number ,
    posY : number ,
    setElmFlag : (value:boolean) => void ; 
    elmFlag : boolean ,
    optionStyle : object ,
}
export default function GameOfElement({size,posX,posY,setElmFlag,elmFlag,optionStyle}:setting){
    
    const handleOnMouseOv = () => {
        setElmFlag (true)

    }
    const handleOnMouseLv = () => {
        setElmFlag (false)

    }
    let css = {
        width:`${size*6}rem`,
        height:`${size*6}rem`,
        top:posX ,
        left:posY ,
    } ;
    Object.assign(css,optionStyle)
    return (
        <div style={css}
        onMouseOver={handleOnMouseOv}
        onMouseLeave={handleOnMouseLv}
        className="obj"
        >
            あ
        </div>
    )
}