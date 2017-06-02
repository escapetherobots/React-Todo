import * as redux from 'redux';
import thunk from 'redux-thunk';
// all action generators return objects, with thunk, the generators will return functions

import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers';

export var configure = (initialState = {}) => {
	
	var reducer = redux.combineReducers({
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: todosReducer
	});

	var reduxComposition = redux.compose(
		redux.applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__  ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
	);

	var store = redux.createStore(reducer, initialState, reduxComposition);

	return store;
};