import PropTypes from 'prop-types';

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
		<tr>
			{headersConfig.map(header => (
				<td key={header.label}>{getRowValue(header, row)}</td>
			))}
		</tr>
	);
};

TableRow.propTypes = {
	row: PropTypes.object.isRequired,
	headersConfig: PropTypes.array.isRequired,
};

export default TableRow;
