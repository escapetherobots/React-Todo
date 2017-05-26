var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({


	render: function(){
		var {todosList} = this.props;
		var renderTodos = () => {
			return todosList.map( (todo) => {
				return (
					<Todo key={todo.id} {...todo} onToggle={this.props.onToggle} onClickClear={this.props.onClickClear}/>
				);
			});
		};

		return (
			<div>
				<h1>Todo List</h1>
				<ul className="todo-list">
					{renderTodos()}
				</ul>
			</div>
		);
	}

});

module.exports = TodoList;