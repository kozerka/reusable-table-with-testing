import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import TableHeader from './TableHeader';
import { theme } from '../../styles/theme';

describe('TableHeader Component', () => {
	const mockHeadersConfig = [{ label: 'name', title: 'Name', isSortable: true }];
	const mockOnSort = jest.fn();

	const setup = (sortBy = '', sortOrder = '') =>
		render(
			<ThemeProvider theme={theme}>
				<table>
					<thead>
						<TableHeader
							headersConfig={mockHeadersConfig}
							onSort={mockOnSort}
							sortBy={sortBy}
							sortOrder={sortOrder}
						/>
					</thead>
				</table>
			</ThemeProvider>
		);

	test('renders headers correctly based on headersConfig', () => {
		setup();
		mockHeadersConfig.forEach(header => {
			expect(screen.getByText(header.title)).toBeInTheDocument();
		});
	});

	test('calls onSort when a sortable header is clicked', () => {
		setup();
		const sortableHeader = screen.getByText('Name');
		userEvent.click(sortableHeader);
		expect(mockOnSort).toHaveBeenCalledWith('name');
	});

	test('displays the correct sorting icon based on sortBy and sortOrder', () => {
		setup('name', 'asc');
		expect(screen.getByTestId('TiArrowSortedUp')).toBeInTheDocument();

		setup('name', 'desc');
		expect(screen.getByTestId('TiArrowSortedDown')).toBeInTheDocument();
	});
});
