var $ = require('jquery');

module.exports = {
	setTodos: function(todos){
		// check that arg = array
		if ($.isArray(todos)) {
			var stringData = JSON.stringify(todos);
			localStorage.setItem('todos', stringData);
			return todos;
		}
	},

	getTodos: function(){
		var stringData = localStorage.getItem('todos');
		var todos = [];

		try {
			todos = JSON.parse(stringData)
		} catch (e) {

		}
		// if( $.isArray(todos) ) {
		// 	return todos;
		// } else {
		// 	//if the parsed data is not an array just return empty array
		// 	return [];
		// }
		return $.isArray(todos) ? todos : [];

	},

	removeTodos: function(id){
		//localStorage.removeItem(key);
	},

	filterTodos: function(todos, showCompleted, searchText){
		var filteredTodos = todos;

		//filter by showCompleted
		filteredTodos = filteredTodos.filter( (todo) => {
			return !todo.completed || showCompleted;
		});

		//filter by searchText
		filteredTodos = filteredTodos.filter( (todo) => {
			var text = todo.text.toLowerCase();
			return searchText.length === 0 || text.indexOf(searchText) > -1;
		});

		//sort Todos with non-completed first
		filteredTodos.sort( (a, b) => {
			if(a.completed === false && b.completed === true){
				return -1;
			} else if (a.completed && !b.completed) {
				return 1;
			} else {
				return 0;
			}
		} );



		return filteredTodos;
	}

}