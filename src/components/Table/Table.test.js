import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import Table from './Table';
import { theme } from '../../styles/theme';

describe('Table Component', () => {
	const mockHeaders = [
		{ label: 'name', title: 'Name', isSortable: true },
		{ label: 'age', title: 'Age', isSortable: false },
	];
	const mockRows = [
		{ name: 'James', age: 15 },
		{ name: 'Alice', age: 22 },
	];
	const mockOnSort = jest.fn();

	const renderComponent = (props = {}) =>
		render(
			<ThemeProvider theme={theme}>
				<Table headersConfig={mockHeaders} rows={mockRows} onSort={mockOnSort} {...props} />
			</ThemeProvider>
		);

	test('renders the correct number of rows and headers', () => {
		renderComponent();
		expect(screen.getAllByRole('row').length).toBe(mockRows.length + 1);
		expect(screen.getAllByRole('columnheader').length).toBe(mockHeaders.length);
	});

	test('calls onSort when a sortable header is clicked', () => {
		renderComponent();
		const nameHeader = screen.getByText('Name');
		userEvent.click(nameHeader);
		expect(mockOnSort).toHaveBeenCalledWith('name');
	});
});
