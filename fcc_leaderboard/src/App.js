import React, { Component } from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Grid, Row, Col, Table } from 'react-bootstrap';

const queryThirtyDays = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            result: null,
            queryThirtyDays: queryThirtyDays,
        }
        
        this.setTopRecent = this.setTopRecent.bind(this);
        this.fetchTopRecent = this.fetchTopRecent.bind(this);
    }
    setTopRecent(result){
        console.log(result)
        this.setState({ result })
    }
    //this works
    fetchTopRecent(query){
        fetch(query)
        .then(response => response.json())
        .then(result => this.setTopRecent(result))
    }
        
    componentDidMount(){
        const { queryThirtyDays } = this.state;
        this.fetchTopRecent(queryThirtyDays);
    }
     
    render() {
        const {queryThirtyDays, result} = this.state
        return (
            <Grid>
                <div className="App">
                        <Row>
                            <h1>Free Code Camp Leaderboard</h1>
                        </Row>
                        <Row>
                            <Col md={12}>
      	                        {result ? <LeaderBoard queryThirtyDays={queryThirtyDays}/> :null }
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
                        <th>Image</th>
                        <th>Alltime</th>
                        <th>30 days</th>
                        <th>Last update</th>
                    </tr>
                </thead>
                <tbody>
	    	    {query.map((user) =>
		    <tr>
		        <td>{user.username}</td>
		        <td>{user.img}</td>
		        <td>{user.alltime}</td>
		        <td>{user.recent}</td>
		        <td>{user.lastUpdate}</td>
		    </tr>
	            )}
                </tbody>
            </Table>
        )
    }
}
export default App;
