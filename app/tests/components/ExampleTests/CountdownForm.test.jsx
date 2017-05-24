var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
	it('should exist', () => {
		expect(CountdownForm).toExist();
	});

	it('SPY: should call onSetCountdown if valid seconds entered', () => {
		var spy = expect.createSpy();
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
		var $el = $(ReactDOM.findDOMNode(countdownForm));

		countdownForm.refs.seconds.value = '109';

		var formFirstVal = $el.find('form')[0];
		TestUtils.Simulate.submit(formFirstVal);

		expect(spy).toHaveBeenCalledWith(109);
	});

	it('SPY: should NOT call onSetCountdown if invalid seconds entered', () => {
		var spy = expect.createSpy();
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
		var $el = $(ReactDOM.findDOMNode(countdownForm));

		countdownForm.refs.seconds.value = '1asd09!';

		var formFirstInputVal = $el.find('form')[0];
		TestUtils.Simulate.submit(formFirstInputVal);

		expect(spy).toNotHaveBeenCalled();
	});
});