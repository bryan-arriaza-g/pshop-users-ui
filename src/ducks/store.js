import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { ducks } from './index';

const store = configureStore({
  reducer: {
    users: combineReducers({
      ...ducks.users.reducers,
    }),
  },
});

export default store;
