import { HotelModel } from "./HotelModel";
import { CityModel } from "./CityModel";

export interface HotelListModel {
  hotels: HotelModel[];
  cities: CityModel[];
}
