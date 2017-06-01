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


	it('should generate add todo action with text arg', () => {
		var action = {
			type: 'ADD_TODO',
			text: 'feed cat'
		};

		var res = actions.addTodo(action.text);

		expect(res).toEqual(action);
	});


	it('should generate add todos action with array arg', () => {
		var todos = [
			{
				id: 123,
				text: 'get cat',
				completed: false,
				completedAt: undefined,
				createdAt: 33000
			},
			{
				id: 345,
				text: 'get dog',
				completed: false,
				completedAt: undefined,
				createdAt: 35000
			}
		];
		var action = {
			type: 'ADD_TODOS',
			todos: todos
		};

		var res = actions.addTodos(action.todos);
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
			type: 'TOGGLE_TODO',
			id: 123
		};

		var res = actions.toggleTodo(action.id);

		expect(res).toEqual(action);
	});




});