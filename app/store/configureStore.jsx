var redux = require('redux');
var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = (initialState = {}) => {
	
	var reducer = redux.combineReducers({
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: todosReducer
	});

	var reduxComposition = redux.compose(
		//redux.applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__  ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
	);

	var store = redux.createStore(reducer, initialState, reduxComposition);

	return store;
};