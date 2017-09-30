import React, { Component } from 'react';
import "./App.css";

class App extends Component {
    render() {
        return (
            <p className="helloWorld">
                Hello {this.props.name}
            </p>
        );
    }
}

export default App;
