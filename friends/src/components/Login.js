import axios from 'axios';
import { useState } from 'react';
import { StyledForm } from '../styledComponents/StyledForm';

const initialFormState = {
	username: '',
	password: '',
};
const DEV_CREDENTIALS = { username: 'Lambda School', password: 'i<3Lambd4' };

const Login = (props) => {
	const [formState, setFormState] = useState(initialFormState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormState({ ...formState, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// make the axios request
		// axios.post('http://localhost:5000/api/login', formState);
		axios
			.post('http://localhost:5000/api/login', DEV_CREDENTIALS)
			.then((res) => {
				localStorage.setItem('token', JSON.stringify(res.data.payload));
				props.history.push('/friends');
			})
			.catch((err) => {
				console.log('err: ', err);
			});
	};

	return (
		<div>
			<StyledForm onSubmit={handleSubmit}>
				<input
					name='username'
					type='text'
					placeholder='username'
					autoFocus
					value={formState.username}
					onChange={handleChange}
				/>
				<input
					name='password'
					type='password'
					placeholder='password'
					value={formState.password}
					onChange={handleChange}
				/>
				<button type='submit'>login</button>
			</StyledForm>
		</div>
	);
};

export default Login;
