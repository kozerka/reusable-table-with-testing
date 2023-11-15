import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

describe('App Component', () => {
	const renderApp = () =>
		render(
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		);

	test('renders the TableContainer component', () => {
		renderApp();
		expect(screen.getByTestId('table-container')).toBeInTheDocument();
	});
});
