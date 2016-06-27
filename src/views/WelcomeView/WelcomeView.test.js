import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import WelcomeView from './WelcomeView';

test.beforeEach( t => {
  t.context.wrapper = shallow(<WelcomeView />);
});

test('renders as a div', t => {
  t.is(t.context.wrapper.type(), 'div');
});

test('has proper styling', t => {
  t.regex(t.context.wrapper.prop('className'), /container/);
});

test('applies css to welcome header', t => {
  const h1 = t.context.wrapper.find('h1');
  t.regex(h1.prop('className'), /welcome/)
});
