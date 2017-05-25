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
});