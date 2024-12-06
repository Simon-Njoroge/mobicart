import { configureStore } from '@reduxjs/toolkit';
import userReducer, { setUserFromLocalStorage } from './slices/userslice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Dispatch the action to restore the user data from localStorage
store.dispatch(setUserFromLocalStorage());  // Dispatch the action correctly

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

