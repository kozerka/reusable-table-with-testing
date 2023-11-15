import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from './Pagination';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('Pagination Component', () => {
	const mockOnPageChange = jest.fn();

	const renderPagination = (currentPage, totalPages) => {
		render(
			<ThemeProvider theme={theme}>
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={mockOnPageChange}
				/>
			</ThemeProvider>
		);
	};

	test('should render pagination buttons correctly', () => {
		renderPagination(2, 5);
		expect(screen.getByText('Prev')).toBeInTheDocument();
		expect(screen.getByText('1')).toBeInTheDocument();
		expect(screen.getByText('2')).toBeInTheDocument();
		expect(screen.getByText('3')).toBeInTheDocument();
		expect(screen.getByText('Next')).toBeInTheDocument();
	});

	test('should call onPageChange with the right page number when a page button is clicked', () => {
		renderPagination(2, 5);
		userEvent.click(screen.getByText('3'));
		expect(mockOnPageChange).toHaveBeenCalledWith(3);
	});
	test('should call onPageChange with the previous page number when Prev is clicked', () => {
		renderPagination(3, 5);
		userEvent.click(screen.getByText('Prev'));
		expect(mockOnPageChange).toHaveBeenCalledWith(2);
	});

	test('should call onPageChange with the next page number when Next is clicked', () => {
		renderPagination(2, 5);
		userEvent.click(screen.getByText('Next'));
		expect(mockOnPageChange).toHaveBeenCalledWith(3);
	});

	test('should disable Prev button on the first page', () => {
		renderPagination(1, 5);
		expect(screen.getByText('Prev')).toBeDisabled();
	});

	test('should disable Next button on the last page', () => {
		renderPagination(5, 5);
		expect(screen.getByText('Next')).toBeDisabled();
	});
	test('displays dots before page numbers when current page is greater than 2', () => {
		renderPagination(3, 5);
		const allDots = screen.getAllByText('...');
		expect(allDots[0]).toBeInTheDocument();
	});
	test('displays dots after page numbers when current page is less than totalPages - 1', () => {
		renderPagination(1, 5);
		const allDots = screen.getAllByText('...');
		expect(allDots[allDots.length - 1]).toBeInTheDocument();
	});
});
