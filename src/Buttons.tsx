import React from "react";
type ButtonsType={
    increase:()=>void
    reset:()=>void
    count:number
    maxValue:number
    startValue:number
}
export function Buttons(props:ButtonsType) {
    return (<div className={"buttons"}>
            <button onClick={props.increase} className={props.count>props.maxValue-1||isNaN(props.count)?"button2-disable":"button1"} disabled={props.count>props.maxValue-1||isNaN(props.count)}  >inc</button>
            <button  onClick={props.reset} className={props.count<=props.startValue||isNaN(props.count)?"button2-disable":"button2"} disabled={props.count<=props.startValue||isNaN(props.count)} >reset</button>
        </div>


    )
}