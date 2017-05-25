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
});