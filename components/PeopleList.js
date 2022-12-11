import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPeopleList, fetchPeopleList} from './peopleListSlice';
import {FlatList} from 'react-native';
import Person from './Person';
import componentStyles from './componentStyles';

const PeopleList = ({query}) => {
  const dispatch = useDispatch();
  const peopleList = useSelector(getPeopleList);
  const tempList = peopleList.filter(item =>
    item.name.toLowerCase().includes(query),
  );

  useEffect(() => {
    dispatch(fetchPeopleList());
  }, [dispatch]);

  return (
    <FlatList
      style={componentStyles.list}
      data={query === '' ? peopleList : tempList}
      renderItem={({item, index}) => (
        <Person
          key={index}
          id={item.id}
          name={item.name}
          height={item.height}
          mass={item.mass}
          hairColor={item.hairColor}
          skinColor={item.skinColor}
          eyeColor={item.eyeColor}
          birthYear={item.birthYear}
          gender={item.gender}
        />
      )}
    />
  );
};

export default PeopleList;
