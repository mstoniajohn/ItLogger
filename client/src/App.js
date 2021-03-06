import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import SearchBar from './components/layout/SearchBar';
import store from './store';
import { Provider } from 'react-redux';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import AddTaskModal from './components/tasks/AddTaskModal';
import Tasks from './components/tasks/Tasks';

function App() {
	useEffect(() => {
		M.AutoInit();
	});
	return (
		<Provider store={store}>
			<div className="App">
				<SearchBar />
				<div className="container">
					<AddBtn />
					<AddLogModal />
					<EditLogModal />
					<AddTechModal />
					<TechListModal />
					<AddTaskModal />
					<Logs />
					<Tasks />
				</div>
			</div>
		</Provider>
	);
}

export default App;
