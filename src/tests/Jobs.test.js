import React from 'react';
import Jobs from '../Jobs';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';

describe('Jobs Component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Jobs loggedIn={true} />);

    expect(asFragment).toMatchSnapshot();
  });

  it('Should render a searchBar', () => {
    const wrapper = shallow(<Jobs />);

    const searchBar = wrapper.find('SearchBar');

    expect(searchBar.length).toEqual(1);
  });
});
