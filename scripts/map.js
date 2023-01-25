mapboxgl.accessToken =
  "sk.eyJ1IjoibWVtY2hlbmtvIiwiYSI6ImNsZGMxbjF0MTA1cmczdnF6aXZqdXlzemsifQ.Ec6Wy6Aue-aNXGBuL7TfYw";

function useGeoJson() {
  const [state, setState] = React.useState({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          label: "green",
          avatar: "avatar1",
        },
        geometry: {
          type: "Point",
          coordinates: [2.1595, 41.3875],
        },
      },
      {
        type: "Feature",
        properties: {
          label: "red",
          avatar: "avatar2",
        },
        geometry: {
          type: "Point",
          coordinates: [2.1867, 41.3897],
        },
      },
      {
        type: "Feature",
        properties: {
          label: "blue",
          avatar: "avatar3",
        },
        geometry: {
          type: "Point",
          coordinates: [2.1816, 41.4],
        },
      },
    ],
  });

  const addMarker = ({ lng, lat, label }) => {
    const newState = {
      ...state,
      features: state.features
        .map(({ properties, geometry, ...rest }) => ({
          ...rest,
          geometry: { ...geometry },
          properties: { ...properties },
        }))
        .concat({
          type: "Feature",
          properties: {
            label: label,
            avatar: "avatar2",
          },
          geometry: {
            type: "Point",
            coordinates: [lng, lat],
          },
        }),
    };

    setState(newState);
  };

  return [state, addMarker];
}

function MapWidget({ filters }) {
  const container = React.useRef();
  const mapSDK = React.useRef();
  const [geojson, addMarker] = useGeoJson();

  React.useEffect(() => {
    if (!mapSDK.current && container.current) {
      mapSDK.current = new mapboxgl.Map({
        container: container.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [2.1664, 41.391],
        zoom: 12,

        testMode: true,
      });
    }

    if (mapSDK.current) {
      mapSDK.current.on("click", ({ lngLat }) => {
        const { lng, lat } = lngLat;

        addMarker({
          label: filters[0] || "red",
          lng,
          lat,
        });
      });
    }
  }, [filters, geojson, addMarker]);

  React.useEffect(() => {
    const markers = [];

    for (const marker of geojson.features) {
      const skip = !~filters.indexOf(marker.properties.label);

      if (skip) {
        continue;
      }

      const el = document.createElement("div");
      const markerImage = `url(images/${marker.properties.label}.png)`;
      const avatarImage = `url(images/${marker.properties.avatar}.svg)`;

      el.className = "marker";
      el.style.backgroundImage = `${avatarImage}, ${markerImage}`;

      markers.push(
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(mapSDK.current)
      );
    }

    return () => {
      markers.forEach((marker) => marker.remove());
    };
  }, [filters, geojson]);

  return <div ref={container} className="map"></div>;
}
