import styled from 'styled-components';

export const StyledForm = styled.form`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	width: 25%;
	& input {
		height: 30px;
		border-radius: 10px;
		padding-left: 8px;
		margin-bottom: 10px;
		outline: none;
	}
`;
