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
        let arrayCheck = this.state.cellArray
        for(var i=-1;i<=1;i++){
            for(var j=-1;j<=1;j++){
                if((xCoord + i) >= 0 && (xCoord + 1) < x && (yCoord + j) >= 0 && (yCoord + j) < y && !(i === 0 && j === 0)){
                   //I am getting undefined here after one cycle I know this now might do with the this.state 
                    if(arrayCheck[xCoord+i][yCoord+j] === true){
                        count++;
                    }
                }
            }
        }
       //console.log(count)
        if(count === 3 || (arrayCheck[xCoord][yCoord] && count === 2)){
            count = 0
            return true
        } else {
            count = 0
            return false
        }
        
    }
       
    newGeneration(){
        let newGenerationArray = [];

        for(var i=0; i<50; i++){
           newGenerationArray.push([])
            for(var j=0; j<70; j++){
                newGenerationArray[i].push(this.cellLives(i, j))
            }  
        }
        
        return newGenerationArray
    }

    timePasses(){
        this.setState({cellArray: this.newGeneration()})
    }

    componentWillMount(){
        debugger;
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
