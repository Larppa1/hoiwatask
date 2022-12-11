import React, {useState, useEffect} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {getPeopleList} from './peopleListSlice';
import componentStyles from './componentStyles';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToFavorites,
  getFavoritesList,
  removeFromFavorites,
} from '../components/favoritesListSlice';
import {addFavorite, removeFavorite} from '../components/peopleListSlice';
import {useNavigation} from '@react-navigation/native';

const Person = ({
  id,
  name,
  height,
  mass,
  hairColor,
  skinColor,
  eyeColor,
  birthYear,
  gender,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const peopleList = useSelector(getPeopleList);
  const favoritesList = useSelector(getFavoritesList);
  const [isFavorite, setIsFavorite] = useState(peopleList[id].favorite);

  useEffect(() => {
    for (let i = 0; i < favoritesList.length; i++) {
      dispatch(addFavorite(favoritesList[i].id));
    }
    setIsFavorite(peopleList[id].favorite);
  }, [dispatch, favoritesList, id, peopleList]);

  const storeData = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(name));
      dispatch(removeFavorite(id));
    } else {
      dispatch(addToFavorites(peopleList[id]));
      dispatch(addFavorite(id));
    }
  };

  return (
    <SafeAreaView style={componentStyles.item}>
      <Text
        style={componentStyles.itemName}
        onPress={() => {
          navigation.navigate('PersonDetails', {
            name: name,
            height: height,
            mass: mass,
            hairColor: hairColor,
            skinColor: skinColor,
            eyeColor: eyeColor,
            birthYear: birthYear,
            gender: gender,
          });
        }}>
        {name}
      </Text>
      <Button
        title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        onPress={storeData}
      />
    </SafeAreaView>
  );
};

export default Person;
