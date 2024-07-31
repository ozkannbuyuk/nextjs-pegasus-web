"use client";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/store";
import { fetchHotels, changeFavorite } from "@/app/store/hotels";

import { HotelModel } from "@/app/models/HotelModel";
import HotelCard from "@/app/components/hotelCard/HotelCard";

const FavoriteHotels: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const hotelsResponse = useSelector(
    (state: RootState) => state.hotels.hotelsResponse
  );

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  const onPressFavorite = (id: number) => {
    dispatch(changeFavorite(id));
  };

  const favoriteHotels = hotelsResponse?.hotels.filter(
    (hotel: HotelModel) => hotel.isFavorite
  );

  return (
    <div className="my-4">
      <div className="container mx-auto bg-white p-2 rounded-xl">
        {favoriteHotels && favoriteHotels.length > 0 ? (
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
            {favoriteHotels.map((hotel: HotelModel) => (
              <HotelCard
                key={hotel.id}
                id={hotel.id}
                name={hotel.name}
                location={hotel.location}
                price={hotel.price}
                image={hotel.image}
                isFavorite={hotel.isFavorite}
                onPressFavorite={onPressFavorite}
              />
            ))}
          </div>
        ) : (
          <h2 className="text-base font-bold text-tertiary text-center">
            Favori otel bulunamadı.
          </h2>
        )}
      </div>
    </div>
  );
};

export default FavoriteHotels;
