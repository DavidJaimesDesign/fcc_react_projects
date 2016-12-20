import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const thirtydays = [{
						"username":"sjames1958gm",
						"img":"https://avatars.githubusercontent.com/u/4639625?v=3",
						"alltime":4620,
						"recent":535,
						"lastUpdate":"2016-12-19T13:21:24.711Z",
				},
				]

class App extends Component {
	render() {
		return (
			<div className="App">
				{ thirtydays.map((user) =>
						<div key = {user.username}>
								<span>{user.username}</span>
								<span>{user.img}</span>
								<span>{user.alltime}</span>
								<span>{user.recent}</span>
								<span>{user.lastUpdate}</span>
						</div>
				)}
      		</div>
   		 );
  	}
}
export default App;
