import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/AuthSlice';

export const rootState = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof rootState.getState>;
