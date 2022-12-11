import {combineReducers, configureStore} from '@reduxjs/toolkit';
import peopleListSliceReducer from '../components/peopleListSlice';
import favoritesListSliceReducer from '../components/favoritesListSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  peopleList: peopleListSliceReducer,
  favoritesList: favoritesListSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
