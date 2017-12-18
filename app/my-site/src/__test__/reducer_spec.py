import React from 'react';
import {List, Map, fromJS} from 'immutable';
import {shallow} from 'enzyme';

import reducer from 'reducer';

test('Reducer', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});
