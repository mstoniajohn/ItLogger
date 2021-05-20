import {
	GET_TASKS,
	ADD_TASK,
	DELETE_TASK,
	UPDATE_TASK,
	TASKS_ERROR,
	SET_CURRENT,
	CLEAR_CURRENT,
	SET_LOADING,
} from '../actions/types';

const initialState = {
	tasks: [],
	error: null,
	loading: false,
	current: null,
};

export default (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case GET_TASKS:
			return {
				...state,
				tasks: payload,
				loading: false,
			};
		case ADD_TASK:
			return {
				...state,
				// take logs array (state is immutable, cant just push, use spread operator then add on new log)
				tasks: [...state.tasks, payload],
				loading: false,
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};
		case UPDATE_TASK:
			return {
				...state,

				tasks: state.tasks.map((task) =>
					task._id === action.payload ? action.payload : task
				),
			};
		// case FILTER_LOGS:
		// 	return {
		// 		...state,
		// 		filtered: state.logs.filter((log) => {
		// 			const regex = new RegExp(`${action.payload}`, 'gi');
		// 			return log.message.match(regex) || log.tech.match(regex);
		// 		}),
		// 	};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};

		case DELETE_TASK:
			return {
				...state,
				tasks: state.tasks.filter((task) => task._id !== action.payload),
				loading: false,
			};

		default:
			return state;
	}
};
