"use client";
import { useState } from "react";

const Counter = () => {
    const [count, setCount]=useState(0);
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button className="btn btn-primary" onClick={()=>setCount(count - 1)}> Decrease</button>
            <button className="btn btn-primary" onClick={()=>setCount(count + 1)}> Increase</button>
        </div>
    );
};

export default Counter;