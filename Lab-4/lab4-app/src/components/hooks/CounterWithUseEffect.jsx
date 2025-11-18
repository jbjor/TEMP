import React, {useState, useEffect} from 'react';
import { use } from 'react';   

function CounterWithUseEffect() {
    const [count, setCount] = useState(0);
    const [countStep2, setCountStep2] = useState(0);
    //const [data, setData] = useState(null);

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

    useEffect(() => {
        document.title = `Count: ${count}`;
        console.log("Document Title Updated to", document.title);
    }, [count]);

    //useEffect(() => {
        // simulating data fetching
      //  setData({name: "Sample Data" });
       // }, []);

    //document.title = `Count: ${count}`;
    //console.log("Document Title Updated");

    return (
        <div>
            <h2>Counter With UseEffect </h2>  
            <p>Count: {count}</p>
            {/*<p>Data: {data ? data.name : "Loading..."}</p> */}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );  
}

export default CounterWithUseEffect
    
    ;