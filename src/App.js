import './App.css';
import TableContainer from './components/TableContainer';
import { users } from './db/users';
import { headersConfig } from './utils/headersConfig';

function App() {
	return (
		<div>
			<TableContainer rows={users} headersConfig={headersConfig} />
		</div>
	);
}

export default App;
