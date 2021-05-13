import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
	useEffect(() => {
		getTechs();
	}, []);

	return (
		!loading &&
		techs !== null &&
		techs.map((tech) => (
			<option key={tech._id} value={`${tech.firstName} ${tech.lastName}`}>
				{tech.firstName} {tech.lastName}
			</option>
		))
	);
};

TechSelectOptions.propTypes = {
	tech: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
	tech: state.tech,
});
export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
