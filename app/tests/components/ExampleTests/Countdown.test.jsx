var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
	it('should exist', () => {
		expect(Countdown).toExist();
	});

	//ASYNC TESTS
	it('handleSetCountdown', (done) => {
		var countdown = TestUtils.renderIntoDocument(<Countdown />);
		countdown.handleSetCountdown(10);

		expect(countdown.state.count).toBe(10);
		expect(countdown.state.countdownStatus).toBe('started');

		// this test is asynchronous...it will normally fail so use the DONE arg
		setTimeout( () => {
			expect(countdown.state.count).toBe(9);
			done();
		}, 1001)
	});

	//ASYNC TESTS
	it('handleSetCountdown never less than zero', (done) => {
		var countdown = TestUtils.renderIntoDocument(<Countdown />);
		countdown.handleSetCountdown(1);

		// this test is asynchronous...it will normally fail so use the DONE arg
		setTimeout( () => {
			expect(countdown.state.count).toBe(0);
			done();
		}, 3001)
	});

	//ASYNC TESTS
	it('should pause countdown on paused status', (done) => {
		var countdown = TestUtils.renderIntoDocument(<Countdown />);
		countdown.handleSetCountdown(3);

		countdown.handleStatusChange('paused');

		// this test is asynchronous...it will normally fail so use the DONE arg
		setTimeout( () => {
			expect(countdown.state.count).toBe(3);
			expect(countdown.state.countdownStatus).toBe('paused');
			done();
		}, 1001)
	});

	//ASYNC TESTS
	it('should stop countdown on stopped status', (done) => {
		var countdown = TestUtils.renderIntoDocument(<Countdown />);
		countdown.handleSetCountdown(3);

		countdown.handleStatusChange('stopped');

		// this test is asynchronous...it will normally fail so use the DONE arg
		setTimeout( () => {
			expect(countdown.state.count).toBe(0);
			expect(countdown.state.countdownStatus).toBe('stopped');
			done();
		}, 1001)
	});




	
});