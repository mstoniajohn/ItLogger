import React, { useEffect } from 'react';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
	console.log(techs);

	useEffect(() => {
		getTechs();
		// eslint-disable-next-line
	}, []);

	return (
		<div id="tech-list-modal" className="modal">
			<div className="modal-content">
				<h4>Tech List</h4>
				<ul className="collection">
					{!loading &&
						techs !== null &&
						techs?.map((tech) => <TechItem id={tech._id} tech={tech} />)}
				</ul>
			</div>
		</div>
	);
};

TechListModal.propTypes = {
	getTechs: PropTypes.func.isRequired,
	tech: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
	tech: state.tech,
	// techs: state.techs,

	loading: state.loading,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
