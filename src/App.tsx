import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Setup} from "./Setup";



function App() {


    let [maxValue, setMaxValue] = useState(10)
    let [startValue, setStartValue] = useState(5)
    let [count, setCount] = useState(startValue)
    let [maxValueSetup, setMaxValueSetup] = useState(maxValue)

    useEffect(() => {
        const max=localStorage.getItem("maxValue")||[]
        if (typeof max === "string") {
            setMaxValue(JSON.parse(max))
            setMaxValueSetup(JSON.parse(max))
        }
        const start=localStorage.getItem("startValue")||[]
        if (typeof start === "string") {
            setStartValue(JSON.parse(start))
            setCount(JSON.parse(start))
        }
    },[]);


    useEffect(() => {
localStorage.setItem("maxValue",JSON.stringify(maxValue))
        localStorage.setItem("startValue",JSON.stringify(startValue))

    },[maxValue,startValue]);




    let increase = () => {
        setCount(count + 1)
    }
    let reset = () => {
        setCount(count = startValue)
    }

    let setup=()=>{

        setCount(count=startValue)
        setMaxValueSetup(maxValueSetup=maxValue)

    }




    return (
        <div className="App">
           <Counter
               increase={increase}
               reset={reset}
               count={count}
               maxValueSetup={maxValueSetup}
               startValue={startValue}
               maxValue={maxValue}


           />

           <Setup
               setMaxValue={setMaxValue}
               setStartValue={setStartValue}
               maxValue={maxValue}
               startValue={startValue}
               setup={setup}
               setCount={setCount}
               count={count}
               maxValueSetup={maxValueSetup}

           />
        </div>
    );
}

export default App;
