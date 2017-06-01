var React = require('react');

//node-module-----------------------
var uuid = require('uuid');
var moment = require('moment');

//Components-----------------------
// !!!use import to get defaults attached to the Redux store
import TodoList from 'TodoList';
import TodoAdd from 'TodoAdd';
import TodoSearch from 'TodoSearch';

//API-----------------------
// the API is now accessed from the TodoList component!
//var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({

	// getInitialState() {
	// 	return {
	// 		showCompleted: false,
	// 		searchText: '',
	// 		todos: TodoAPI.getTodos() 
	// 	}
	// },

	// handleAddTodo(todo){
	// 	this.setState({
	// 		todos: [
	// 			...this.state.todos,
	// 			{
	// 				id: uuid(),
	// 				text: todo,
	// 				completed: false,
	// 				createdAt: moment().unix(),
	// 				completedAt: undefined
	// 			}
	// 		]
	// 	})
	// },

	// handleSearch(showCompleted, searchText){
	// 	this.setState({
	// 		showCompleted: showCompleted,
	// 		searchText: searchText.toLowerCase()
	// 	});
	// },

	// handleClearTodo(id){
	// 	// filter out the object based on it's id
	// 	var filteredTodos = this.state.todos.filter( (item) => {
	// 		return item.id !== id;
	// 	});

	// 	this.setState({
	// 		todos: filteredTodos
	// 	});
	// },

	// componentDidUpdate(prevProps, prevState) {
	// 	//when the state updates run API to local storage!
	// 	TodoAPI.setTodos(this.state.todos);
	// },	

	render: function(){
		//var {todos, showCompleted, searchText} = this.state;
		//var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
		// the components now know how to render themselves - via Redux!

		return (
			<div>
				<h1 className="page-title">TODO APP</h1>
				<div className="row">
					<div className="column small-centered small-11 medium-6 large-6">
						<div className="container">
							<TodoSearch />
							<TodoList />
							<TodoAdd />
						</div>	

					</div>
				</div>
			</div>
		);
	}

});

module.exports = TodoApp;