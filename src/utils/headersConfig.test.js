import { headersConfig } from './headersConfig';

const sampleData = {
	id: 1,
	firstName: 'John',
	lastName: 'Doe',
	birthDate: '1990-01-01',
	address: {
		city: 'New York',
	},
	email: 'john@example.com',
	phone: '123-456-7890',
	gender: 'Male',
};

describe('headersConfig', () => {
	it('should have the expected properties for each header', () => {
		headersConfig.forEach(header => {
			expect(header).toHaveProperty('label');
			expect(header).toHaveProperty('title');
			expect(header).toHaveProperty('sortValue');
			expect(header).toHaveProperty('isSortable');
			expect(header).toHaveProperty('isFilterable');
		});
	});

	it('should return correct sort values', () => {
		headersConfig.forEach(header => {
			const sortValue = header.sortValue(sampleData);
			switch (header.label) {
				case 'No':
					expect(sortValue).toBe(1);
					break;
				case 'firstName':
					expect(sortValue).toBe('John');
					break;
				case 'lastName':
					expect(sortValue).toBe('Doe');
					break;
				case 'date':
					expect(sortValue).toBe('1990-01-01');
					break;
				default:
			}
		});
	});
});
