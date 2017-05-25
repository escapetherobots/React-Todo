var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// load the component that you want to test:
var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList Component', () => {
	it('should exist', () => {
		expect(TodoList).toExist();
	});

	// it('should render one component for each todo item', () => {
	// 	var todos = [
	// 		{
	// 			id: 1,
	// 			text: 'do something'
	// 		},
	// 		{
	// 			id: 2,
	// 			text: 'do something else'
	// 		}
	// 	];

	// 	var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
	// 	var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)

	// 	expect(todosComponents.length).toBe(todos.length);
	// });
});