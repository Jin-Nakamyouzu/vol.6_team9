"use client";
import "./ElementsScreen.css";
import GameOfElement from "../card/Element";
import { useState } from "react";
type elm = {
    size : number ;
    posX : number ;
    posY : number ;
}
type elms = {
    elms : elm[] ;
    isObj : boolean ;
    setIsObj : (value:boolean) => void ;
    chCSS : object ,
    collision : boolean ,
}
export default function ElementsScreen({elms,isObj,setIsObj,chCSS,collision}:elms){
    const stateChild = [] ;
    return (
        <>
            {elms.map((elm,index)=>{
                stateChild.push(
                    {
                        newflag:isObj ,
                        setnewflag:setIsObj
                    }
                )
                return (<GameOfElement
                    key={index}
                    size={1}
                    posX={elm.posX }
                    posY={elm.posY }
                    setElmFlag={setIsObj}
                    elmFlag={isObj}
                    optionStyle={chCSS}
                    collision={collision}
                ></GameOfElement>)
            })}
        </>
    )
}