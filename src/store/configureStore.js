import { configureStore } from '@reduxjs/toolkit';
// import exampleReducer from '../slices/exampleSlice';

const store = configureStore({
  reducer: {
    // example: exampleReducer,
    // Add more reducers here as your app grows
  },
});

export default store;
