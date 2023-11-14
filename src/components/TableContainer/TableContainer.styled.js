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

export { PaginationInfo, Container };
