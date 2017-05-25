var React = require('react');

var Todo = React.createClass({

	render: function(){
		var {text, id} = this.props;

		return (
			<li>
				{id} | {text}
			</li>
		);
	}

});

module.exports = Todo;