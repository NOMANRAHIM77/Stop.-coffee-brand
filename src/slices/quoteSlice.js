import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchRandomQuote = createAsyncThunk(
  'quote/fetchRandom',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://dummyjson.com/quotes/random');
      return response.data; 
    } catch (error) {
     
      return rejectWithValue(error.response?.data?.message || "SYSTEM CONNECTION ERROR");
    }
  }
);

const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    data: { 
      quote: "CAFFEINE IS THE ONLY TRUTH.", 
      author: "Anaonymus" 
    },
    status: 'idle', 
    error: null,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomQuote.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload; 
      })
      .addCase(fetchRandomQuote.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default quoteSlice.reducer;