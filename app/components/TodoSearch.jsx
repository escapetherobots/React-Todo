var React = require('react');

var TodoSearch = React.createClass({


	handleSearch(){
		var searchText = this.refs.searchField.value;
		var showCompleted = this.refs.showCompleted.checked;
		
		this.props.onSearch(showCompleted, searchText);
	},


	render: function(){
		var renderCheckBox = () => {
			return (
				<label>
						<input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
						Show completed todos
					</label>
			);
		}


		return (
			<div className="container__header">
				<div >
					<input type="search" ref="searchField" onChange={this.handleSearch} placeholder="Search for todo"></input>
				</div>
				<div>
					{renderCheckBox()}
				</div>
			</div>
		);
	}

});

module.exports = TodoSearch;

// if (todos.length > 1) {
// 			return (
// 				<label>
// 					<input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
// 					Show completed todos
// 				</label>
// 			);
// 		};