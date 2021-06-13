import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { create } from "domain";

interface OMarker {
  position: { lat: number; lng: number };
}
interface Props {
  markers: Array<OMarker>;
  onMarkerRightClick: (marker: OMarker) => void;
}

interface ContainerStyle {
  width: string;
  height: string;
}

const containerStyle: ContainerStyle = {
  width: "100%",
  height: "80%",
};

export default function ParkingSpot(Props: Props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCwTiT-fWDJwQ7q-7Y3leDizGBbVjzsp84",
    mapIds:["2bcc3a8ad9f310fd"]
  });

  const [map, setMap] = React.useState(null);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{
        lat: 55.40161,
        lng: 10.395199,
      }}
      options={{mapTypeControl: false}}
      zoom={15}
    >
      {Props.markers.map((marker) => (
        <Marker
          key={"marker-" + marker.position.lat}
          {...marker}
          icon={{
            url: "https://www.pngrepo.com/png/133735/180/parking-location.png",
            scaledSize: new google.maps.Size(40,40),
          }}
          onRightClick={() => Props.onMarkerRightClick(marker)}
        />
      ))}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

// HJEM :55.39963145877151, 10.395390039185802