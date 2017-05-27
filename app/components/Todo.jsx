var React = require('react');
var moment = require('moment');

var Todo = React.createClass({

	render: function(){
		var {text, id, completed, createdAt, completedAt} = this.props;
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
			<li>
				<div className="todo-item float-left"  onChange={ () => {
					this.props.onToggle(id);
				}}>
					<input type="checkbox" defaultChecked={completed} />
					<p>{text}</p>
					<p>{renderDate()}</p>

				</div>
				<div className="clear-item" onClick={ () => {
					this.props.onClickClear(id);
				}} >
					<button className="button tiny hollow" >Clear</button>
				</div>
			</li>
		);
	}

});

module.exports = Todo;