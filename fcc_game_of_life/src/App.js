//the 50 by 70 grid is static
import React, { Component } from 'react';
import './App.css';
import GenerationCount from './components/generationcount'
class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            generationCount: 0,
            cellArray: null
        }
    }

    generateRandomCellArray(){
        let cellArray = []
        for(var i=0; i<50; i++ ){
            let row = [];
            for(var j=0; j<70; j++){
                var cellvalue = Math.random() < 0.5 ? true : false;
                row.push(cellvalue)
            }
            cellArray.push(row)   
        }
        return cellArray
    }

    componentWillMount(){
        let arrayTest = this.generateRandomCellArray();
        console.log(arrayTest)
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
