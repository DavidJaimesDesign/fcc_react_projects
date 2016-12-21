import React, { Component } from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Grid, Row, Col, Table } from 'react-bootstrap';

const queryThirtyDays = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const queryAllTime = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime'; 

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            result: null,
            queryThirtyDays: queryThirtyDays,
            queryAllTime: queryAllTime
        }
        
        this.setTop = this.setTop.bind(this);
        this.fetchTop = this.fetchTop.bind(this);
    }
    setTop(result){
        this.setState({ result })
    }
    //this works
    fetchTop(query){
        fetch(query)
        .then(response => response.json())
        .then(result => this.setTop(result))
    }
        
    componentDidMount(){
        const { queryThirtyDays } = this.state;
        this.fetchTop(queryThirtyDays);
    }
     
    render() {
        const {result, queryThirtyDays, queryAllTime} = this.state
        return (
            <Grid>
                <div className="App">
                        <Row>
                            <h1>Free Code Camp Leaderboard</h1>
                        </Row>
                        <Row>
                            <Col md={12}>
      	                        {result ?   
                                <Table striped bordered condensed hover>
                                    <thead>
                                        <tr>
                                            <th>Username</th>
                                            <th>Avatar</th>
                                            <th><a href='#' onClick={() => this.fetchTop(queryAllTime)}>Alltime</a></th>
                                            <th><a href='#' onClick={() => this.fetchTop(queryThirtyDays)}>30 days</a></th>
                                            <th>Last update</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {result.map((user) =>
                                            <tr>
                                                <th>{user.username} </th>
                                                <th><img src={user.img} alt={user.username} height="40" width="40"/></th>
                                                <th>{user.alltime}</th>
                                                <th>{user.recent}</th>
                                                <th>{user.lastUpdate}</th>
                                            </tr>
                                        )}               
                                    </tbody>
                                </Table>
                                :null}
                            </Col>
                        </Row>
                        <Row>
                            <a href="https://github.com/DavidJaimesDesign/fcc_react_projects">Github</a>
                        </Row>
                </div>
            </Grid>
   	);
    }
}

export default App;
