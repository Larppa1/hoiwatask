import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import PeopleList from '../components/PeopleList';
import SearchBar from '../components/SearchBar';
import componentStyles from '../components/componentStyles';

const PeopleScreen = () => {
  const [query, setQuery] = useState('');

  return (
    <SafeAreaView style={componentStyles.peopleScreen}>
      <SearchBar setQuery={setQuery} />
      <PeopleList query={query} />
    </SafeAreaView>
  );
};

export default PeopleScreen;
