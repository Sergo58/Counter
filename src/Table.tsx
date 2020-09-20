import React from "react";
type TableType={
    count:number
    maxValueSetup:number
    startValue:number
    maxValue:number

}
export function Table(props:TableType) {
    return (
        <div className={props.count>props.maxValueSetup-1?"table-red":"table"}>
           <div>{props.count||props.count===0?props.count:props.startValue<0||props.startValue===props.maxValue||props.startValue>props.maxValue?<span className={"error"}>Incorrect value!</span>:<span className={"enter"}>inter values and press "set"</span>} </div>
        </div>
    );
}