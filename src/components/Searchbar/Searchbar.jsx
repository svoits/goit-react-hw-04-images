import { useState } from 'react';
import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      return;
    }
    onSubmit(query);
  };

  return (
    <SearchBarHeader>
      <SearchForm onSubmit={handleSearchSubmit}>
        <SearchFormBtn type="submit">
          <GoSearch size="20" />
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormBtn>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleInputChange}
        />
      </SearchForm>
    </SearchBarHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
