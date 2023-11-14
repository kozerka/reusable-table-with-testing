import { useState } from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onFilterChange, filterOptions }) => {
	const [filter, setFilter] = useState({ field: '', value: '' });
	const [error, setError] = useState('');

	const handleChange = e => {
		const { name, value } = e.target;
		setFilter(prev => ({ ...prev, [name]: value }));
		setError('');
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!filter.field || !filter.value) {
			setError('Please select filter option and enter a value for filtering');
		} else {
			onFilterChange(filter);
		}
	};

	const resetFilter = () => {
		setFilter({ field: '', value: '' });
		onFilterChange({ field: '', value: '' });
		setError('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<select name={'field'} onChange={handleChange} value={filter.field}>
				<option value={''}>Select filter option</option>
				{filterOptions.map(option => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			<input name={'value'} onChange={handleChange} value={filter.value} />
			<button type={'submit'}>Filter</button>
			<button type={'button'} onClick={resetFilter}>
				Reset
			</button>
			{error && <div style={{ color: 'red' }}>{error}</div>}
		</form>
	);
};

Filter.propTypes = {
	onFilterChange: PropTypes.func.isRequired,
	filterOptions: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default Filter;
