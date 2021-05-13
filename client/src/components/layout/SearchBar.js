import React, { useRef } from 'react';
import { filterLogs } from '../../actions/logActions';
import { connect } from 'react-redux';

const SearchBar = ({ filterLogs, filtered }) => {
	const text = useRef('');
	// useEffect(() => {
	// 	if (filtered === null) {
	// 		text.current.value = '';
	// 	}
	// });
	const onChange = (e) => {
		filterLogs(e.target.value);
	};
	return (
		<nav style={{ marginBottom: '30px' }} className="blue">
			<div className="nav-wrapper">
				<form>
					<div className="input-field">
						<input
							id="search"
							type="search"
							placeholder="Search Logs.."
							ref={text}
							onChange={onChange}
						/>
						<label className="label-icon" htmlFor="search">
							<i className="material-icons">search</i>
						</label>
						<i className="material-icons">close</i>
					</div>
				</form>
			</div>
		</nav>
	);
};
const mapStateToProps = (state) => ({
	filtered: state.filtered,
});
export default connect(mapStateToProps, { filterLogs })(SearchBar);
