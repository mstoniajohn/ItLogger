import {
	GET_TASKS,
	ADD_TASK,
	DELETE_TASK,
	// UPDATE_TASK,
	TASKS_ERROR,
	SET_CURRENT,
	CLEAR_CURRENT,
	SET_LOADING,
} from './types';

// get tasts

export const getTasks = () => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch('/api/tasks');
		const data = await res.json();

		dispatch({
			type: GET_TASKS,
			payload: data,
		});
	} catch (err) {
		dispatch({ type: TASKS_ERROR, payload: err.response?.statusText });
	}
};

// Add task

export const addTask = (task) => async (dispatch) => {
	try {
		setLoading();

		const config = {
			method: 'POST',
			body: JSON.stringify(task),
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const res = await fetch('/api/tasks', config);
		const data = await res.json();
		dispatch({ type: ADD_TASK, payload: data });
	} catch (err) {
		dispatch({ type: TASKS_ERROR, payload: err.response.statusText });
	}
};

// Delete logs from erver

export const deleteTask = (id) => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch(`/api/tasks/${id}`, { method: 'DELETE' });

		dispatch({ type: DELETE_TASK, payload: id });
	} catch (err) {
		dispatch({ type: TASKS_ERROR, payload: err.response.statusText });
	}
};

// set current from
export const setCurrent = (task) => {
	return {
		type: SET_CURRENT,
		payload: task,
	};
};
// clear current log
export const clearCurrent = (task) => {
	return {
		type: CLEAR_CURRENT,
	};
};
// export const getLogs = () => async (dispatch) => {};

export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
