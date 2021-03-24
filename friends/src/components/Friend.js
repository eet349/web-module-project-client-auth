import React from 'react';
import { StyledFriendCard } from '../styledComponents/StyledFriendCard';

const Friend = (props) => {
	console.log('props: ', props);
	const { id, name, age, email } = props.friend;
	return (
		<StyledFriendCard>
			<h3>{name}</h3>
			<p>Age: {age}</p>
			<p>Email: {email}</p>
		</StyledFriendCard>
	);
};

export default Friend;
