var React = require('react');
var ReactDOM = require('react-dom');

var Main = require('Main');
var TodoApp = require('TodoApp');


//object destructuring
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


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