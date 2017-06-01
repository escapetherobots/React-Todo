var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
	it('should generate search text action', () => {
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'Something'
		};

		var res = actions.setSearchText(action.searchText);

		expect(res).toEqual(action);
	});


	it('should generate text for todo', () => {
		var action = {
			type: 'ADD_TODO',
			text: 'feed cat'
		};

		var res = actions.addTodo(action.text);

		expect(res).toEqual(action);
	});


	it('should toggle between showing completed action', () => {
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED',
		};

		var res = actions.toggleShowCompleted();

		expect(res).toEqual(action);
	});


	it('should generate the toggle todo action', () => {
		var action = {
			type: 'TOGGLE_SHOW_TODO',
			id: 123
		};

		var res = actions.toggleTodo(action.id);

		expect(res).toEqual(action);
	});




});