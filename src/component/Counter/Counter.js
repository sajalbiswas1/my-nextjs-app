"use client";

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>Count {count}</h2>
            <button className="" onClick={() => setCount(count - 1)}>Decrease</button>
            <button className="" onClick={() => setCount(count + 1)}>Increase</button>

        </div>
    );
};

export default Counter;