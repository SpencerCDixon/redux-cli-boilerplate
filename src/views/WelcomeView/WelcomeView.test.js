import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import WelcomeView from './WelcomeView';

test('my passing test', t => {
  const wrapper = shallow(<WelcomeView />);
  console.log(wrapper.debug());
  t.is(wrapper.type(), 'div');
});
