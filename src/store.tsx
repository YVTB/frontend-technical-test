import { configureStore } from '@reduxjs/toolkit';
import  ProgramDataSlice from './redux/moviesSlice';

export const store = configureStore({
  reducer: {
    programs: ProgramDataSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;