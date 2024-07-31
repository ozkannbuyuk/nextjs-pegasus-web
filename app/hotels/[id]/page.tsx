"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/store";
import { fetchHotels, changeFavorite } from "@/app/store/hotels";

import useWindowSize from "@/app/hooks/useWindowSize";

import { HotelModel } from "@/app/models/HotelModel";
import HotelCard from "@/app/components/hotelCard/HotelCard";

import { Input } from "@nextui-org/react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

const HotelDetail: React.FC = () => {
  const params = useParams();

  const dispatch = useDispatch<AppDispatch>();

  const hotelsResponse = useSelector(
    (state: RootState) => state.hotels.hotelsResponse
  );
  const favorites = useSelector((state: RootState) => state.hotels.favorites);

  const [hotelInfo, setHotelInfo] = useState<HotelModel>();

  const [value, setValue] = useState<DateValueType>({
    startDate: new Date(),
    endDate: new Date(),
  });

  useEffect(() => {
    if (!hotelsResponse) {
      dispatch(fetchHotels());
    } else {
      const hotel = hotelsResponse.hotels.find(
        (hotel) => hotel.id === Number(params.id)
      );
      setHotelInfo(hotel);
    }
  }, [hotelsResponse, params.id, dispatch]);

  const handleDateChange = (newValue: DateValueType) => {
    setValue(newValue);
  };

  const onPressFavorite = (id: number) => {
    dispatch(changeFavorite(id));
  };

  const { width } = useWindowSize();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className="my-4">
      <div className="container mx-auto bg-white p-2 rounded-xl">
        {width && width > 1024 ? (
          <div className="relative h-[234px] rounded-xl overflow-hidden mb-4">
            <Image
              src="/images/banner.png"
              fill
              alt="Banner"
              className="object-cover"
            />
          </div>
        ) : (
          ""
        )}

        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-4 lg:col-span-2 flex flex-col gap:2 lg:gap-4">
            <h2 className="text-xl lg:text-2xl font-bold text-tertiary m-2">
              {hotelInfo?.name}
            </h2>

            {hotelInfo && (
              <HotelCard
                id={hotelInfo.id}
                name={hotelInfo.name}
                location={hotelInfo.location}
                price={hotelInfo.price}
                image={hotelInfo.image}
                isFavorite={favorites.includes(hotelInfo.id)}
                onPressFavorite={onPressFavorite}
              />
            )}
            <p className="text-tertiary text-base m-2">
              Eiusmod ex nulla Lorem nulla reprehenderit quis ex. Anim sint
              laborum ad aute aliquip. Amet fugiat voluptate eiusmod ipsum Lorem
              non culpa et proident quis sunt non sint dolor. Irure adipisicing
              aliqua proident et id consequat minim quis Lorem mollit id. Esse
              dolor commodo qui anim anim deserunt labore reprehenderit
              reprehenderit anim nulla culpa elit amet. Mollit nisi ea ullamco
              duis adipisicing proident Lorem consectetur.
            </p>
            <p className="text-tertiary text-base m-2">
              Eiusmod ex nulla Lorem nulla reprehenderit quis ex. Anim sint
              laborum ad aute aliquip. Amet fugiat voluptate eiusmod ipsum Lorem
              non culpa et proident quis sunt non sint dolor. Irure adipisicing
              aliqua proident et id consequat minim quis Lorem mollit id. Esse
              dolor commodo qui anim anim deserunt labore reprehenderit
              reprehenderit anim nulla culpa elit amet. Mollit nisi ea ullamco
              duis adipisicing proident Lorem consectetur.
            </p>
          </div>
          <div className="col-span-4 lg:col-span-2 bg-gray-100 rounded-lg flex flex-col items-center">
            <h3 className="text-xl lg:text-2xl font-bold text-tertiary m-2">
              Rezervasyon
            </h3>
            <form className="w-full">
              <div className="flex flex-col md:flex-row gap:2 lg:gap-4">
                <Input type="text" label="Ad" placeholder="Özkan" />
                <Input type="text" label="Soyad" placeholder="Büyük" />
              </div>

              <div className="flex flex-col md:flex-row gap:2 lg:gap-4">
                <Input
                  type="tel"
                  label="Telefon"
                  placeholder="+90 0555 555 5555"
                />
                <Input
                  type="email"
                  label="Email"
                  placeholder="ozkanbuyuk@icloud.com"
                />
              </div>
              <div className="flex flex-col md:flex-row gap:2 lg:gap-4">
                <Input type="number" label="Yetişkin" placeholder="1" />
                <Input type="number" label="Çocuk" placeholder="0" />
              </div>
              <div>
                <h4 className="text-tertiary text-sm font-semibold m-2">
                  Giriş Tarihi - Çıkış Tarihi
                </h4>
                <Datepicker
                  primaryColor={"orange"}
                  inputClassName={
                    "p-3 border border-[#FDC43B] rounded-lg w-full mb-2"
                  }
                  value={value}
                  onChange={handleDateChange}
                  disabledDates={[
                    {
                      startDate: "0000-01-01",
                      endDate: "2024-01-01",
                    },
                  ]}
                />
              </div>
              <button
                onClick={handleClick}
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-hover transition-all duration-500 w-full"
              >
                <h1 className="text-tertiary text-sm font-semibold">
                  Rezervasyon Kapalı
                </h1>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
