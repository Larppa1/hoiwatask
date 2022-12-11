import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  peopleScreen: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20%',
    width: '100%',
    paddingHorizontal: '5%',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '3%',
    marginVertical: '3%',
    backgroundColor: 'darkgray',
    borderRadius: 5,
  },
  itemName: {
    paddingRight: '6%',
    fontSize: 15,
    color: 'black',
  },
  searchBar: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 30,
    marginVertical: '3%',
    paddingHorizontal: '5%',
  },
  personDetailsScreen: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5%',
  },
  personDetails: {
    fontSize: 18,
    color: 'black',
    lineHeight: 30,
  },
});
