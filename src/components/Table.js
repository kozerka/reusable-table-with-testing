import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table = ({ headersConfig, rows, onSort, sortBy, sortOrder }) => {
	return (
		<div>
			<table>
				<TableHeader
					headersConfig={headersConfig}
					onSort={onSort}
					sortBy={sortBy}
					sortOrder={sortOrder}
				/>
				<tbody>
					{rows.map((row, rowIndex) => (
						<TableRow key={rowIndex} row={row} headersConfig={headersConfig} />
					))}
				</tbody>
			</table>
		</div>
	);
};

Table.propTypes = {
	headersConfig: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
			isSortable: PropTypes.bool,
		})
	).isRequired,
	rows: PropTypes.arrayOf(PropTypes.object).isRequired,
	onSort: PropTypes.func.isRequired,
	sortBy: PropTypes.string,
	sortOrder: PropTypes.string,
};

export default Table;
