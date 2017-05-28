var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({


	render: function(){
		var {todosList} = this.props;
		var renderTodos = () => {

			if(todosList.length === 0) {
				return <p className="container__message">Add a todo task!</p>
			} else {
				return todosList.map( (todo) => {
					return (
						<Todo key={todo.id} {...todo} onToggle={this.props.onToggle} onClickClear={this.props.onClickClear}/>
					);
				});
			}
		};

		return (
			<div>
				{renderTodos()}
			</div>
		);
	}

});

module.exports = TodoList;