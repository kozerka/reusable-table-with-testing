import styled from 'styled-components';

const PaginationInfo = styled.div`
	display: flex;
	color: ${props => props.theme.colors.text};
	margin: 1rem 0;
	justify-content: center;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const ErrorText = styled.div`
	color: ${props => props.theme.colors.neutral};
	background-color: ${props => props.theme.colors.accent};

	height: 4rem;
	line-height: 4rem;
	padding: 0 2rem;
	text-align: center;
	font-size: 700;
	border: none;
	margin-top: 1rem;
	border-radius: 5px;
	color: ${props => props.theme.colors.text};
`;

export { PaginationInfo, Container, ErrorText };
