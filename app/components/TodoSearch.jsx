var React = require('react');

var TodoSearch = React.createClass({


	handleSearch(){
		var searchText = this.refs.searchField.value;
		var showCompleted = this.refs.showCompleted.checked;
		
		this.props.onSearch(showCompleted, searchText);
	},


	render: function(){

		return (
			<div>
				<div >
					<input type="search" ref="searchField" onChange={this.handleSearch} placeholder="Search for todo"></input>
				</div>
				<div>
					<label>
						<input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
						Show completed todos
					</label>
				</div>
			</div>
		);
	}

});

module.exports = TodoSearch;