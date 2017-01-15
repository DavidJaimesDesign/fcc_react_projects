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
        const y = this.state.yaxis
        const x = this.state.xaxis
        
        for(var i=-1;i<=1;i++){
            for(var j=-1;j<=1;j++){
                if((xCoord + i) >= 0 && (xCoord + 1) < x && (yCoord + j) >= 0 && (yCoord + j) < y && !(i === 0 && j === 0)){
                    if(this.state.cellArray[xCoord+i][yCoord+j] === true){
                        count++;
                    }
                }
            }
        }
       //console.log(count)
        if(count === 3 || (this.state.cellArray[xCoord][yCoord] && count === 2)){
            count = 0
            return true
        } else {
            count = 0
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
                newGenerationArray[i].push(this.cellLives(i, j))
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
        //console.log(this.state.cellArray[0][1])
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
