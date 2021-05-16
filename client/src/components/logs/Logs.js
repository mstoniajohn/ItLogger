import React, { useEffect } from 'react';
import Preloader from '../layout/Preloader';
import LogItem from './LogItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';
const Logs = ({ log: { logs, loading, error, filtered }, getLogs }) => {
	useEffect(() => {
		getLogs();
		// eslint-disable-next-line
	}, []);
	// console.log(logs);

	if (loading || logs === null) {
		return <Preloader />;
	}
	return (
		<>
			<ul className="collection with-header">
				<li className="collection-header">Logs</li>
				{!loading && logs === null ? (
					<p>No Logs</p>
				) : filtered !== null ? (
					filtered.map((log) => <LogItem key={log._id} log={log} />)
				) : (
					logs?.map((log) => <LogItem key={log._id} log={log} />)
				)}
			</ul>
		</>
	);
};
Logs.propTypes = {
	logs: PropTypes.object.isRequired,
	getLogs: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
	log: state.log,
});
export default connect(mapStateToProps, { getLogs })(Logs);
