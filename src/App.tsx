import "./App.css";
import ParkingSpot from "./components/ParkingSpot";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { create } from "domain";
import PartyComponent from "./components/PartyComponent";
import CovidInformation from "./components/CovidInformation";
import Plan from "./components/Plan";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  interface OMarker {
    position: { lat: number; lng: number };
  }

  const markers: Array<OMarker> = [
    {
      position: {
        lat: 55.40161,
        lng: 10.395199,
      },
    },
    {
      position: {
        lat: 55.40096930304905,
        lng: 10.396582131568525,
      },
    },
    {
      position: {
        lat: 55.40197146648503 ,
        lng: 10.392858034968008 ,
      },
    },
   
  ];

  //55.40197146648503, 10.392858034968008

  let onMarkerRightClick = function (marker: OMarker): void {
    console.log("CLick");
  };

  const colOptions = "col-lg-6 col-xl-6 col-md-12 col-sm-12";
  const minHeight = "472px";
  return (
    <div className="main-page">
      <div className="row">
        <div
          style={{
            minHeight: minHeight,
            backgroundColor: "#364F6B",
            margin: "0px",
            color: "white",
          }}
          className={colOptions}
        >
          <PartyComponent />
        </div>
        <div
          style={{
            minHeight: minHeight,
            backgroundColor: "#2f7f8b",
            margin: "0px",
          }}
          className={colOptions}
        >
          <Plan />
        </div>
      </div>
      <div className="row">
        <div
          style={{
            padding: "0px",
            minHeight: minHeight,
            backgroundColor: "#3ba3b3",
            margin: "0px",
          }}
          className={colOptions}
        >
          <CovidInformation />
        </div>
        <div
          style={{
            minHeight: minHeight,
            margin: "0px",
            backgroundColor: "#F5F5F5",
            textAlign: "center",
          }}
          className={colOptions}
        >
          <h1>Parkeringsmuligheder</h1>{" "}
          <ParkingSpot
            key="spot"
            onMarkerRightClick={onMarkerRightClick}
            markers={markers}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * 
    parkingSpots.map((spot) => (
    <ParkingSpot lat={spot.lat} lng={spot.lng} />
  ));
 */

export default App;
