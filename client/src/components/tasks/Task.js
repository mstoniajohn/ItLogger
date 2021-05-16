import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteTask, setCurrent } from '../../actions/taskActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const Task = ({ task, deleteTask, setCurrent }) => {
	console.log(task);
	const onDelete = () => {
		deleteTask(task._id);
		M.toast({ html: 'log deleted' });
	};
	return (
		<li className="collection-item">
			<div>
				<a
					href="#edit-task-modal"
					className={`modal-trigger ${
						task?.reminder ? 'red-text' : 'blue-text'
					}`}
					onClick={() => setCurrent(task)}
				>
					{task?.text}
				</a>
				<br />
				<span className="grey-text">
					<p>{task?.text}</p>

					<Moment format="MMM Do YYYY, h:mm:ss a">{task?.date}</Moment>
				</span>
				<a onClick={onDelete} href="#!" className="secondary-content">
					<i className="material-icons grey-text">delete</i>
				</a>
			</div>
		</li>
	);
};

Task.propTypes = {
	task: PropTypes.object.isRequired,
	deleteTask: PropTypes.func.isRequired,
	setCurrent: PropTypes.func.isRequired,
};
export default connect(null, { deleteTask, setCurrent })(Task);
