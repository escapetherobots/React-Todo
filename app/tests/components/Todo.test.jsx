var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// load the component that you want to test:
var Todo = require('Todo');

describe('Todo Component', () => {
	it('should exist', () => {
		expect(Todo).toExist();
	});

	it('should call onToggle prop with id arg on click', () => {
		var todoData = {
			id: 199,
			text: 'Write some test',
			completed: true
		};
		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todo));
		var input = $el.find('input[type="checkbox"]');

		TestUtils.Simulate.change(input[0]);

		expect(spy).toHaveBeenCalledWith(199);

	});
});