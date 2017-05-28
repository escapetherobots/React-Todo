var React = require('react');
var moment = require('moment');

var Todo = React.createClass({

	render: function(){
		var {text, id, completed, createdAt, completedAt} = this.props;
		var todoClassName = completed ? 'todo todo-completed' : 'todo';
		var renderDate = () => {
			var message = 'Created: ';
			var timestamp = createdAt;

			if (completed) {
				message = 'Completed: ' ; 
				timestamp = completedAt;

				return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
			}

			return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
		}

		return (
			<div className={todoClassName}>
				<div className="todo__title" onChange={ () => {
					this.props.onToggle(id);
				}}>
					<div>
						<input type="checkbox" defaultChecked={completed} />
						<p>{text}</p>
					</div>
					<div className="todo__subtext">
						<p>{renderDate()}</p>
					</div>

				</div>
				<div className="todo__clear-item" onClick={ () => {
					this.props.onClickClear(id);
				}} >
					<button className="button tiny hollow" >Clear</button>
				</div>
				
			</div>
		);
	}

});

module.exports = Todo;