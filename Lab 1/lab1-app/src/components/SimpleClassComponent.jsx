import React, { Component } from 'react';

class SimpleClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        

    }

    render(){
        return (
            <div>
                <h1>Vite + React </h1>
                <p>class component in React using Vite.
                    So a bit more code than a functional component.
                </p>
            </div>
        );
    }
}

export default SimpleClassComponent;