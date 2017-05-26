var React = require('react');

var Todo = React.createClass({

	render: function(){
		var {text, id, completed} = this.props;

		return (
			<li onChange={ () => {
				this.props.onToggle(id);
			}}>
				<input type="checkbox" defaultChecked={completed} />
				{text}
			</li>
		);
	}

});

module.exports = Todo;