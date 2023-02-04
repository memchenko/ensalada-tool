import { MapContainer, TileLayer } from "react-leaflet";

import { MapLayerProps } from "./types";
import classes from "./MapLayer.module.css";

export function MapLayer(props: MapLayerProps) {
  const { center, zoom, children } = props;

  return (
    <div className={classes.root}>
      <MapContainer
        bounceAtZoomLimits
        center={center}
        zoom={zoom}
        maxZoom={18}
        className={classes.root}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        />
        {children}
      </MapContainer>
    </div>
  );
}
