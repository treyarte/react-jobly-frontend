import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';

describe('Home Component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Home loggedIn={true} />);

    expect(asFragment).toMatchSnapshot();
  });

  it('should welcome a logged in user', () => {
    const wrapper = shallow(<Home loggedIn={true} />);

    expect(wrapper.find('.welcome-user-header').text()).toEqual(
      'Welcome Back!'
    );
  });

  it('should show login link', () => {
    const wrapper = shallow(<Home loggedIn={false} />);

    expect(wrapper.find('Link').text()).toEqual('Log in');
  });

  it('should not show the welcome message', () => {
    const wrapper = shallow(<Home loggedIn={false} />);

    expect(wrapper.find('.home').text()).not.toContain('Welcome Back!');
  });
});
