var React = require('react');

var TodoList = require('TodoList');

var TodoApp = React.createClass({

	getInitialState() {
		return {
			todos: [
				{id: 1, text: 'Walk the dog'},
				{id: 2, text: 'finish portfolio'},
				{id: 3, text: 'eat ice cream'},
				{id: 4, text: 'workout'},
				{id: 5, text: 'Paint the house'},
			]
		}
	},

	render: function(){
		var {todos} = this.state;

		return (
			<div>
				<h1>Todo App</h1>
				<TodoList todosList={todos}/>
			</div>
		);
	}

});

module.exports = TodoApp;