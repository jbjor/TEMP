import React from 'react';

function CounterWithoutHook() {
    let count = 0;      // wont be re-rendered

    const increment = () => {   // the Console side kinda
        count += 1;
        console.log("Count :", count);
    }

    const decrement = () => {
        count -= 1;
        console.log("Count :", count);
    }  

    return (    // The UI side
        <div>
            <h2>Counter Without Hook</h2>  
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default CounterWithoutHook
    
    ;