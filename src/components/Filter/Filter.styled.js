import styled from 'styled-components';
const StyledForm = styled.form`
	display: flex;
	gap: 10px;
	align-items: center;
	margin-bottom: 20px;
	height: 40px;
`;

const StyledSelect = styled.select`
	padding: 10px;
	height: 40px;
	border: ${props => props.theme.border};
	border-radius: 5px;
`;

const StyledInput = styled.input`
	border: ${props => props.theme.border};
	border-radius: 5px;

	padding: 0.72rem 1rem;
`;

const StyledButton = styled.button`
	align-items: center;
	height: 40px;
	padding: 0.5rem 3rem;
	text-transform: uppercase;
	font-weight: 700;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	background-color: ${props => props.theme.colorsForButtons.primary};
	color: ${props => props.theme.colors.text};

	&:disabled {
		color: grey;
		cursor: not-allowed;
	}

	&:hover:not(:disabled) {
		background-color: ${props => props.theme.colorsForButtons.accent};
		color: ${props => props.theme.colors.neutral};
	}
`;

const ErrorText = styled.div`
	color: ${props => props.theme.colors.neutral};
	background-color: ${props => props.theme.colors.error};

	height: 40px;
	line-height: 40px;
	padding: 0 2rem;
	text-align: center;
	font-size: 700;
	border: none;
	border-radius: 5px;
`;

export { StyledForm, StyledSelect, StyledInput, StyledButton, ErrorText };
