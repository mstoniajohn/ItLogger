import {
	GET_LOGS,
	// SET_LOADING,
	LOGS_ERROR,
	ADD_LOG,
	DELETE_LOG,
	UPDATE_LOG,
	FILTER_LOGS,
	SET_CURRENT,
	CLEAR_CURRENT,
} from '../actions/types';

const initialState = {
	logs: null,
	error: null,
	current: null,
	loading: false,
	filtered: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_LOGS:
			return {
				...state,
				logs: action.payload,
				loading: false,
			};
		case LOGS_ERROR:
			console.error(action.payload);
			return {
				...state,
				error: action.payload,
			};
		case ADD_LOG:
			return {
				...state,
				// take logs array (state is immutable, cant just push, use spread operator then add on new log)
				logs: [...state.logs, action.payload],
				loading: false,
			};
		case UPDATE_LOG:
			return {
				...state,

				logs: state.logs.map((log) =>
					log._id === action.payload ? action.payload : log
				),
			};
		case DELETE_LOG:
			return {
				...state,
				logs: state.logs.filter((log) => log._id !== action.payload),
				loading: false,
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};
		case FILTER_LOGS:
			return {
				...state,
				filtered: state.logs.filter((log) => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return log.message.match(regex) || log.tech.match(regex);
				}),
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};
		default:
			return state;
	}
};
