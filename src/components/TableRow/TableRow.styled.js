import styled from 'styled-components';

const StyledTd = styled.td`
	padding: 1rem 2.4rem;
	text-align: center;
`;

const StyledTr = styled.tr`
	&:hover {
		background-color: ${props => props.theme.colors.accent};
	}
`;

export { StyledTd, StyledTr };
