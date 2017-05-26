var React = require('react');

var Todo = React.createClass({

	render: function(){
		var {text, id, completed} = this.props;

		return (
			<li>
				<div className="todo-item float-left"  onChange={ () => {
					this.props.onToggle(id);
				}}>
					<input type="checkbox" defaultChecked={completed} />
					{text}
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