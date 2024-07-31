"use client";

import { ChangeEvent, Key, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { fetchHotels, changeFavorite } from "./store/hotels";
import { setSelectedCity, setSearchText } from "./store/filter";

import { Autocomplete, AutocompleteItem, Input } from "@nextui-org/react";

import { FaSearch } from "react-icons/fa";

import { HotelModel } from "./models/HotelModel";
import HotelCard from "./components/hotelCard/HotelCard";

const normalizeString = (str: string) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const hotelsResponse = useSelector(
    (state: RootState) => state.hotels.hotelsResponse
  );
  const favorites = useSelector((state: RootState) => state.hotels.favorites);

  const selectedCity = useSelector(
    (state: RootState) => state.filter.selectedCity
  );
  const searchText = useSelector((state: RootState) => state.filter.searchText);

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  const onChangeCity = (key: Key | null) => {
    dispatch(setSelectedCity(key ? key.toString() : "All"));
  };

  const onChangeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(e.target.value));
  };

  const onPressFavorite = (id: number) => {
    dispatch(changeFavorite(id));
  };

  return (
    <div className="my-4">
      <div className="container mx-auto bg-white p-2 rounded-xl">
        {hotelsResponse && (
          <>
            <div className="flex m-2 gap-3 sm:flex-row flex-col items-center">
              <Input
                radius="lg"
                placeholder="Otel ara..."
                onChange={onChangeSearchText}
                value={searchText}
                className="text-base"
                startContent={
                  <FaSearch className="text-tertiary/50 mb-1 pointer-events-none flex-shrink-0" />
                }
              />
              <div className="flex flex-col sm:flex-row gap-3 z-0">
                <Autocomplete
                  defaultItems={hotelsResponse.cities}
                  label="Şehir ara"
                  onSelectionChange={onChangeCity}
                  className="text-base"
                  selectedKey={
                    selectedCity !== "All" ? selectedCity : undefined
                  }
                >
                  {(item) => (
                    <AutocompleteItem key={item.value}>
                      {item.label}
                    </AutocompleteItem>
                  )}
                </Autocomplete>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
              {hotelsResponse.hotels.map((hotel: HotelModel) => {
                const normalizedHotelName = normalizeString(hotel.name);
                const normalizedSearchText = normalizeString(searchText);

                if (
                  (selectedCity === "All" || hotel.location === selectedCity) &&
                  normalizedHotelName.includes(normalizedSearchText)
                ) {
                  return (
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
                  );
                }
                return null;
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
