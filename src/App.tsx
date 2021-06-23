import "./App.css";
import ParkingSpot from "./components/ParkingSpot";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { create } from "domain";
import PartyComponent from "./components/PartyComponent";
import CovidInformation from "./components/CovidInformation";
import Plan from "./components/Plan";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
function App() {
  interface OMarker {
    position: { lat: number; lng: number };
    linkId: string;
    link: string;
  }

  const markers: Array<OMarker> = [
    {
      position: {
        lat: 55.40161,
        lng: 10.395199,
      },
      linkId: "link-1",
      link: "https://goo.gl/maps/eH7caAntbbokPQbe8"
    },
    {
      position: {
        lat: 55.40096930304905,
        lng: 10.396582131568525,
      },
      linkId: "link-2",
      link: "https://goo.gl/maps/stqPtYxeULPbLSJT7"
    },
    {
      position: {
        lat: 55.40197146648503,
        lng: 10.392858034968008,
      },
      linkId: "link-3",
      link: "https://goo.gl/maps/cuhyHs8wRgpkHV1J6"
    },
    {
      position: {
        lat: 55.39905817737084,
        lng: 10.396142865680735,
      },
      linkId: "link-4",
      link: "https://goo.gl/maps/v6UGaGzBLK5ycMHH9"
    },
  ];

 // 55.39905817737084, 10.396142865680735
  let onMarkerClick = function (
    e: google.maps.MapMouseEvent,
    linkId: string
  ): void {
    let link = document.getElementById(linkId);
    link?.click();
  };

  let partyCardColor = "#f5f3de";
  let planCardColor = "#F9F6EE";
  let covidCardColor = "#F9F6EE";
  let parkingCardColor = "#f5f3de";

  const colOptions = "col-lg-6 col-xl-6 col-md-12 col-sm-12 dim-card";
  const minHeight = "468px";
  return (
    <div className="main-page">
      <div className="row">
        <div
          style={{
            minHeight: minHeight,
            backgroundColor: partyCardColor,
            margin: "0px",
            padding: "0px",
            color: "black",
          }}
          className={colOptions}
        >
          <PartyComponent />
        </div>
        <div
          style={{
            minHeight: minHeight,
            backgroundColor: planCardColor,
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
            backgroundColor: covidCardColor,
            margin: "0px",
            color: "black",
          }}
          className={colOptions + " covid-card"}
        >
          <CovidInformation />
        </div>
        <div
          id="parking-card"
          style={{
            minHeight: minHeight,
            margin: "0px",
            backgroundColor: parkingCardColor,
            textAlign: "center",
          }}
          className={colOptions}
        >
          <h1
            style={{
              marginTop: "2%",
            }}
          >
            Parkeringsmuligheder
          </h1>{" "}
          Husk at nogle af parkeringsstederne kræver betaling
          <ParkingSpot
            key="spot"
            markerClick={onMarkerClick}
            markers={markers}
          />
        </div>
      </div>
      <div style={{ display: "none" }}>
   
        {markers.map(m => <a id={m.linkId} href={m.link}></a>)}
    
        <a id="party-link" href="https://goo.gl/maps/EL35JW7UzUMopPmy8"></a>
      </div>
    </div>
  );
}

export default App;


//<a id="link-1" href="https://goo.gl/maps/eH7caAntbbokPQbe8"></a>
//<a id="link-2" href="https://goo.gl/maps/stqPtYxeULPbLSJT7"></a>
//<a id="link-3" href="https://goo.gl/maps/cuhyHs8wRgpkHV1J6"></a>