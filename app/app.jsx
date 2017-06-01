var React = require('react');
var ReactDOM = require('react-dom');

//============================================
//providers provide store to the children! yay!
var { Provider } = require('react-redux');

//============================================
//destructured router
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

//============================================
// components
var Main = require('Main');
var TodoApp = require('TodoApp');

//============================================
// redux store and actions
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
//============================================



//============================================
//subscribe to the react state - listen for when it updates
store.subscribe( () => {
	var state = store.getState();
	console.log(state);
	TodoAPI.setTodos(state.todos);
});

// set initial store based on array of todos from localStorage!
var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

//EXAMPLE DISPATCH ACTIONS
//store.dispatch(actions.addTodo('Clean the yard'));
//store.dispatch(actions.setSearchText('yard'));
//store.dispatch(actions.toggleShowCompleted());



//============================================
//Foundation
$(document).foundation();
// App Styles
require('style!css!sass!AppStyles');





//============================================
// Render
ReactDOM.render( 
	<Provider store={store}>
		<TodoApp />
	</Provider >,
	document.getElementById('app')
);

//============================================
// Render with Routes
// ReactDOM.render( 
// 	<Router history={hashHistory}>
// 		<Route path="/" component={Main}>
// 			<IndexRoute component={TodoApp}/>
// 			<Route path="countdown" component={TodoApp} />
// 		</Route>
// 	</Router>,
// 	document.getElementById('app')
// );