import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { HotelListModel } from "@/app/models/HotelListModel";
import { db } from "@/app/api/db";
import { AppDispatch } from "../index";

export interface HotelsState {
  hotelsResponse?: HotelListModel;
  favorites: number[];
}

const initialState: HotelsState = {
  favorites: [],
};

const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    setHotels: (state, action: PayloadAction<HotelListModel>) => {
      state.hotelsResponse = action.payload;
      if (state.hotelsResponse) {
        state.hotelsResponse.hotels.forEach((hotel) => {
          hotel.isFavorite = state.favorites.includes(hotel.id);
        });
      }
    },
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const newFavoriteId = action.payload;
      const isFavorite = state.favorites.includes(newFavoriteId);

      if (isFavorite) {
        state.favorites = state.favorites.filter((id) => id !== newFavoriteId);
      } else {
        state.favorites.push(newFavoriteId);
      }

      if (state.hotelsResponse) {
        state.hotelsResponse.hotels.forEach((hotel) => {
          if (hotel.id === newFavoriteId) {
            hotel.isFavorite = !hotel.isFavorite;
          }
        });
      }
    },
  },
});

export const { setHotels, toggleFavorite } = hotelsSlice.actions;

export const fetchHotels = () => async (dispatch: AppDispatch) => {
  try {
    const response = await db;
    dispatch(setHotels(response));
  } catch (error) {
    console.error("Failed to fetch hotels: ", error);
  }
};

export const changeFavorite = (id: number) => (dispatch: AppDispatch) => {
  dispatch(toggleFavorite(id));
};

export default hotelsSlice.reducer;
