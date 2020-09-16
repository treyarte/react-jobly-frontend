import React, { useState } from 'react';
import { Input, Button, Form, FormGroup } from 'reactstrap';

import './SearchBar.css';

const SearchBar = ({ handleData }) => {
  const INITIAL_STATE = {
    search: '',
  };
  const [searchForm, setSearchForm] = useState(INITIAL_STATE);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setSearchForm((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const searchForData = async (e) => {
    e.preventDefault();
    await handleData(searchForm.search);
  };

  return (
    <>
      <Form className='search-bar-form' onSubmit={searchForData}>
        <FormGroup>
          <Input
            type='text'
            name='search'
            id='search-input'
            value={searchForm.search}
            placeholder='Enter search term..'
            onChange={handleInput}
          />
          <Button color='primary'>Search</Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default SearchBar;
