import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';
import taskReducer from './taskReducer';

export default combineReducers({
	log: logReducer,
	tech: techReducer,
	task: taskReducer,
});
