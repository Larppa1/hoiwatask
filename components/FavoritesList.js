import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {getFavoritesList} from './favoritesListSlice';
import Person from './Person';
import componentStyles from './componentStyles';

const FavoritesList = () => {
  const favoritesList = useSelector(getFavoritesList);

  return (
    <FlatList
      style={componentStyles.list}
      data={favoritesList}
      renderItem={({item, index}) => (
        <Person key={index} name={item.name} id={item.id} />
      )}
    />
  );
};

export default FavoritesList;
