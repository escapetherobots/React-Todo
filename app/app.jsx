var React = require('react');
var ReactDOM = require('react-dom');

var Main = require('Main');
var TodoApp = require('TodoApp');


//object destructuring
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// redux store and actions
var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe( () => {
	console.log('New State: ', store.getState());
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());


//Foundation
$(document).foundation();

// App Styles
require('style!css!sass!AppStyles');

// ReactDOM.render( 
// 	<TodoApp />,
// 	document.getElementById('app')
// );

ReactDOM.render( 
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={TodoApp}/>
			<Route path="countdown" component={TodoApp} />
		</Route>
	</Router>,
	document.getElementById('app')
);