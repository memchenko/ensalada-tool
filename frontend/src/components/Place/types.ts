import { Categories } from "../../shared/types/places";

export interface PlaceProps {
  id: number;
  lat: number;
  lon: number;
  category: Categories;
  onClick: UnaryFn<number, void>;
}
