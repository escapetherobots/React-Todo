var expect = require('expect');
var reducers = require('reducers');

// freeze all reducer arguments because they are pure functions
// pure functions don't allow for mutation of arguments
var df = require('deep-freeze-strict');

//=============================================================

describe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set searchTest', () => {
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'dog'
			};

			var res = reducers.searchTextReducer(df(''), df(action));

			expect(res).toEqual(action.searchText);
		});
	});

	describe('showCompletedReducer', () => {
		it('should toggle show completed', () => {
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED'
			};

			var res = reducers.showCompletedReducer(df(false), df(action));

			expect(res).toEqual(true);
		});
	});


	describe('todosReducer', () => {
		it('should add new todo', () => {
			var action = {
				type: 'ADD_TODO',
				text: 'walk the dog'
			};

			var res = reducers.todosReducer(df([]), df(action));
			//the state is only going to have 1 item, so the length will be 1
			expect(res.length).toEqual(1);

			expect(res[0].text).toEqual(action.text);
		});


		it('should add array of todos', () => {
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
			var currentState = [
				{
					id: 987,
					text: 'get food',
					completed: false,
					completedAt: undefined,
					createdAt: 35000
				}
			];
			var res = reducers.todosReducer(df(currentState), df(action));
			expect(res.length).toEqual(3);
			expect(res[1].text).toEqual(todos[0].text);

		});


		it('should toggle a todo as completed', () => {
			var todos = [
				{
					id: 123,
					text: 'something',
					completed: true,
					createdAt: 123,
					completedAt: 125
				}
			];

			var action = {
				type: 'TOGGLE_TODO',
				id: 123
				
			};

			var res = reducers.todosReducer(df(todos), df(action));
			//the state is only going to have 1 item, so the length will be 1
			expect(res.length).toEqual(1);

			expect(res[0].completed).toEqual(false);

			expect(res[0].completedAt).toEqual(undefined);
		});
	});



});