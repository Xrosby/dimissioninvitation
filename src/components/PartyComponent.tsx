import React from "react";
import { Component } from "react"; // literally anything, don't even have to use it
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default function PartyComponent() {
  return (
    <div style={{ textAlign: "center", padding: "10%", paddingTop: "2%" }}>
      <h1>Mads og Lasses Dimission!</h1>
      <div
        style={{
          padding: "10px",
          minWidth: "50%",
          marginTop: "7%",
        }}
      >
        <h4>Kære gæst</h4>
        <p style={{ marginTop: "4%" }}>
          Så blev det endelig tid for os at dimitere! I denne anledning
          inviteres du hermed til vores dimissionsfest i haven på{" "}
          <a
            style={{ color: "white", fontWeight: "bold" }}
            href="https://goo.gl/maps/EL35JW7UzUMopPmy8"
          >
            Ryttergade 10 {<LocationOnIcon/>}
          </a>
          , Odense. Der vil være mad og drikke til både børn og voksne. Vi
          samles en del mennesker og har derfor valgt at vedlægge nogle
          coronainstruktioner. Vi glæder os rigtig meget til at se jer
          allesammen!
        </p>
      </div>
    </div>
  );
}