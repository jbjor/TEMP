import React, {useState, useRef} from 'react';
// no values are one step behind
// useRef does not re-render the component when its value changes
//     it will just keep the values
//     comment setCount count to see the difference

function CounterWithUseRef() {
    const [count, setCount] = React.useState(0);
    //const [countStep2, setCountStep2] = React.useState(0);
    const buttonClickRef = useRef(0);  // to keep track of button clicks
    // clickCount = useRef(0);  // uncomment to see plain variable or smth      

    const increment = () => {
        setCount(count + 1);
        buttonClickRef.current += 1;
        //clickCount += 1;
        console.log("Button clicked", buttonClickRef.current, "times"); 
        console.log("Count :", count);
        //console.log("ClickCount :", clickCount);
        
    }

    const decrement = () => {
        setCount(count - 1);
        buttonClickRef.current += 1;
        //clickCount += 1;
        console.log("Button clicked", buttonClickRef.current, "times");
        console.log("Count :", count);
        //console.log("ClickCount :", clickCount);
    }

    return (
        <div>
            <h2>Counter With UseRef </h2>  
            <p>Count: {count}</p>
            <p>Button clicked: {buttonClickRef.current} times</p>
            {/*<p>Click count variable: {clickCount} times</p>*/}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            
        </div>
    );
}

export default CounterWithUseRef
    
    ;