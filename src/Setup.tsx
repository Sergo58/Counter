import React, {ChangeEvent, useState} from "react";

type SetupType = {
    startValue:number
    maxValue:number
    setStartValue:(e:number)=>void
    setMaxValue:(e: number)=>void
    setup:()=>void
    setCount:(e:number)=>void
    count:number
    maxValueSetup:number
}

export function Setup(props: SetupType) {


    const onChangeHandler1 = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(e.currentTarget.valueAsNumber)
        props.setCount(NaN)
    }
    const onChangeHandler2 = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(e.currentTarget.valueAsNumber)
        props.setCount(NaN)
        let max=e.currentTarget.valueAsNumber
    }

    return (
        <div >



            <div>
                <span className={"span"}>Start Value</span> <input className={props.startValue<0||props.startValue===props.maxValue||props.startValue>props.maxValue?"spanError":"atuin-btn"} value={props.startValue} type="number" onChange={onChangeHandler1}/> <br/>
                <span className={"span2"}>Max Value</span> <input className={props.startValue<0||props.startValue===props.maxValue||props.startValue>props.maxValue?"spanError":"atuin-btn"} value={props.maxValue}  type="number" onChange={onChangeHandler2}/>
            </div>
            <div>
                <button className={props.count<props.maxValue+1||props.maxValue<props.startValue||props.startValue===props.count|| props.startValue<0||props.startValue===props.maxValue?"button2-disable":"setupButton"} onClick={props.setup} disabled={props.count<props.maxValue+1||props.startValue===props.count|| props.startValue<0||props.startValue===props.maxValue||props.startValue>props.maxValue} >set</button>

            </div>

        </div>


    )
}