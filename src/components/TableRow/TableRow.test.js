import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import TableRow from './TableRow';
import { theme } from '../../styles/theme';

describe('TableRow Component', () => {
	const mockHeadersConfig = [{ label: 'No' }, { label: 'firstName' }];
	const mockRow = {
		id: 1,
		firstName: 'John',
	};

	const setup = () => {
		render(
			<ThemeProvider theme={theme}>
				<table>
					<tbody>
						<TableRow row={mockRow} headersConfig={mockHeadersConfig} />
					</tbody>
				</table>
			</ThemeProvider>
		);
	};

	test('renders row data correctly based on headersConfig', () => {
		setup();

		expect(screen.getByText(mockRow.id.toString())).toBeInTheDocument();
		expect(screen.getByText(mockRow.firstName)).toBeInTheDocument();
	});
});
