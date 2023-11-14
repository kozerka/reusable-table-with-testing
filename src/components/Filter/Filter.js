import { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledForm, StyledSelect, StyledInput, StyledButton, ErrorText } from './Filter.styled';

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
		<StyledForm onSubmit={handleSubmit}>
			<StyledSelect name={'field'} onChange={handleChange} value={filter.field}>
				<option value={''}>Select filter option</option>
				{filterOptions.map(option => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</StyledSelect>
			<StyledInput name={'value'} onChange={handleChange} value={filter.value} />
			<StyledButton type={'submit'}>Filter</StyledButton>
			<StyledButton type={'button'} onClick={resetFilter}>
				Reset
			</StyledButton>
			{error && <ErrorText>{error}</ErrorText>}
		</StyledForm>
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
