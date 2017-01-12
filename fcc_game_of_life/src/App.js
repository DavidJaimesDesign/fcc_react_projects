//this isnt app related but I finally got terminator to work
//the 50 by 70 grid is static
import _ from 'lodash';
import React, { Component } from 'react';
import  './App.css';
import GenerationCount from './components/generationcount';
import DisplayCells from './components/displaycells';

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
        let cellArray = this.generateRandomCellArray();
        this.setState({cellArray})
         _.debounce(() => console.log("hello"), 300)
    }

    randomArrayCycle(){
        let cellArray = this.generateRandomCellArray();
        this.setState({cellArray})
    }
    
    
    render() {

        
        return (
            <div>
            <div className="row">
                    <GenerationCount count={this.state.generationCount} />
            </div>
            <div className="row">    
                <DisplayCells array={this.state.cellArray} />
            </div>
            </div>
        );
    }
}

export default App;
