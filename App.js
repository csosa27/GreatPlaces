import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlacesNavigator from './navigation/PlacesNavigator';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import placesReducer from './store/places-reducer';

export default function App() {
  const rootReducer = combineReducers({
    places: placesReducer
  });

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}

