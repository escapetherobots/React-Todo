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
//import './../playground/firebase/index';


store.dispatch(actions.startAddTodos());





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