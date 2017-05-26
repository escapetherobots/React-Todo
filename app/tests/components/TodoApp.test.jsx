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

		expect(todoApp.state.todos[0].text).toBe(todoText);
	});

	it('should toggle completed value when handleToggle called', () => {
		var todoData = {id: 11, text: 'test features', completed: false};
		var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

		todoApp.setState({todos: [todoData]});

		expect(todoApp.state.todos[0].completed).toBe(false);
		
		todoApp.handleCheckedToggle(11);

		expect(todoApp.state.todos[0].completed).toBe(true);
	});
});