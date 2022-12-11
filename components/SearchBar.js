import React from 'react';
import {TextInput} from 'react-native';
import componentStyles from './componentStyles';
import debounce from 'lodash.debounce';

const SearchBar = ({setQuery}) => {
  const search = debounce(text => {
    setQuery(text);
  }, 250);

  return (
    <TextInput
      id={'1'}
      style={componentStyles.searchBar}
      placeholder="Search"
      onChangeText={text => {
        search(text);
      }}
    />
  );
};

export default SearchBar;
