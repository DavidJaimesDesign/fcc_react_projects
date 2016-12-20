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
        const {result} = this.state
        return (
            <Grid>
                <div className="App">
                        <Row>
                            <h1>Free Code Camp Leaderboard</h1>
                        </Row>
                        <Row>
                            <Col md={12}>
      	                        {result ? <LeaderBoard query={result}/> :null }
                            </Col>
                        </Row>
                </div>
            </Grid>
   	);
    }
}

class LeaderBoard extends Component {
    render (){
        const { query} = this.props
        return(
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Avatar</th>
                        <th>Alltime</th>
                        <th>30 days</th>
                        <th>Last update</th>
                    </tr>
                </thead>
                <tbody>
                    {query.map((user) =>
                        <tr>
                            <th>{user.username}</th>
                            <th>{user.img}</th>
                            <th>{user.recent}</th>
                            <th>{user.alltime}</th>
                            <th>{user.lastUpdate}</th>
                        </tr>
                    )}               
                </tbody>
            </Table>
        )
    }
}
export default App;
