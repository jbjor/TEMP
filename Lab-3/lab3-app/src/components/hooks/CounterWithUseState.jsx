import React from 'react';

function CounterWithUseState() {
    const [count, setCount] = React.useState(0);
    const [countStep2, setCountStep2] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
        setCountStep2(countStep2 + 2);
        console.log("Count :", count);
        console.log("Count Step 2 :", countStep2);
    }

    const decrement = () => {
        setCount(count - 1);
        setCountStep2(countStep2 - 2);
        console.log("Count :", count);
        console.log("Count Step 2 :", countStep2);
    }

    return (
        <div>
            <h2>Counter Counter With UseState </h2>  
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default CounterWithUseState
    
    ;