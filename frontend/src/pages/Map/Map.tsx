import { MapLayer } from "../../components/MapLayer";

export function Map() {
  return (
    <MapLayer center={[41, 1]} zoom={21}>
      <div></div>
    </MapLayer>
  );
}
