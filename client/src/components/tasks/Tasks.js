import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTasks } from '../../actions/taskActions';
import Preloader from '../layout/Preloader';
import Task from './Task';

const Tasks = ({ task: { tasks, loading }, getTasks }) => {
	useEffect(() => {
		getTasks();
	}, []);
	console.log(tasks);

	if (loading || tasks === null) {
		return <Preloader />;
	}
	return (
		<>
			<ul className="collection with-header">
				<li className="collection-header">Tasks</li>
				{!loading && tasks === null ? (
					<p>No tasks</p>
				) : (
					tasks?.map((task) => <Task key={task._id} task={task} />)
				)}
			</ul>
		</>
	);
};

const mapStateToProps = (state) => ({
	task: state.task,
});
export default connect(mapStateToProps, { getTasks })(Tasks);
