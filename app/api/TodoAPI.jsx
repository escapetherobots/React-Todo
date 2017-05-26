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

}