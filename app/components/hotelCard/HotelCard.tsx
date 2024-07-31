"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { FaStar, FaRegStar } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoLogoUsd } from "react-icons/io";

interface HotelCardProps {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
  isFavorite: boolean;
  onPressFavorite: (id: number) => void;
}

const HotelCard: React.FC<HotelCardProps> = ({
  id,
  image,
  name,
  location,
  price,
  isFavorite,
  onPressFavorite,
}) => {
  const router = useRouter();

  return (
    <div className="m-2 h-[300px] relative overflow-hidden flex justify-center rounded-xl shadow-md cursor-pointer">
      <Image
        src={image}
        onClick={() => {
          router.push(`/hotels/${id}`);
        }}
        className="hover:scale-110 transition-all duration-500"
        layout="fill"
        alt={name}
        title={name}
      />
      {isFavorite ? (
        <button
          onClick={() => {
            onPressFavorite(id);
          }}
        >
          <FaStar className="absolute top-2 right-2 text-primary" size={24} />
        </button>
      ) : (
        <button
          onClick={() => {
            onPressFavorite(id);
          }}
        >
          <FaRegStar className="absolute top-2 right-2 text-white" size={24} />
        </button>
      )}
      <div
        className="absolute bottom-2 bg-opacity-90 bg-tertiary w-[100%]"
        onClick={() => {
          router.push(`/hotels/${id}`);
        }}
        title={name}
      >
        <h1 className="text-white text-center pt-1">{name}</h1>
        <div className="flex justify-around pb-1">
          <div className="flex items-center">
            <FaMapLocationDot className="text-primary" size={16} />
            <h2 className="text-white ml-1">{location}</h2>
          </div>
          <div className="flex items-center">
            <IoLogoUsd className="text-primary" size={16} />
            <h2 className="text-white">{price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
