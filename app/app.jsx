var React = require('react');
var ReactDOM = require('react-dom');

//============================================
//providers provide store to the children! yay!
var { Provider } = require('react-redux');

//============================================
//destructured router
var { hashHistory } = require('react-router');

//============================================
import firebase from 'app/firebase/';
//============================================
// redux store and actions
var actions = require('actions');
var store = require('configureStore').configure();

import appRouter from 'app/router/';
//============================================
//import './../playground/firebase/index';

//AUTHORIZATION
firebase.auth().onAuthStateChanged( (user) => {
	if(user) {
		hashHistory.push('/todos');
	} else {
		hashHistory.push('/')
	}
});

// get initial todos from firebase using action generators - redux
store.dispatch(actions.startAddTodos());





//============================================
//Foundation
$(document).foundation();
// App Styles
require('style!css!sass!AppStyles');



//============================================
// Render
//hash history is all stored on the client, not the server




ReactDOM.render( 
	<Provider store={store}>
		{appRouter}
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