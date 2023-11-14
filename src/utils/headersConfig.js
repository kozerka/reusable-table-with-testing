export const headersConfig = [
	{
		label: 'No',
		title: 'No.',
		sortValue: item => item.id,
		isSortable: true,
		isFilterable: false,
	},
	{
		label: 'firstName',
		title: (
			<>
				First
				<br />
				Name
			</>
		),
		sortValue: item => item.firstName,
		isSortable: true,
		isFilterable: true,
	},
	{
		label: 'lastName',
		title: (
			<>
				Last
				<br />
				Name
			</>
		),
		sortValue: item => item.lastName,
		isSortable: true,
		isFilterable: true,
	},
	{
		label: 'date',
		title: (
			<>
				Date
				<br />
				of birth
			</>
		),
		sortValue: item => item.birthDate,
		isSortable: true,
		isFilterable: false,
	},
	{
		label: 'city',
		title: 'City',
		sortValue: item => item.address.city,
		isSortable: true,
		isFilterable: true,
	},
	{
		label: 'email',
		title: 'Email',
		sortValue: item => item.email,
		isSortable: true,
		isFilterable: true,
	},
	{
		label: 'phone',
		title: 'Phone',
		sortValue: item => item.phone,
		isSortable: true,
		isFilterable: true,
	},
	{
		label: 'gender',
		title: 'Gender',
		sortValue: item => item.gender,
		isSortable: true,
		isFilterable: true,
	},
];
