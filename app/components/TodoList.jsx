var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({


	render: function(){
		var {todosList} = this.props;
		var renderTodos = () => {
			return todosList.map( (todo) => {
				return (
					<Todo key={todo.id} {...todo} />
				);
			});
		};

		return (
			<div>
				<h1>Todo List</h1>
				<ul>
					{renderTodos()}
				</ul>
			</div>
		);
	}

});

module.exports = TodoList;