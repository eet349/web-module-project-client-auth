import axios from 'axios';
import React, { useState } from 'react';
import { StyledForm } from '../styledComponents/StyledForm';

const initialFormState = {
	name: '',
	age: '',
	email: '',
};

const AddFriend = () => {
	const [formValues, setFormValues] = useState(initialFormState);

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post('http://localhost:5000/api/friends', formValues, {
				headers: {
					authorization: JSON.parse(localStorage.getItem('token')),
				},
			})
			.then((res) => {
				console.log('res: ', res);
				window.location.href = '/friends';
			})
			.catch((err) => {
				console.log('err: ', err);
			});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	return (
		<div>
			Add Friend
			<StyledForm onSubmit={handleSubmit}>
				<label htmlFor='name'>Name</label>
				<input
					name='name'
					type='text'
					onChange={handleChange}
					value={formValues.name}
					autoFocus
				/>
				<label htmlFor='age'>Age</label>
				<input
					name='age'
					type='number'
					onChange={handleChange}
					value={formValues.age}
				/>
				<label htmlFor='email'>Email</label>
				<input
					name='email'
					type='email'
					onChange={handleChange}
					value={formValues.email}
				/>
				<button type='submit'>Add friend</button>
			</StyledForm>
		</div>
	);
};

export default AddFriend;
