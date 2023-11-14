import styled from 'styled-components';
const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
`;

const PaginationButton = styled.button`
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;
	margin: 0.2rem;
	margin-bottom: 1rem;
	border: none;
	border-radius: 5px;
	text-transform: uppercase;
	cursor: pointer;

	background-color: ${props =>
		props.isActive ? props.theme.colorsForButtons.secondary : props.theme.colorsForButtons.primary};

	color: ${props => props.theme.colors.text};

	&:disabled {
		background-color: ${props => props.theme.colorsForButtons.neutral};
		cursor: not-allowed;
	}

	&:hover:not(:disabled) {
		background-color: ${props => props.theme.colorsForButtons.accent};
		color: ${props => props.theme.colors.neutral};
	}

	${props =>
		props.currentPage &&
		`
    font-weight: bold;
    border-color: ${props.theme.colors.accent};`}
`;

const Dots = styled.span`
	margin: 0 1rem;
	color: ${props => props.theme.colors.text};
`;

export { PaginationContainer, PaginationButton, Dots };
