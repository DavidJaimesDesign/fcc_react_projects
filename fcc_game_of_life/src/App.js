import React, { Component } from 'react';
import './App.css';
import GenerationCount from './components/generationcount'
class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            generationCount: 0
        }
    }
    render() {
        return (
            <div>
                <GenerationCount count={this.state.generationCount} />
            </div>
        );
    }
}

export default App;
