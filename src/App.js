import { TableContainer } from './components';
import { users } from './db/users';
import { headersConfig } from './utils/headersConfig';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	margin: 10%;
`;
function App() {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<TableContainer rows={users} headersConfig={headersConfig} />
			</Container>
		</ThemeProvider>
	);
}

export default App;
