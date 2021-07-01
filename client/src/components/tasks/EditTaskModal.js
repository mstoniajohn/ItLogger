import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateTask } from '../../actions/taskActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditTaskModal = ({ updateTask, current }) => {
	const [text, setText] = useState('');
	const [reminder, setReminder] = useState(false);
	const [day, setDay] = useState('');
	useEffect(() => {
		if (current) {
			setText(current.text);
			setReminder(current.reminder);
			setDay(current.day);
		}
	}, [current]);

	const onSubmit = () => {
		if (text === '') {
			M.toast({ html: 'Please enter a message and tech' });
		} else {
			const updTask = {
				_id: current._id,
				text,
				reminder,
				day,
			};
			updateTask(updTask);
			M.toast({ html: `Log added by ${day}` });

			// Clear Fields
			setText('');
			setReminder('');
			setDay(false);
		}
	};

	return (
		<div id="edit-task-modal" className="modal" style={modalStyle}>
			<div className="modal-content">
				<h4>Enter Task</h4>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="message"
							value={text}
							onChange={(e) => setText(e.target.value)}
						/>
						{/* <label htmlFor="message" className="active">
							Log Message
						</label> */}
					</div>
				</div>

				<div className="row">
					<div className="input-field">
						<input
							type="date"
							name="day"
							value={day}
							onChange={(e) => setDay(e.target.value)}
						/>
						<label htmlFor="message" className="active">
							Task Date
						</label>
					</div>
				</div>

				<div className="row">
					<div className="input-field">
						<p>
							<label>
								<input
									type="checkbox"
									className="filled-in"
									checked={reminder}
									value={reminder}
									onChange={(e) => setReminder(!reminder)}
								/>
								<span>Reminder</span>
							</label>
						</p>
					</div>
				</div>
			</div>
			<div className="modal-footer">
				<a
					href="#!"
					onClick={onSubmit}
					className="modal-close waves-effect waves-green btn"
				>
					Enter
				</a>
			</div>
		</div>
	);
};

const modalStyle = {
	width: '75%',
	height: '75%',
};
EditTaskModal.propTypes = {
	updateLog: PropTypes.func.isRequired,
	current: PropTypes.object,
};
const mapStateToProps = (state) => ({
	current: state.task.current,
});
export default connect(mapStateToProps, { updateTask })(EditTaskModal);
