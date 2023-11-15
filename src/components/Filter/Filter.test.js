import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Filter from './Filter';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('Filter component', () => {
	const mockOnFilterChange = jest.fn();
	const filterOptions = [{ value: 'city', label: 'City' }];

	const setup = () => {
		render(
			<ThemeProvider theme={theme}>
				<Filter onFilterChange={mockOnFilterChange} filterOptions={filterOptions} />
			</ThemeProvider>
		);
	};

	beforeEach(setup);

	test('renders filter options correctly', () => {
		filterOptions.forEach(option => {
			expect(screen.getByRole('option', { name: option.label })).toBeInTheDocument();
		});
	});

	test('calls onFilterChange with correct values when form is submitted', () => {
		userEvent.selectOptions(screen.getByRole('combobox'), 'city');
		userEvent.type(screen.getByRole('textbox'), 'New York');
		userEvent.click(screen.getByRole('button', { name: 'Filter' }));
		expect(mockOnFilterChange).toHaveBeenCalledWith({ field: 'city', value: 'New York' });
	});

	test('displays error when filter criteria are incomplete', async () => {
		userEvent.click(screen.getByRole('button', { name: 'Filter' }));

		await waitFor(() => {
			expect(
				screen.getByText('Please select filter option and enter a value for filtering')
			).toBeInTheDocument();
		});
	});

	test('resets filter when reset button is clicked', async () => {
		userEvent.click(screen.getByRole('button', { name: 'Reset' }));

		await waitFor(() => {
			expect(screen.getByRole('combobox')).toHaveValue('');
			expect(screen.getByRole('textbox')).toHaveValue('');
		});
	});
});
