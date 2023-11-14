import styled from 'styled-components';

const StyledThead = styled.thead`
	background-color: ${props => props.theme.colors.primary};
	color: white;
`;

const StyledTh = styled.th`
	align-items: center;
	padding: 12px 15px;
	text-align: left;
	font-weight: bold;
`;
const StyledTr = styled.tr`
	align-items: center;
`;

const Cell = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

export { StyledThead, StyledTh, StyledTr, Cell };
