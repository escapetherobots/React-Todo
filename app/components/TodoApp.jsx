var React = require('react');

var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({

	getInitialState() {
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{id: 1, text: 'Walk the dog'},
				{id: 2, text: 'finish portfolio'},
				{id: 3, text: 'eat ice cream'},
				{id: 4, text: 'workout'},
				{id: 5, text: 'Paint the house'},
			]
		}
	},

	handleAddTodo(todo) {
		console.log(this.state.todos.length + 1);
		console.log(todo);

		var updatedTodos = this.state.todos.push({
			id: this.state.todos.length + 1,
			text: todo
		});

		this.setState({
			updatedTodos
		});

		console.log(this.state);
		// this.setState({

		// })

	},

	handleSearch(showCompleted, searchText){
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	},

	componentDidUpdate(prevProps, prevState) {
		if(prevState.todos.length !== this.state.todos.length) {

		}
	},	

	render: function(){
		var {todos} = this.state;

		return (
			<div>
				<h1>Todo App</h1>
				<TodoSearch onSearch={this.handleSearch} />
				<TodoList todosList={todos}/>
				<TodoAdd onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}

});

module.exports = TodoApp;