import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import componentStyles from '../components/componentStyles';

const PersonDetails = ({route}) => {
  const {
    name,
    height,
    mass,
    hairColor,
    skinColor,
    eyeColor,
    birthYear,
    gender,
  } = route.params;

  return (
    <SafeAreaView style={componentStyles.personDetailsScreen}>
      <Text style={componentStyles.personDetails}>{`Name: ${name}`}</Text>
      <Text style={componentStyles.personDetails}>{`Height: ${height}`}</Text>
      <Text style={componentStyles.personDetails}>{`Mass: ${mass}`}</Text>
      <Text
        style={
          componentStyles.personDetails
        }>{`Hair Color: ${hairColor}`}</Text>
      <Text
        style={
          componentStyles.personDetails
        }>{`Skin Color: ${skinColor}`}</Text>
      <Text
        style={componentStyles.personDetails}>{`Eye color: ${eyeColor}`}</Text>
      <Text
        style={
          componentStyles.personDetails
        }>{`Birth year: ${birthYear}`}</Text>
      <Text style={componentStyles.personDetails}>{`Gender: ${gender}`}</Text>
    </SafeAreaView>
  );
};

export default PersonDetails;
