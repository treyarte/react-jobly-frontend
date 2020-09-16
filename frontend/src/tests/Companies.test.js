import React from 'react';
import Companies from '../Companies';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';

describe('Companies Component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Companies loggedIn={true} />);

    expect(asFragment).toMatchSnapshot();
  });

  it('Should render a searchBar', () => {
    const wrapper = shallow(<Companies />);

    const searchBar = wrapper.find('SearchBar');

    expect(searchBar.length).toEqual(1);
  });
});
