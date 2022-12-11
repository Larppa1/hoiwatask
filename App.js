import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {store, persistor} from './app/store';
import {Provider} from 'react-redux';
import React from 'react';
import PeopleScreen from './screens/PeopleScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import PersonDetailsScreen from './screens/PersonDetailsScreen';
import {PersistGate} from 'redux-persist/integration/react';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="People" component={PeopleScreen} />
        <Stack.Screen name="PersonDetails" component={PersonDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="People" component={HomeStackScreen} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
