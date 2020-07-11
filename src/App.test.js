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

describe('api calls', () => {
  let renderedComponent;
  const mockResults = {
    status: 200,
    data: { after: 't3_hcrm8d', images: [{ title: 'test' }] },
  };
  const mockImages = mockResults.data.images;
  const mockError = {
    error: 500,
    response: { data: { error: { message: 'Test Error' } } },
  };
  beforeEach(() => {
    renderedComponent = mount(<App />);
    // const resultsArray = renderedComponent.find("results")
  });

  it('resets results before querying for new data', () => {
    renderedComponent.instance().setResults(mockImages);
    renderedComponent.handleSubmitQuery('');
    expect(renderedComponent.find('results')).toHaveLength(0);
  });
});
