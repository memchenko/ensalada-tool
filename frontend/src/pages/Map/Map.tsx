import { MapLayer } from "../../components/MapLayer";

const w = window.open("https://maps.app.goo.gl/RTTkfag2gA6vLAdj9", "_blank", {
  popup: true,
});

console.log(JSON.stringify(w));

export function Map() {
  const handleLoad = (event: any) => {
    console.log(event);
  };

  return (
    <MapLayer center={[41, 1]} zoom={21}>
      <div></div>
    </MapLayer>
  );
}
