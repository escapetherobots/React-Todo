var React = require('react');

//node-module-----------------------
var uuid = require('uuid');
var moment = require('moment');

//Components-----------------------
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');

//API-----------------------
var TodoAPI = require('TodoAPI');





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
					completed: false,
					createdAt: moment().unix(),
					completedAt: undefined
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
			//condition for item with matching id argument
			if (todo.id === id) {
				//change completed prop bool
				todo.completed = !todo.completed;
				todo.completedAt = todo.completed ? moment().unix() : undefined;
			}

			return todo;
		});

		//console.log(typeof updatedTodos, updatedTodos);

		this.setState({
			todos: updatedTodos
		});
	},

	handleClearTodo(id){
		// filter out the object based on it's id
		var filteredTodos = this.state.todos.filter( (item) => {
			return item.id !== id;
		});

		this.setState({
			todos: filteredTodos
		});
		
	},

	componentDidUpdate(prevProps, prevState) {
		TodoAPI.setTodos(this.state.todos);
	},	

	render: function(){
		var {todos, showCompleted, searchText} = this.state;
		var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

		return (
			<div>
				<h1 className="page-title">TODO APP</h1>
				<div className="row">
					<div className="column small-centered small-11 medium-6 large-6">
						<div className="container">
							<TodoSearch onSearch={this.handleSearch} todos={this.state.todos} />
							<TodoList todosList={filteredTodos} onToggle={this.handleCheckedToggle} onClickClear={this.handleClearTodo}/>
							<TodoAdd onAddTodo={this.handleAddTodo}/>
						</div>	

					</div>
				</div>
			</div>
		);
	}

});

module.exports = TodoApp;