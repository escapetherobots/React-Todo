var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
	it('should exist', () => {
		expect(Controls).toExist();
	});

	describe('Controls Render', () => {
		it('should render pause button when started', () => {
			var controls = TestUtils.renderIntoDocument(<Controls inputStatus="started"/>);
			var $el = $(ReactDOM.findDOMNode(controls));
			var $pauseButton = $el.find('button:contains(Pause)');

			expect($pauseButton.length).toBe(1);

		});

		it('should render start when paused', () => {
			var controls = TestUtils.renderIntoDocument(<Controls inputStatus="paused" />);
			var $el = $(ReactDOM.findDOMNode(controls));
			var $startButton = $el.find('button:contains(Start)');

			expect($startButton.length).toBe(1);
		});
		
	});
	
});