import { configureStore } from '@reduxjs/toolkit';
import formReducer from './features/formSlice';
import financeReducer from './features/financeSlice';

// Create the Redux store
export const makeStore = () => {
  return configureStore({
    reducer: {
      form: formReducer,
      finance: financeReducer
    },
  });
};

// Infer the type of the store
const store = makeStore();

// Define and export RootState and AppDispatch types
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default store;
