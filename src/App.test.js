import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import axios from 'axios';
import App from './App';
import ImageCard from './components/ImageCard';
import queryAPI from './utilities/queryAPI';
import Input from './components/Input';

jest.mock('axios');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('saves user input correctly in state', () => {
  const wrapper = mount(<Input />);
  const input = wrapper.find('#query-input');
  input.instance().value = 'test';
  input.instance().name = 'input';
  input.simulate('change');
  expect(wrapper.find('input')).toHaveLength(1);
});
