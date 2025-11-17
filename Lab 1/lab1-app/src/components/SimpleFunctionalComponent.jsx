import React from 'react';

// Will only contain a function
// pretty much same as SimpleClassComponent but without the class syntax
// -> so a lot less code?

function SimpleFunctionalComponent(props) {
    return (
        <div>
            <h1>Vite + React</h1>
            <p>This is a simple functional component in React using Vite.
                So just a function.
            </p>
            <h2>Student info</h2>
            <p>ID: {props.student.id}</p>
            <p>Teacher ID: {props.student.id2}</p>
        </div>
    );
}

export default SimpleFunctionalComponent;