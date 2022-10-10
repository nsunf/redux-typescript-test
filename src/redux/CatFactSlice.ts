import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./Store";

interface CatFactState {
  count: number;
  facts: string[];
}

const initialState: CatFactState = {
  count: 0,
  facts: []
}

const fetchCatFact = createAsyncThunk(
  'catFacts/fetchCatFact',
  async () => {
    const res = await axios.get('https://catfact.ninja/fact');
    console.log(res);
    return res.data.fact;
  }
)

// https://catfact.ninja/fact
export const catFactSlice = createSlice({
  name: 'catFact',
  initialState,
  reducers: {
    addCustomFact: (state, action: PayloadAction<string>) => {
      state.facts = state.facts.concat(action.payload);
      state.count = state.facts.length;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCatFact.fulfilled, (state, action) => {
      state.facts.push(action.payload);
      state.count = state.facts.length;
    })
  }
});

export const { addCustomFact } = catFactSlice.actions;
export { fetchCatFact };

export const selectCount = (state: RootState) => state.catFact.count;
// export const selectFacts = (state: RootState) => state.catFact.facts;

export default catFactSlice.reducer;