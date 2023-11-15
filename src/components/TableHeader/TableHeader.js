import PropTypes from 'prop-types';
import { TiArrowSortedUp, TiArrowSortedDown, TiArrowUnsorted } from 'react-icons/ti';
import { StyledThead, StyledTh, StyledTr, Cell } from './TableHeader.styled';
const TableHeader = ({ headersConfig, onSort, sortBy, sortOrder }) => {
	return (
		<StyledThead>
			<StyledTr>
				{headersConfig.map(header => (
					<StyledTh
						scope={'col'}
						key={header.label}
						onClick={() => header.isSortable && onSort(header.label)}
					>
						<Cell>
							{header.isSortable && (
								<>
									{header.label !== sortBy && (
										<div data-testid={'TiArrowUnsorted'}>
											<TiArrowUnsorted size={'2rem'} />
										</div>
									)}
									{header.label === sortBy && sortOrder === 'asc' && (
										<div data-testid={'TiArrowSortedUp'}>
											<TiArrowSortedUp size={'2rem'} />
										</div>
									)}
									{header.label === sortBy && sortOrder === 'desc' && (
										<div data-testid={'TiArrowSortedDown'}>
											<TiArrowSortedDown size={'2rem'} />
										</div>
									)}
								</>
							)}
							{header.title}
						</Cell>
					</StyledTh>
				))}
			</StyledTr>
		</StyledThead>
	);
};

TableHeader.propTypes = {
	headersConfig: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
			isSortable: PropTypes.bool,
		})
	).isRequired,
	onSort: PropTypes.func.isRequired,
	sortBy: PropTypes.string,
	sortOrder: PropTypes.string,
};

export default TableHeader;
