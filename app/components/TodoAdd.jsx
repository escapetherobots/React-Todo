var React = require('react');
var { connect } = require('react-redux');
var actions = require('actions');

export var TodoAdd = React.createClass({

	handleSubmit(e){
		e.preventDefault();
		var item = this.refs.addField.value;
		var { dispatch } = this.props;
		

		if(item.length > 0) {
			// this.props.onAddTodo(item);
			// gets replaced with dispatch action
			dispatch(actions.addTodo(item));

			this.refs.addField.value = '';
		} else {
			this.refs.addField.focus();
		}

		

	},


	render: function(){

		return (
			<div className="container__footer">
				<form onSubmit={this.handleSubmit}>
					<input type="text" ref="addField" placeholder="Add a task"></input>
					<button className="button expanded btn-primary">Add</button>
				</form>
			</div>
		);
	}

});

// This component doesn't need any props from the state, just run this
// by running TodoApp through connect it adds the dispatch method 
// to this component as a prop!!!
export default connect()(TodoAdd);