import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type SearchHistory = {
  history: string[];
};

const initialState: SearchHistory = {
  history: [],
};

const SearchHistorySlices = createSlice({
  name: "SearchHistory",
  initialState,
  reducers: {
    addPostCodetoHistory: (state, action: PayloadAction<string>) => {
      state.history.push(action.payload);
    },
    removePostCodeFromHistory: (state, action: PayloadAction<string>) => {
      state.history = state.history.filter(
        (postcode: string) => postcode !== action.payload
      );
    },
  },
});

const { actions, reducer } = SearchHistorySlices;
export const { addPostCodetoHistory, removePostCodeFromHistory } = actions;
export const SearchHistoryReducer = reducer;
