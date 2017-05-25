var React = require('react');

var TodoAdd = React.createClass({

	handleSubmit(e){
		e.preventDefault();
		var item = this.refs.addField.value;

		if(item.length > 0) {
			this.props.onAddTodo(item);

			this.refs.addField.value = '';
		} else {
			this.refs.addField.focus();
		}

		

	},


	render: function(){

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" ref="addField" placeholder="Add a task"></input>
					<button className="button expanded btn-primary">Add</button>
				</form>
			</div>
		);
	}

});

module.exports = TodoAdd;