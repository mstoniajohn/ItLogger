import {
	GET_LOGS,
	SET_LOADING,
	LOGS_ERROR,
	ADD_LOG,
	DELETE_LOG,
	UPDATE_LOG,
	FILTER_LOGS,
	SET_CURRENT,
	CLEAR_CURRENT,
} from './types';
// get logs from server.js",
import axios from 'axios';

// export const getLogs = () => {
// 	return async (dispatch) => {
// 		setLoading();

// 		const res = await fetch('/api/logs');
// 		const data = await res.json();

// 		dispatch({
// 			type: GET_LOGS,
// 			payload: data,
// 		});
// 	};
// };
export const getLogs = () => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch('/api/logs');
		const data = await res.json();

		dispatch({
			type: GET_LOGS,
			payload: data,
		});
	} catch (err) {
		dispatch({ type: LOGS_ERROR, payload: err.response.statusText });
	}
};

export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};

export const addLog = (log) => async (dispatch) => {
	try {
		setLoading();

		const config = {
			method: 'POST',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const res = await fetch('/api/logs', config);
		const data = await res.json();
		dispatch({ type: ADD_LOG, payload: data });
	} catch (err) {
		dispatch({ type: LOGS_ERROR, payload: err.response.statusText });
	}
};

// Delete logs from erver

export const deleteLog = (id) => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch(`/api/logs/${id}`, { method: 'DELETE' });

		dispatch({ type: DELETE_LOG, payload: id });
	} catch (err) {
		dispatch({ type: LOGS_ERROR, payload: err.response.statusText });
	}
};
// Delete update log

export const updateLog = (log) => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch(`/api/logs/${log._id}`, {
			method: 'PUT',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();

		dispatch({ type: UPDATE_LOG, payload: data });
	} catch (err) {
		dispatch({ type: LOGS_ERROR, payload: err.response.statusText });
	}
};

// Search logs for
// export const searchLogs = (text) => async (dispatch) => {
// 	try {
// 		setLoading();

// 		const res = await fetch(`/api/logs`);
// 		const data = await res.json();

// 		dispatch({
// 			type: SEARCH_LOGS,
// 			payload: data,
// 		});
// 	} catch (err) {
// 		dispatch({ type: LOGS_ERROR, payload: err.response.data });
// 	}
// };
// Filter Contacts
export const filterLogs = (text) => async (dispatch) => {
	dispatch({
		type: FILTER_LOGS,
		payload: text,
	});
};
// set current from
export const setCurrent = (log) => {
	return {
		type: SET_CURRENT,
		payload: log,
	};
};
// clear current log
export const clearCurrent = (log) => {
	return {
		type: CLEAR_CURRENT,
	};
};
// export const getLogs = () => async (dispatch) => {};
