import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	// Funkcja do generowania zakresu stron
	const pageNumbers = () => {
		const pages = [];
		if (currentPage > 1) pages.push(currentPage - 1);
		pages.push(currentPage);
		if (currentPage < totalPages) pages.push(currentPage + 1);

		return pages;
	};

	return (
		<div>
			<button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
				Prev
			</button>
			{currentPage > 2 && <span>...</span>}
			{pageNumbers().map(page => (
				<button
					key={page}
					onClick={() => onPageChange(page)}
					style={{
						fontWeight: currentPage === page ? 'bold' : 'normal',
					}}
				>
					{page}
				</button>
			))}
			{currentPage < totalPages - 1 && <span>...</span>}
			<button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
				Next
			</button>
		</div>
	);
};

Pagination.propTypes = {
	currentPage: PropTypes.number.isRequired,
	totalPages: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
