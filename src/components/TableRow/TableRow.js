import PropTypes from 'prop-types';
import { StyledTd, StyledTr } from './TableRow.styled';
const TableRow = ({ row, headersConfig }) => {
	const getRowValue = (header, row) => {
		switch (header.label) {
			case 'No':
				return row.id;
			case 'firstName':
				return row.firstName;
			case 'lastName':
				return row.lastName;
			case 'date':
				return row.birthDate;
			case 'city':
				return row.address.city;
			case 'email':
				return row.email;
			case 'phone':
				return row.phone;
			case 'gender':
				return row.gender;
			default:
				return '';
		}
	};

	return (
		<StyledTr>
			{headersConfig.map(header => (
				<StyledTd key={header.label}>{getRowValue(header, row)}</StyledTd>
			))}
		</StyledTr>
	);
};

TableRow.propTypes = {
	row: PropTypes.object.isRequired,
	headersConfig: PropTypes.array.isRequired,
};

export default TableRow;
