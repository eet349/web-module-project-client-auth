import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Friend from './Friend';

import { StyledCardContainer } from '../styledComponents/StyledCardContainer';

const FriendsList = () => {
	const [friendsList, setFriendsList] = useState([]);

	useEffect(() => {
		// fetch friends
		axios
			.get('http://localhost:5000/api/friends', {
				headers: {
					authorization: JSON.parse(localStorage.getItem('token')),
				},
			})
			.then((res) => {
				setFriendsList(res.data);
			})
			.catch((err) => {
				console.log('err: ', err);
			});
	}, []);

	const renderFriends = () => {
		return friendsList.map((friend) => (
			<Friend key={friend.id} friend={friend} />
		));
	};
	return (
		<>
			<h2>Friends</h2>
			<StyledCardContainer>{renderFriends()}</StyledCardContainer>
		</>
	);
};

export default FriendsList;
