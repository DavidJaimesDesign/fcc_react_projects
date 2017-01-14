//the 50 by 70 grid is static
import React, { Component } from 'react';
import  './App.css';
import GenerationCount from './components/generationcount';
import DisplayCells from './components/displaycells';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            generationCount: 0,
            cellArray: null,
            time: 100,
            yaxis: 50,
            xaxis: 70
        }
    }

    generateRandomCellArray(){
        let cellArray = []
        const y = this.state.yaxis
        const x = this.state.xaxis

        for(var i=0; i<y; i++ ){
            let row = [];
            for(var j=0; j<x; j++){
                var cellvalue = Math.random() < 0.5 ? true : false;
                row.push(cellvalue)
            }
            cellArray.push(row)   
        }
        return cellArray
    }

    cellLives(xCoord, yCoord){
        let count = 0;
        let array = this.state.cellArray
        let cell  = array[xCoord][yCoord]
        const y = this.state.yaxis
        const x = this.state.xaxis

        for(var i=-1;i<=1;i++){
            for(var j=-1;j<=1;i++){
                if((xCoord + i) >= 0 && (xCoord + 1) < x && (yCoord + j) >= 0 && (yCoord + j) < y && !(i === 0 && j === 0)){
                    if(this.state.cellArray[x+i][y+j]){
                        count++;
                    }
                }
            }
        }

        if(count === 3 ||(cell && count === 2)){
            return true
        } else {
            return false
        } 
    }
       
    newGeneration(){
        let newGenerationArray = [];
        const x = this.state.xaxis
        const y = this.state.yaxis

        for(var i=0; i<y; i++){
           newGenerationArray.push([])
            for(var j=0; j<x; j++){
                newGenerationArray[i].push(true)
            }  
        }
        
        return newGenerationArray
    }

    timePasses(){
        this.setState((prevState) => ({
            cellArray: this.newGeneration()
        }))
    }

    componentWillMount(){
        let cellArray = this.generateRandomCellArray()
        this.setState({cellArray})
        this.interval = setInterval(() => this.timePasses(), 1000)
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
