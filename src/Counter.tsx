import React from "react";
import {Buttons} from "./Buttons";
import {Table} from "./Table";

type CounterType={
    increase:()=>void
    reset:()=>void
    count:number
    startValue:number
    maxValueSetup:number
    maxValue:number

}




export function Counter(props:CounterType) {
    return (
        <div >
            <Table maxValue={props.maxValue} startValue={props.startValue}  count={props.count} maxValueSetup={props.maxValueSetup}/>
            <Buttons startValue={props.startValue}  increase={props.increase} reset={props.reset} count={props.count} maxValue={props.maxValueSetup}/>

        </div>


)
}


