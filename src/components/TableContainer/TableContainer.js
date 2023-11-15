import { useState } from 'react';
import Table from '../Table/Table';
import { Pagination } from '..';
import PropTypes from 'prop-types';
import useSort from '../../hooks/useSort';
import Filter from '../Filter/Filter';
import { PaginationInfo, Container, ErrorText } from './TableContainer.styled';

const TableContainer = ({ headersConfig, rows }) => {
	const { sortOrder, sortBy, setSortColumn, sortedData } = useSort(rows, headersConfig);
	const rowsPerPage = 8;
	const [currentPage, setCurrentPage] = useState(1);
	const [filter, setFilter] = useState({ field: '', value: '' });

	const filteredData = sortedData.filter(row => {
		if (!filter.field) return true;
		if (filter.field === 'city') {
			return row.address.city.toLowerCase().includes(filter.value.toLowerCase());
		} else {
			return row[filter.field].toString().toLowerCase().includes(filter.value.toLowerCase());
		}
	});

	const filteredTotalPages = Math.ceil(filteredData.length / rowsPerPage);
	const indexOfLastRow = Math.min(filteredData.length, currentPage * rowsPerPage);
	const indexOfFirstRow = indexOfLastRow - rowsPerPage;

	const filterOptions = headersConfig
		.filter(header => header.isFilterable)
		.map(header => ({ value: header.label, label: header.title }));

	return (
		<Container data-testid={'table-container'}>
			<Filter onFilterChange={setFilter} filterOptions={filterOptions} />
			{filteredData.length > 0 ? (
				<Table
					headersConfig={headersConfig}
					rows={filteredData.slice(indexOfFirstRow, indexOfLastRow)}
					onSort={setSortColumn}
					sortBy={sortBy}
					sortOrder={sortOrder}
				/>
			) : (
				<ErrorText>No data found matching the search criteria.</ErrorText>
			)}
			{filteredTotalPages > 1 && (
				<>
					<Pagination
						currentPage={currentPage}
						totalPages={filteredTotalPages}
						onPageChange={page => setCurrentPage(page)}
					/>
					<PaginationInfo>
						Displaying {indexOfFirstRow + 1} - {indexOfLastRow} of {filteredData.length} users
					</PaginationInfo>
				</>
			)}
		</Container>
	);
};

TableContainer.propTypes = {
	headersConfig: PropTypes.array.isRequired,
	rows: PropTypes.array.isRequired,
};

export default TableContainer;
