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
        this.newGeneration = this.newGeneration.bind(this)
        this.handleStop    = this.handleStop.bind(this)
        this.handleStart   = this.handleStart.bind(this)
        this.handleReset    = this.handleReset.bind(this)
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
        this.setState({cellArray})
    }

    cellLives(xCoord, yCoord){
        let count = 0;
        const y = this.state.yaxis
        const x = this.state.xaxis
        for(var i=-1;i<=1;i++){
            for(var j=-1;j<=1;j++){
                if((xCoord + j) >= 0 && (xCoord + j) < x && (yCoord + i) >= 0 && (yCoord + i) < y && !(i === 0 && j === 0)){
                   //I am getting undefined here after one cycle I know this now might do with the this.state 
                    //debugger;
                    if(this.state.cellArray[yCoord+i][xCoord+j] === true){
                        count++;
                    }
                }
            }
        }
        if(count === 3 || (this.state.cellArray[yCoord][xCoord] && count === 2)){
            count = 0
            return true
        } else {
            count = 0
            return false
        }
        
    }
       
    newGeneration(){
        let newGenerationArray = [];
        let genCounter = this.state.generationCount + 1
        for(var i=0; i<50; i++){
           newGenerationArray.push([])
            for(var j=0; j<70; j++){
                newGenerationArray[i].push(this.cellLives(j, i))
            }  
        }
        this.setState({
                       cellArray: newGenerationArray,
                       generationCount: genCounter
                       })
    }

    componentWillMount(){;
        this.generateRandomCellArray()
        this.interval = setInterval(() => this.newGeneration(), 300)
    }
    
    componentWillUnmount(){
        clearInterval(this.interval)
    }

    handleStart(e){
        e.preventDefault()
        clearInterval(this.interval);
        this.interval = setInterval(() => this.newGeneration(), 300)
    }    

    handleStop(e){
        e.preventDefault()
        console.log("stop the timer");
        clearInterval(this.interval);
    }

    handleReset(e){
        e.preventDefault()
        clearInterval(this.interval)
        this.generateRandomCellArray()
        this.interval = setInterval(() => this.newGeneration(), 300)
    }   
    render() {
        
        return (
            <div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <h1>Game of Life</h1>
                    </div>
                </div>
                <div className="row">
                        <GenerationCount count={this.state.generationCount} />
                </div>
                <div className="row">    
                    <DisplayCells array={this.state.cellArray} />
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <div className="col-md-1">
                        <button type="button" className="btn btn-success" onClick={this.handleStart}>Start</button>   
                    </div>
                    <div className="col-md-1">
                        <button type="button" className="btn btn-danger" onClick={this.handleStop}>Stop</button>
                    </div>
                    <div className="col-md-1">
                        <button type="button" className="btn" onClick={this.handleReset}>Reset</button>
                    </div>
                    </div>:
                </div>
                <div className="row">
                    <div className="col-md-2 col-md-offset-5">
                        about
                    </div>
                </div>

                <div className="row">
                    <div> github picture thingy</div>
                </div>
            </div>
        );
    }
}

export default App;