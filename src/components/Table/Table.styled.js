import styled from 'styled-components';

const StyledTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	background-color: white;
	margin: 1rem 0;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	border-radius: 1rem;
	color: ${props => props.theme.colors.text};
	overflow: hidden;
`;
const StyledTbody = styled.tbody`
	tr:not(:last-child) {
		border-bottom: 2px solid ${props => props.theme.colors.accent};
	}
`;

export { StyledTable, StyledTbody };
