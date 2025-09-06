import React, { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Current count: {count}</h1>
            {/* Increment button */}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            {/* Decrement Button */}
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            {/* Reset Button */}
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter;