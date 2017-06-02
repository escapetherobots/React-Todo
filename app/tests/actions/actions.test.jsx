import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var expect = require('expect');
var actions = require('actions');

var createMockStore1 = configureMockStore([thunk]);

describe('Actions', () => {
	it('should generate search text action', () => {
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'Something'
		};

		var res = actions.setSearchText(action.searchText);

		expect(res).toEqual(action);
	});

	//=================================================
	// TODO ACTION TEST
	it('should generate add todo action with text arg', () => {
		var action = {
			type: 'ADD_TODO',
			todo: {
				id: 12345,
				text: 'feed cat',
				completed: false,
				createdAt: 4000
			}
		};

		var res = actions.addTodo(action.todo);

		expect(res).toEqual(action);
	});

	// TODO ACTION ASYNC FIREBASE TEST WITH MOCK!
	// pass done, which indicates that it is assync test
	it('should create todo and dispatch ADD_TODO', (done) => {
		const store = createMockStore1({});
		const todoText = 'My todo item';

		store.dispatch(actions.startAddTodo(todoText)).then( () => {
			const actions = store.getActions();
			expect(actions[0]).toInclude({
				type: 'ADD_TODO'
			});
			expect(actions[0].todo).toInclude({
				text: todoText
			});
			done();
		}).catch(done);

	});
	


	//=================================================
	// TODO ACTION TEST

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