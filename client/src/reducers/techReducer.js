import { GET_TECHS, SET_LOADING, DELETE_TECH } from '../actions/types';

const initialState = {
	techs: null,
	loading: false,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_TECHS:
			console.log(action.payload);
			return {
				...state,
				techs: action.payload,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};