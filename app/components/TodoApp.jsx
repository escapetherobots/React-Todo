var React = require('react');

var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');
//node-module-----------------------
var uuid = require('uuid');

var TodoApp = React.createClass({

	getInitialState() {
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{id: uuid(), text: 'Walk the dog'},
				{id: uuid(), text: 'finish portfolio'},
				{id: uuid(), text: 'eat ice cream'},
				{id: uuid(), text: 'workout'},
				{id: uuid(), text: 'Paint the house'},
			]
		}
	},

	handleAddTodoZTest(todo) {
		// console.log(this.state.todos.length + 1);
		// console.log(todo);

		// var updatedTodos = this.state.todos.push({
		// 	id: this.state.todos.length + 1,
		// 	text: todo
		// });

		// this.setState({
		// 	updatedTodos
		// });

		// console.log(this.state);
	},

	handleAddTodo(todo){
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: todo
				}
			]
		})
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