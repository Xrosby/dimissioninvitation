import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { create } from "domain";

interface OMarker {
  position: { lat: number; lng: number };
  linkId: string;
}
interface Props {
  markers: Array<OMarker>;
  markerClick: (e: google.maps.MapMouseEvent, link: string) => void;
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
    mapIds: ["2bcc3a8ad9f310fd"],
  });

  let onMarkerClick = function (
    e: google.maps.MapMouseEvent,
    linkId: string
  ): void {
    let link = document.getElementById(linkId);
    link?.click();
  };

  const [map, setMap] = React.useState(null);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{
        lat: 55.40161,
        lng: 10.395199,
      }}
      options={{ mapTypeControl: false }}
      zoom={15}
    >
      <Marker
        icon={{
          url: "https://i.ibb.co/4thZrWQ/party-loc.png",
          scaledSize: new google.maps.Size(46, 46),
        }}
        onClick={(e) => onMarkerClick(e, "link-4")}
        position={{ lat: 55.39963145877151, lng: 10.395390039185802 }}
      />

      {Props.markers.map((marker) => (
        <Marker
          key={"marker-" + marker.position.lat}
          position={marker.position}
          icon={{
            url: "https://www.pngrepo.com/png/133735/180/parking-location.png",
            scaledSize: new google.maps.Size(40, 40),
          }}
          onClick={(e) => Props.markerClick(e, marker.linkId)}
        />
      ))}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

// HJEM :55.39963145877151, 10.395390039185802
//Comm