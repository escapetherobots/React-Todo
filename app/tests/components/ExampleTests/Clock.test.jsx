var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// load the component that you want to test:
var Clock = require('Clock');

describe('Clock', () => {
	it('should exist', () => {
		expect(Clock).toExist();
	});
});

//check that the component will render to DOM
describe('Render Component', () => {
	it('should render the clock to DOM', () => {
		//STEP 1:
		//Use TestUtils to render the component in a virtual (React DOM???) DOM
		var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
		//STEP 2:
		//Use jQuery to find that Node from the ReactDOM and save to jQuery var
		var $el = $(ReactDOM.findDOMNode(clock));
		//STEP 3:
		//Output the actual rendered text for that node
		var actualText = $el.find('.clock-text').text();

		//Run a test based on 62 seconds
		expect(actualText).toBe('01:02');
	});
});


//Check that component will format the seconds correctly
describe('Format Seconds', () => {
	it('should return formated seconds', () => {
		var clock = TestUtils.renderIntoDocument(<Clock />);
		var seconds = 615;
		var expected = '10:15';
		var actual = clock.formatSeconds(seconds);

		expect(actual).toBe(expected);
	});

	it('should return formated seconds when min/sec less than 10', () => {
		var clock = TestUtils.renderIntoDocument(<Clock />);
		var seconds = 61;
		var expected = '01:01';
		var actual = clock.formatSeconds(seconds);

		expect(actual).toBe(expected);
	});
});


