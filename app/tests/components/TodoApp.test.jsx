var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// load the component that you want to test:
var TodoApp = require('TodoApp');

describe('TodoApp Component', () => {
	it('should exist', () => {
		expect(TodoApp).toExist();
	});

	it('should add todo to the state on handleAddTodo', () => {
		var todoText = 'test text';
		var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

		todoApp.setState({todos: []});
		todoApp.handleAddTodo(todoText);

		//Test that the type of todos prop is a string
		expect(todoApp.state.todos[0].text).toBe(todoText);

		//Test that the type of todos prop is a number
		expect(todoApp.state.todos[0].createdAt).toBeA('number');
	});

	it('should toggle completed value when handleToggle called', () => {
		var todoData = {
			id: 11, 
			text: 'test features', 
			completed: false,
			createdAt: 0,
			completedAt: undefined
		};
		
		var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

		// completed prop should have false value when new todo added
		todoApp.setState({todos: [todoData]});

		expect(todoApp.state.todos[0].completed).toBe(false);
		
		// when method is run, change completed to value of true
		todoApp.handleCheckedToggle(11);

		expect(todoApp.state.todos[0].completed).toBe(true);
		expect(todoApp.state.todos[0].completedAt).toBeA('number');
	});

	it('should toggle todo from completed to incompleted', () => {
		var todoData = {
			id: 11, 
			text: 'test features', 
			completed: true,
			createdAt: 0,
			completedAt: 123
		};
		
		var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

		// completed prop should have false value when new todo added
		todoApp.setState({todos: [todoData]});

		expect(todoApp.state.todos[0].completed).toBe(true);
		
		// when method is run, change completed to value of true
		todoApp.handleCheckedToggle(11);

		expect(todoApp.state.todos[0].completed).toBe(false);
		expect(todoApp.state.todos[0].completedAt).toBeA('undefined');
	});
});