import React from "react";
import { Component } from "react"; // literally anything, don't even have to use it
import CovidPoint from "./CovidPoint";

export default function CovidInformation() {
  interface Point {
    src: string;
    message: string;
  }

  const covidPoints: Array<Point> = [
    {
      src: "https://cdn.pixabay.com/photo/2020/06/15/08/17/hand-sanitizer-5300802_960_720.png",
      message: " Der vil være rigeligt håndsprit tilgængeligt for alle",
    },
    {
      src: "https://lh3.googleusercontent.com/proxy/JdJvmfej6rJxZQLLmOTl_pL7M3QS95UfYs0ZRY1MUfN_Eowt0X5sJnYVRuzh84yuPTBntKULcCGO1LOTTw25Zy9NU67WcKB44ozzF1-dPjzWt7ejAnELrYI7xO8zvchUpeTd",
      message: "Vaccine",
    },
    {
      src: "https://static.thenounproject.com/png/2038370-200.png",
      message: "PCR eller Antigen Test",
    },
  ];

  return (
    <div style={{ textAlign: "center", padding: "0px", paddingTop: "5%" }}>
      <h1>Corona information</h1>
      <div>
        <CovidPoint src={covidPoints[0].src} message={covidPoints[0].message} />
        <div
          style={{
            backgroundColor: "#235c64",
            color: "white",
            paddingTop: "2%",
            paddingBottom: "2%",
          }}
        >
          <p>Alle bedes have enten</p>
          <div style={{ padding: "1px", margin: "0px", fontSize: "1rem" }}>
            <span style={{ fontWeight: "bold" }}>
              {" "}
              <img
                style={{ height: "2rem", marginRight: "10px" }}
                src={covidPoints[1].src}
              />
              Vaccine
            </span>{" "}
            <span>eller</span>{" "}
            <span style={{ fontWeight: "bold" }}>
              PCR/Antigen Test
              <img
                style={{ height: "2rem", marginLeft: "10px" }}
                src={covidPoints[2].src}
              />
            </span>
          </div>
          <div></div>
        </div>
        <div
          style={{
            paddingTop: "2%",
            height: "100%",
          }}
        >
          Og så vil vi gøre alle opmærksomme på{" "}
          <p>
            <a
              style={{ color: "#235c64" }}
              href="https://www.sst.dk/da/Udgivelser/2020/Private-fejringer-og-arrangementer"
            >
              Sundhedsstyrelsens anbefalinger for fest og forsamlinger
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
