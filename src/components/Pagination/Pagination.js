import PropTypes from 'prop-types';
import { PaginationContainer, PaginationButton, Dots } from './Pagination.styled';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	const pageNumbers = () => {
		const pages = [];
		if (currentPage > 1) pages.push(currentPage - 1);
		pages.push(currentPage);
		if (currentPage < totalPages) pages.push(currentPage + 1);

		return pages;
	};

	return (
		<PaginationContainer>
			<PaginationButton disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
				Prev
			</PaginationButton>
			{currentPage > 2 && <Dots>...</Dots>}
			{pageNumbers().map(page => (
				<PaginationButton
					key={page}
					onClick={() => onPageChange(page)}
					isActive={currentPage === page}
				>
					{page}
				</PaginationButton>
			))}
			{currentPage < totalPages - 1 && <Dots>...</Dots>}
			<PaginationButton
				disabled={currentPage === totalPages}
				onClick={() => onPageChange(currentPage + 1)}
			>
				Next
			</PaginationButton>
		</PaginationContainer>
	);
};

Pagination.propTypes = {
	currentPage: PropTypes.number.isRequired,
	totalPages: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
