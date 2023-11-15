import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useSort from './useSort';
import PropTypes from 'prop-types';

function TestComponent({ data, config }) {
	const { sortedData, setSortColumn } = useSort(data, config);

	return (
		<div>
			{sortedData.map((item, index) => (
				<button key={index} onClick={() => setSortColumn('content')}>
					{typeof item.content === 'object' ? item.content.subProperty : item.content}
				</button>
			))}
		</div>
	);
}

describe('useSort Hook', () => {
	const mockData = [{ content: 'B' }, { content: 'A' }, { content: 'C' }];
	const mockConfig = [{ label: 'content', sortValue: item => item.content }];

	test('initial state', () => {
		render(<TestComponent data={mockData} config={mockConfig} />);
		expect(screen.getByText('B')).toBeInTheDocument();
		expect(screen.getByText('A')).toBeInTheDocument();
		expect(screen.getByText('C')).toBeInTheDocument();
	});

	test('sorting functionality - strings', async () => {
		render(<TestComponent data={mockData} config={mockConfig} />);
		userEvent.click(screen.getByText('A'));

		await waitFor(() => {
			const buttons = screen.getAllByRole('button');
			expect(buttons.map(button => button.textContent)).toEqual(['A', 'B', 'C']);
		});

		userEvent.click(screen.getByText('A'));

		await waitFor(() => {
			const buttons = screen.getAllByRole('button');
			expect(buttons.map(button => button.textContent)).toEqual(['C', 'B', 'A']);
		});
	});

	test('sorting functionality - numbers', async () => {
		const numberData = [{ content: 2 }, { content: 3 }, { content: 1 }];
		const numberConfig = [{ label: 'content', sortValue: item => item.content }];

		render(<TestComponent data={numberData} config={numberConfig} />);
		userEvent.click(screen.getByText('1'));

		await waitFor(() => {
			const buttons = screen.getAllByRole('button');
			expect(buttons.map(button => button.textContent)).toEqual(['1', '2', '3']);
		});

		userEvent.click(screen.getByText('1'));

		await waitFor(() => {
			const buttons = screen.getAllByRole('button');
			expect(buttons.map(button => button.textContent)).toEqual(['3', '2', '1']);
		});
	});
	test('sorting functionality - dates', async () => {
		const dateData = [
			{ content: '2021-01-01' },
			{ content: '2020-01-01' },
			{ content: '2022-01-01' },
		];
		const dateConfig = [{ label: 'content', sortValue: item => item.content }];

		render(<TestComponent data={dateData} config={dateConfig} />);
		userEvent.click(screen.getByText('2020-01-01'));

		await waitFor(() => {
			const buttons = screen.getAllByRole('button');
			expect(buttons.map(button => button.textContent)).toEqual([
				'2020-01-01',
				'2021-01-01',
				'2022-01-01',
			]);
		});

		userEvent.click(screen.getByText('2020-01-01'));

		await waitFor(() => {
			const buttons = screen.getAllByRole('button');
			expect(buttons.map(button => button.textContent)).toEqual([
				'2022-01-01',
				'2021-01-01',
				'2020-01-01',
			]);
		});
	});
	test('resetting sort order and sort by', async () => {
		render(<TestComponent data={mockData} config={mockConfig} />);
		const button = screen.getByText('A');

		userEvent.click(button);
		userEvent.click(button);
		userEvent.click(button);

		await waitFor(() => {
			const buttons = screen.getAllByRole('button');
			expect(buttons.map(button => button.textContent)).toEqual(['B', 'A', 'C']);
		});
	});
	test('sorting functionality - equal date values', async () => {
		const dateData = [
			{ content: '2021-01-01' },
			{ content: '2021-01-01' },
			{ content: 'NonDateValue' },
		];
		render(<TestComponent data={dateData} config={mockConfig} />);

		const dateButtons = screen.getAllByText('2021-01-01');
		userEvent.click(dateButtons[0]);

		await waitFor(() => {
			const buttons = screen.getAllByRole('button');
			expect(buttons.map(button => button.textContent)).toEqual([
				'2021-01-01',
				'2021-01-01',
				'NonDateValue',
			]);
		});
	});

	test('Sorting in ascending order', async () => {
		render(<TestComponent data={mockData} config={mockConfig} />);
		userEvent.click(screen.getByText('B'));

		await waitFor(() => {
			const buttons = screen.getAllByRole('button');
			expect(buttons.map(button => button.textContent)).toEqual(['A', 'B', 'C']);
		});
	});
});

TestComponent.propTypes = {
	data: PropTypes.array.isRequired,
	config: PropTypes.array.isRequired,
};
