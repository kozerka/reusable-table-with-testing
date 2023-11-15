import { useState } from 'react';
const useSort = (data, config) => {
	const [sortOrder, setSortOrder] = useState(null);
	const [sortBy, setSortBy] = useState(null);

	const setSortColumn = label => {
		if (sortBy && label !== sortBy) {
			setSortOrder('asc');
			setSortBy(label);
			return;
		}
		if (sortOrder === null) {
			setSortOrder('asc');
			setSortBy(label);
		} else if (sortOrder === 'asc') {
			setSortOrder('desc');
			setSortBy(label);
		} else if (sortOrder === 'desc') {
			setSortOrder(null);
			setSortBy(null);
		}
	};

	let sortedData = [...data];
	if (sortOrder && sortBy) {
		const { sortValue } = config.find(column => column.label === sortBy);
		sortedData = [...data].sort((a, b) => {
			const aValue = sortValue(a) !== undefined ? sortValue(a) : '';
			const bValue = sortValue(b) !== undefined ? sortValue(b) : '';
			const reverseOrder = sortOrder === 'asc' ? 1 : -1;
			const isDatePattern = /^\d{1,4}-\d{1,2}-\d{1,2}$/;
			if (isDatePattern.test(aValue) && isDatePattern.test(bValue)) {
				const [aYear] = aValue.split('-');
				const [bYear] = bValue.split('-');
				return (parseInt(aYear, 10) - parseInt(bYear, 10)) * reverseOrder;
			}
			if (typeof aValue === 'number' && typeof bValue === 'number') {
				return (aValue - bValue) * reverseOrder;
			}
			if (typeof aValue === 'string' && typeof bValue === 'string') {
				return aValue.localeCompare(bValue) * reverseOrder;
			}
			return 0;
		});
	}

	return {
		sortOrder,
		sortBy,
		setSortColumn,
		sortedData,
	};
};

export default useSort;
