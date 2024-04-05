import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

type Programs = {
  title: string;
  description: string;
  programType: string;
  images: {
    [key: string]: {
      url: string;
      width: number;
      height: number;
    };
  };
  releaseYear: number;
};

interface ProgramDataState {
  total: number;
  entries: Programs[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProgramDataState = {
  total: 0,
  entries: [],
  status: 'idle',
  error: null,
};
/* eslint-disable react-refresh/only-export-components */
export const fetchPrograms = createAsyncThunk(
  'program/fetchPrograms',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/sample.json');
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      return data.entries;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An unknown error occurred.");
    }
  }
);


export const ProgramDataSlice = createSlice({
  name: 'program',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPrograms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPrograms.fulfilled, (state, action: PayloadAction<Programs[]>) => {
        state.status = 'succeeded';
        state.entries = action.payload;
      })
      .addCase(fetchPrograms.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});



export default ProgramDataSlice.reducer;



