import React, { useState } from 'react';

// import TechSelectOptions from '../techs/TechSelectOptions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTask } from '../../actions/taskActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTaskModal = ({ addTask }) => {
	const [text, setText] = useState('');
	const [reminder, setReminder] = useState(false);
	const [day, setDay] = useState('');

	const onSubmit = () => {
		if (text === '') {
			M.toast({ html: 'Please enter a message' });
		} else {
			const newTask = {
				text,
				reminder,
				day,
			};
			addTask(newTask);

			M.toast({ html: `Task added` });

			// Clear Fields
			setText('');
			setDay('');
			setReminder(false);
		}
	};

	return (
		<div id="add-task-modal" className="modal" style={modalStyle}>
			<div className="modal-content">
				<h4>Enter System Log</h4>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="text"
							value={text}
							onChange={(e) => setText(e.target.value)}
						/>
						<label htmlFor="message" className="active">
							Task Message
						</label>
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
AddTaskModal.propTypes = {
	addTask: PropTypes.func.isRequired,
};

export default connect(null, { addTask })(AddTaskModal);
