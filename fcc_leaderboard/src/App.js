import React, { Component } from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const thirtydays = [{"username":"sjames1958gm","img":"https://avatars.githubusercontent.com/u/4639625?v=3","alltime":4620,"recent":535,"lastUpdate":"2016-12-19T13:21:24.711Z"},{"username":"apottr","img":"https://avatars.githubusercontent.com/u/1924021?v=3","alltime":1113,"recent":464,"lastUpdate":"2016-12-12T21:53:18.499Z"},{"username":"diomed","img":"https://avatars.githubusercontent.com/u/72777?v=3","alltime":1661,"recent":463,"lastUpdate":"2016-12-12T12:06:39.303Z"},{"username":"Blauelf","img":"https://avatars.githubusercontent.com/u/5952026?v=3","alltime":2879,"recent":372,"lastUpdate":"2016-12-12T13:04:09.500Z"},{"username":"anthonygallina1","img":"https://avatars.githubusercontent.com/u/11003055?v=3","alltime":2486,"recent":291,"lastUpdate":"2016-12-12T13:04:08.423Z"},{"username":"revisualize","img":"https://avatars.githubusercontent.com/u/1588399?v=3","alltime":2287,"recent":289,"lastUpdate":"2016-12-12T12:05:00.476Z"},{"username":"Chrono79","img":"https://avatars.githubusercontent.com/u/9571508?v=3","alltime":2467,"recent":273,"lastUpdate":"2016-12-12T12:04:35.292Z"},]

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            thirtydays: thirtydays
        }
    } 
    render() {
        const {thirtydays} = this.state
        return (
            <div className="App">
                <div class="container">
                    <h1>Free Code Camp Leaderboard</h1>
      	            <Table thirtydays={thirtydays}/>
                </div>
            </div>
   	);
    }
}

class Table extends Component {
    render (){
        const { thirtydays } = this.props
        return(
            <table>
                <tr>
                    <th>Username</th>
                    <th>Image</th>
                    <th>Alltime</th>
                    <th>30 days</th>
                    <th>Last update</th>
                </tr>
	    	{thirtydays.map((user) =>
		<tr>
		    <td>{user.username}</td>
		    <td>{user.img}</td>
		    <td>{user.alltime}</td>
		    <td>{user.recent}</td>
		    <td>{user.lastUpdate}</td>
		</tr>
	        )}
            </table>
        )
    }
}
export default App;
