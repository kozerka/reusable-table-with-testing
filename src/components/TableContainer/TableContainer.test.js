import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import TableContainer from './TableContainer';
import { theme } from '../../styles/theme';
import { users } from '../../db/users';
import { headersConfig } from '../../utils/headersConfig';

describe('TableContainer Component', () => {
	const renderTableContainer = () => {
		render(
			<ThemeProvider theme={theme}>
				<TableContainer rows={users} headersConfig={headersConfig} />
			</ThemeProvider>
		);
	};

	it('renders table with provided rows and headers', async () => {
		renderTableContainer();

		const headerRow = screen.getAllByRole('row')[0];
		expect(within(headerRow).getByText('City')).toBeInTheDocument();
		const cityElements = screen.getAllByText('City');
		expect(cityElements.length).toBeGreaterThanOrEqual(1);
	});

	it('filters data based on filter criteria', () => {
		renderTableContainer();

		userEvent.selectOptions(screen.getByRole('combobox'), 'city');
		userEvent.type(screen.getByRole('textbox'), 'KnownCity');
		userEvent.click(screen.getByText('Filter'));
	});

	it('sorts data based on selected column', () => {
		renderTableContainer();
	});

	it('paginates data correctly', () => {
		renderTableContainer();
	});

	it('displays error text when no data matches filter criteria', async () => {
		renderTableContainer();
		userEvent.selectOptions(screen.getByRole('combobox'), 'city');
		userEvent.type(screen.getByRole('textbox'), 'NonExistingCity');
		userEvent.click(screen.getByText('Filter'));

		await waitFor(() => {
			expect(screen.getByText('No data found matching the search criteria.')).toBeInTheDocument();
		});
	});
});
