var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// load the component that you want to test:
var TodoAdd = require('TodoAdd');

describe('Add Todo Component', () => {
	it('should exist', () => {
		expect(TodoAdd).toExist();
	});

	it('should call onAddTodo prop with valid data', () => {
		var textTest = 'Go to store';
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<TodoAdd onAddTodo={spy} />);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.addField.value = textTest;
		TestUtils.Simulate.submit( $el.find('form')[0] );

		expect(spy).toHaveBeenCalledWith(textTest);

	});

	it('should NOT call onAddTodo prop with invalid data', () => {
		var textTest = '';
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<TodoAdd onAddTodo={spy} />);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.addField.value = textTest;
		TestUtils.Simulate.submit( $el.find('form')[0] );

		expect(spy).toNotHaveBeenCalled();

	});
});