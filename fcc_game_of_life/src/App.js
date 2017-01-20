import React, { Component } from 'react';
import  './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import {Grid,Button, Row, Col, ButtonGroup, PageHeader} from 'react-bootstrap';
import githubLogo from './GitHub-Mark-64px.png';
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
            <Grid>
                <Row>
                    <Row>
                        <Col md={4} mdOffset={4}>
                            <PageHeader className="center_text">Game of Life</PageHeader>
                        </Col>
                    </Row>

                    <GenerationCount count={this.state.generationCount} />
                    <DisplayCells array={this.state.cellArray} />

                    <Row>
                        <Col md={4} mdOffset={4}>
                            <div className="top-spacing buttons-center">
                            <ButtonGroup bsSize="large">
                                <Button className="btn btn-success" onClick={this.handleStart}>Start</Button>   
                                <Button className="btn btn-danger" onClick={this.handleStop}>Stop</Button>
                                <Button className="btn" onClick={this.handleReset}>Reset</Button>
                            </ButtonGroup>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4} mdOffset={4}>
                            <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life">
                                <div className="center_text top-spacing about-text">about</div>
                            </a>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4} mdOffset={4}>
                            <div className="center_text top-spacing">
                                <a href="https://github.com/DavidJaimesDesign/fcc_react_projects/tree/master/fcc_game_of_life">
                                    <img src={githubLogo} alt="logo"/>
                                </a> 
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Grid>
        );
    }
}

export default App;
