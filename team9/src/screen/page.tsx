"use client";
import CardsScreen from "./CardsScreen";
import ElementsScreen from "./ElementsScreen";
import { useState ,useEffect} from "react" ;
import "./style.css"

export default function GameScreenHome(){
    const [GameObjFlag,setGameObjFlag] = useState<boolean>(false)
    const [CardFlag,setCardFlag] = useState<boolean>(false)
    const [chCSS,setChCSS] = useState<object>({})
    const [f,sf] = useState<boolean>(false)
    
    useEffect(() => {
        if(CardFlag && GameObjFlag){
            console.log(true)
            sf(true)
        }else{
            sf(false)
        }
    }, [CardFlag, GameObjFlag])
    return (
        <div className="main">
            <div className="left_menue">
                <ElementsScreen
                    setIsObj={setGameObjFlag}
                    isObj={GameObjFlag}
                    chCSS={chCSS}
                    elms={
                        [
                            {
                                size:1,
                                posX:20,
                                posY:40,
                            },{
                                size:1,
                                posX:20,
                                posY:40,
                            },{
                                size:1,
                                posX:20,
                                posY:40,
                            },
                        ]
                    }
                />
            </div>
            <div className="right_menue">
                <div className="cardSelecterh1">
                    所持カード
                </div>
                <CardsScreen
                    setIsCard={setCardFlag}
                    isCard={CardFlag}
                    setChCSS={setChCSS}
                    collision={f}
                    cards={
                        [
                            {
                                explain : "文字の大きさを30に設定",
                                code : {fontSize:"30px"},
                                bew : "font-size:30px;",
                                isSelect : true ,
                            },{
                                explain : "背景を黄色に指定",
                                code : {background:"yellow",},
                                bew : "background-color:yellow;",
                                isSelect : true ,
                            }
                        ]
                    }
                />
            </div>
        </div>
    );
}
