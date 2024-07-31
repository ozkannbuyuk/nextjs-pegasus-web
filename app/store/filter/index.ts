import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  selectedCity: string;
  searchText: string;
}

const initialState: FilterState = {
  selectedCity: "All",
  searchText: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSelectedCity: (state, action: PayloadAction<string>) => {
      state.selectedCity = action.payload;
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const { setSelectedCity, setSearchText } = filterSlice.actions;

export default filterSlice.reducer;
