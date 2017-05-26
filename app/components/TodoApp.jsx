var React = require('react');

//Components-----------------------
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');

//API-----------------------
var TodoAPI = require('TodoAPI');

//node-module-----------------------
var uuid = require('uuid');



var TodoApp = React.createClass({

	getInitialState() {
		return {
			showCompleted: false,
			searchText: '',
			todos: TodoAPI.getTodos()
		}
		//Dummy Data ==============================
		// return {
		// 	showCompleted: false,
		// 	searchText: '',
		// 	todos: [
		// 		{id: uuid(), text: 'Walk the dog', completed: false},
		// 		{id: uuid(), text: 'finish portfolio', completed: true},
		// 		{id: uuid(), text: 'eat ice cream', completed: false},
		// 	]
		// }
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
					text: todo,
					completed: false
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

	handleCheckedToggle(id){
		var updatedTodos = this.state.todos.map( (todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}

			return todo;
		});

		//console.log(typeof updatedTodos, updatedTodos);

		this.setState({
			todos: updatedTodos
		})
	},

	componentDidUpdate(prevProps, prevState) {
		TodoAPI.setTodos(this.state.todos);
	},	

	render: function(){
		var {todos, showCompleted, searchText} = this.state;
		var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

		return (
			<div>
				<h1>Todo App</h1>
				<TodoSearch onSearch={this.handleSearch} />
				<TodoList todosList={filteredTodos} onToggle={this.handleCheckedToggle}/>
				<TodoAdd onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}

});

module.exports = TodoApp;