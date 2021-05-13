import {
	GET_TECHS,
	ADD_TECH,
	DELETE_TECH,
	SET_LOADING,
	TECHS_ERROR,
} from './types';
// get logs from server.js",
import axios from 'axios';

// GEt techs
export const getTechs = () => async (dispatch) => {
	try {
		setLoading();
		const res = await axios.get('/api/techs');
		// const data = await res.json();

		dispatch({
			type: GET_TECHS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({ type: TECHS_ERROR, payload: err.response.statusText });
	}
};

// Add Tech
export const addTech = (tech) => async (dispatch) => {
	setLoading();
	try {
		const res = await fetch('/api/techs', {
			method: 'POST',
			body: JSON.stringify(tech),
			headers: { 'Content-Type': 'application/json' },
		});
		const data = await res.json();
		dispatch({ type: ADD_TECH, payload: data });
	} catch (err) {
		dispatch({ type: TECHS_ERROR, payload: err.response.statusText });
	}
};
export const deleteTech = (id) => async (dispatch) => {
	try {
		const res = await fetch(`/api/techs/${id}`, { method: 'DELETE' });

		dispatch({ type: DELETE_TECH, payload: id });
	} catch (err) {
		dispatch({ type: TECHS_ERROR, payload: err.response.statusText });
	}
};
// Set Loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
