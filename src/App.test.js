import ReactDOM from 'react-dom';
import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';

import {
  render,
  screen,
  fireEvent,
  act,
} from '@testing-library/react';

import App from './App';
import Step4 from './steps';

const testData = {
  vision:'My Vision',
  purpose1:'My Purpose 1',
  purpose2:'My Purpose 2',
  purpose3:'My Purpose 3',
  value1:'My value 1',
  value2:'My value 2',
  value3:'My value 3',
  value4:'My value 4',
  value5:'My value 5',
};

describe('Step4', () => {
	test('renders answers from questionnaire at final step', () => {
		render(<Step4 data={testData} />);

		screen.debug();
	});
});

