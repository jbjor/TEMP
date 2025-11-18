import React, {useState, useRef} from 'react';

function CounterWithUseRef() {
    const [count, setCount] = React.useState(0);
    const [countStep2, setCountStep2] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
        buttonClickRef.current += 1;
        console.log("Button clicked", buttonClickRef.current, "times"); 
        console.log("Count :", count);
    }

    const decrement = () => {
        setCount(count - 1);
        buttonClickRef.current += 1;
        console.log("Button clicked", buttonClickRef.current, "times");
        console.log("Count :", count);
    }

    return (
        <div>
            <h2>Counter Counter With UseRef </h2>  
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default CounterWithUseRef
    
    ;