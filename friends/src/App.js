import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

import { StyledHeader } from './styledComponents/StyledHeader';
import PrivateRoute from './components/PrivateRoute';

function App() {
	return (
		<Router>
			<div className='App'>
				<StyledHeader>
					<h1>FriendsBook</h1>
				</StyledHeader>
				<Link onClick={() => (window.location.href = '/friends')}>Friends</Link>
				<Link onClick={() => (window.location.href = '/add-friend')}>
					Add Friends
				</Link>
				<Switch>
					<PrivateRoute path='/friends' component={FriendsList} />
					<PrivateRoute path='/add-friend' component={AddFriend} />
					<Route path='/login' component={Login} />
					<Route component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
